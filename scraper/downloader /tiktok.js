const fetch = require('node-fetch');

const downloadTikTokVideo = async (url) => {
    try {
        const response = await fetch(`https://api.tiklydown.eu.org/api/download/v3?url=${encodeURIComponent(url)}`);
        const data = await response.json();

        const result = {
            type: data.result.type,
            desc: data.result.desc,
            avatar: data.result.author.avatar,
            nickname: data.result.author.nickname,
            like: data.result.statistics.likeCount,
            comment: data.result.statistics.commentCount,
            share: data.result.statistics.shareCount,
            mp4: data.result.video,
            mp3: data.result.music
        };

        return result;
    } catch (error) {
        console.error('Error fetching TikTok video:', error);
        return null;
    }
}

module.exports = downloadTikTokVideo