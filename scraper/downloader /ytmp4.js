const ytdl = require('ytdl-core');

const downloadYtmp4 = async (url) => {
  try {
    // Mendapatkan info video
    const info = await ytdl.getInfo(url);
    const videoDetails = info.videoDetails;

    // Mendapatkan format unduhan audio
    const format = ytdl.chooseFormat(info.formats, { quality: 'highestaudio' });

    // Mengumpulkan informasi yang diinginkan
    const videoInfo = {
      title: videoDetails.title,
      author: videoDetails.author.name,
      thumbnail: videoDetails.thumbnails[videoDetails.thumbnails.length - 1].url, // Mengambil thumbnail resolusi tertinggi
      views: videoDetails.viewCount,
      uploadDate: videoDetails.uploadDate,
      description: videoDetails.description,
      video_url: format.url, // Link download audio
    };

    return videoInfo;
  } catch (err) {
    console.error(`Failed to fetch video info: ${err.message}`);
    throw err;
  }
};

module.exports = downloadYtmp4;