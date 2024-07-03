const axios = require('axios');
const cheerio = require('cheerio');

function getLatestAnime() {
	return new Promise((resolve, reject) => {
		axios.get('https://www.mynimeku.com/').then(({ data }) => {
			let $ = cheerio.load(data);
			let result = [];
			$('div.flexbox-item > a').each(function(i, e) {
				let title = $(e).attr('title');
				let link = $(e).attr('href');
				let status = $(e).find('div.flexbox-status').text();
				let thumb = $(e).find('div.flexbox-thumb > img').attr('data-src');
				let episode = $(e).find('div.flexbox-episode > span.eps').text().split(' ')[1];
				let type = $(e).find('div.flexbox-type').text();
				result.push({ title, status, episode, type, thumb, link });
			});
			resolve(result);
		}).catch(reject);
	});
}

module.exports = getLatestAnime;