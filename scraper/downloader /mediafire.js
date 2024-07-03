const axios = require('axios');
const cheerio = require('cheerio');

const mediafireDl = async (url) => {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const hasil = [];
        const link = $('a#downloadButton').attr('href');
        const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').trim();
        const seplit = link.split('/');
        const nama = seplit[5];
        const mime = nama.split('.')[1];
        hasil.push({ nama, mime, size, link });
        return hasil;
    } catch (error) {
        console.error('Error fetching Mediafire link:', error);
        throw error;
    }
};

module.exports = mediafireDl;