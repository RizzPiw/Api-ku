const axios = require('axios');
const cheerio = require('cheerio');

async function mangatoon(search) {
	if (!search) return "Masukkan Query";
	try {
		const res = await axios.get(`https://mangatoon.mobi/en/search?word=${search}`, {
			method: "GET",
			headers: {
				"User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36"
			}
		});
		const hasil = [];
		const $ = cheerio.load(res.data);
		$('div.recommend-item').each(function(a, b) {
			let name = $(b).find('div.recommend-comics-title > span').text();
			let type = $(b).find('div.comics-type > span').text().slice(1).split(/ /g).join("");
			let url = $(b).find('a').attr('href');
			let thumb = $(b).find('a img').attr('data-src') || $(b).find('a img').attr('src');
			const result = {
			    name,
				type,
				url,
				thumb: thumb.startsWith('http') ? thumb : 'https://mangatoon.mobi' + thumb
			};
			hasil.push(result);
		});
		let filt = hasil.filter(v => v.name !== undefined && v.type !== undefined);
		return filt;
	} catch (eror) {
		return "Error" + eror;
	}
}