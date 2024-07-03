const fetch = require('node-fetch');
const cheerio = require('cheerio');

async function sfileDl(url) {
    let res = await fetch(url);
    let $ = cheerio.load(await res.text());
    let filename = $('div.w3-row-padding').find('img').attr('alt');
    let mimetype = $('div.list').text().split(' - ')[1].split('\n')[0];
    let filesize = $('#download').text().replace(/Download File/g, '').replace(/\(|\)/g, '').trim();
    let download = $('#download').attr('href') + '&k=' + Math.floor(Math.random() * (15 - 10 + 1) + 10);
    return { filename, filesize, mimetype, download };
}

module.exports = sfileDl;