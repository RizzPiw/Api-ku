const fetch = require('node-fetch');
const cheerio = require('cheerio');

function xnxxdl(URL) {
	return new Promise((resolve, reject) => {
		fetch(`${URL}`, { method: 'get' })
			.then(res => res.text())
			.then(res => {
				let $ = cheerio.load(res, {
					xmlMode: false
				});
				const title = $('meta[property="og:title"]').attr('content');
				const duration = $('meta[property="og:duration"]').attr('content');
				const image = $('meta[property="og:image"]').attr('content');
				const videoType = $('meta[property="og:video:type"]').attr('content');
				const videoWidth = $('meta[property="og:video:width"]').attr('content');
				const videoHeight = $('meta[property="og:video:height"]').attr('content');
				const info = $('span.metadata').text();
				const videoScript = $('#video-player-bg > script:nth-child(6)').html();
				const files = {
					low: (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],
					high: (videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);') || [])[1],
					HLS: (videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);') || [])[1],
					thumb: (videoScript.match('html5player.setThumbUrl\\(\'(.*?)\'\\);') || [])[1],
					thumb69: (videoScript.match('html5player.setThumbUrl169\\(\'(.*?)\'\\);') || [])[1],
					thumbSlide: (videoScript.match('html5player.setThumbSlide\\(\'(.*?)\'\\);') || [])[1],
					thumbSlideBig: (videoScript.match('html5player.setThumbSlideBig\\(\'(.*?)\'\\);') || [])[1],
				};
				resolve({
					status: 200,
					result: {
						title,
						URL,
						duration,
						image,
						videoType,
						videoWidth,
						videoHeight,
						info,
						files
					}
				});
			})
			.catch(err => reject({ code: 503, status: false, result: err }));
	});
}

module.exports = xnxxdl;