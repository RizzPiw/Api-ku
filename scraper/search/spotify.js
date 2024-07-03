const axios = require('axios');

const SPOTIFY_CLIENT_ID = '4c4fc8c3496243cbba99b39826e2841f';
const SPOTIFY_CLIENT_SECRET = 'd598f89aba0946e2b85fb8aefa9ae4c8';

const axios = require('axios');

// Function to convert milliseconds to minutes and seconds
const convert = ms => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};

// Function to get Spotify credentials
const getSpotifyCreds = async () => {
  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      'grant_type=client_credentials',
      {
        headers: {
          Authorization: 'Basic ' + Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64'),
        },
      }
    );
    const json = response.data;
    if (!json.access_token) {
      return {
        msg: "Can't generate token!",
      };
    }
    return {
      data: json,
    };
  } catch (e) {
    return {
      msg: e.message,
    };
  }
};

// Function to get lyrics from Lyrics.ovh
const getLyrics = async (title, artist) => {
  try {
    const response = await axios.get(
      `https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(title)}`
    );
    const json = response.data;
    if (!json.lyrics) {
      return {
        msg: "Can't find lyrics!",
      };
    }
    return {
      lyrics: json.lyrics,
    };
  } catch (e) {
    return {
      msg: e.message,
    };
  }
};

// Function to get track info including lyrics and album details
const getInfo = async url => {
  try {
    const creds = await getSpotifyCreds();
    if (!creds.data) return creds;

    const response = await axios.get('https://api.spotify.com/v1/tracks/' + url.split('track/')[1], {
      headers: {
        Authorization: 'Bearer ' + creds.data.access_token,
      },
    });
    const json = response.data;

    // Get lyrics
    const lyrics = await getLyrics(json.name, json.artists[0].name);

    return {
      album: {
        album_type: json.album.album_type,
        artists: json.album.artists,
        available_markets: json.album.available_markets,
        external_urls: json.album.external_urls,
        href: json.album.href,
        id: json.album.id,
        images: json.album.images,
        name: json.album.name,
        release_date: json.album.release_date,
        release_date_precision: json.album.release_date_precision,
        total_tracks: json.album.total_tracks,
        type: json.album.type,
        uri: json.album.uri,
      },
      artists: json.artists,
      available_markets: json.available_markets,
      disc_number: json.disc_number,
      duration: convert(json.duration_ms),
      explicit: json.explicit,
      external_ids: json.external_ids,
      external_urls: json.external_urls,
      href: json.href,
      id: json.id,
      is_local: json.is_local,
      name: json.name,
      popularity: json.popularity,
      preview_url: json.preview_url,
      track_number: json.track_number,
      type: json.type,
      uri: json.uri,
      lyrics: lyrics.lyrics || 'No lyrics found',
    };
  } catch (e) {
    return {
      msg: e.message,
    };
  }
};

const searching = async (query, type = 'track', limit = 20) => {
  try {
    const creds = await getSpotifyCreds();
    if (!creds.status) return creds;

    const response = await axios.get(`https://api.spotify.com/v1/search?query=${query}&type=${type}&offset=0&limit=${limit}`, {
      headers: {
        Authorization: 'Bearer ' + creds.data.access_token,
      },
    });
    const json = response.data;
    if (!json.tracks.items || json.tracks.items.length < 1) {
      return {
        status: false,
        msg: 'Music not found!',
      };
    }
    
    const data = json.tracks.items.map(v => ({
      title: v.album.artists[0].name + ' - ' + v.name,
      duration: convert(v.duration_ms),
      popularity: v.popularity + '%',
      preview: v.preview_url,
      url: v.external_urls.spotify,
    }));
    return {
      data,
    };
  } catch (e) {
    return {
      msg: e.message,
    };
  }
};

module.exports = { getInfo, searching };