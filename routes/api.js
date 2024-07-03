__path = process.cwd();

require("../settings.js");
var express = require("express");
var axios = require("axios");
var qs = require("qs");
var fetch = require("node-fetch");
var cheerio = require("cheerio");
var request = require("request");
var fs = require("fs");
var dns = require('dns');
var ipRange = require('ip-range-check');
var router = express.Router();
var creator = global.creator;
const listkey = global.apikey;

const api = require('caliph-api')
const ytdl = require('ytdl-core')
const yts = require('yt-search')
const scr = require("@bochilteam/scraper");
const os = require('os');
const { performance } = require('perf_hooks');
const { color, bgcolor } = require(__path + "/lib/color.js");
const { fetchJson } = require(__path + "/lib/fetcher.js");
const options = require(__path + "/lib/options.js");
const { getBuffer } = require(__path + "/lib/functions.js");
const oxy = require(__path + "/lib/oxy.js");

var { Vokal, Base, Searchnabi, Gempa } = require("./../lib");

_ = require("lodash");

var len = 15;
var arr = "123456789abcdefghijklmnopqrstuvwxyz";
var random = "";

for (var i = len; i > 0; i--) {
random += arr[Math.floor(Math.random() * arr.length)];
}

var lenn = 5;
var randomlagi = "";

for (var i = lenn; i > 0; i--) {
randomlagi += arr[Math.floor(Math.random() * arr.length)];
}

var randomTextNumber =
random + randomlagi + "---------Apriliya-Putri-Fatmawati" + "LOLI--KILLERS";

function muptime(seconds) {
const pad = (s) => (s < 10 ? '0' : '') + s;
const hours = Math.floor(seconds / 3600);
const minutes = Math.floor((seconds % 3600) / 60);
const sec = Math.floor(seconds % 60);
return `${pad(hours)}:${pad(minutes)}:${pad(sec)}`;
}

/** @note
 * Liat cara nulis code yang bener
 */

//===============[ Info Server ]===============\\
router.get('/status', async (req, res) => {
try {
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const start = performance.now();
const end = performance.now();
const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
const totalMemory = (os.totalmem() / 1024 / 1024).toFixed(2);
const cpu = os.cpus()[0].model;
const port = process.env.PORT || 8080;
const ipResponse = await fetch('https://api.ipify.org/?format=json');
const ipData = await ipResponse.json();

const status = {
status: 'online',
memory: `${memoryUsage} MB / ${totalMemory} MB`,
cpu: cpu,
port: port,
ip: ipData.ip,
time: `${hours} : ${minutes} : ${seconds}`,
uptime: muptime(process.uptime()),
speed: `${(end - start).toFixed(2)} ms`,
};

res.json(status);
} catch (error) {
console.error(error);
res.json(`${error.message}`);
}
});


//========================================\\
// Asupan

router.get("/asupan/china", async (req, res, next) => {
const china = require('../scraper/asupan/china.js')
var apikey = req.query.apikey;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
 var result = china[Math.floor(Math.random() * china.length)];
res.json({
status: true,
creator: `${global.creator}`,
result: {
url: result,
}
})
} else {
res.json(loghandler.apikey);
}
});

router.get("/asupan/vietnam", async (req, res, next) => {
const vietnam = require('../scraper/asupan/vietnam.js')
var apikey = req.query.apikey;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
 var result = vietnam[Math.floor(Math.random() * vietnam.length)];
res.json({
status: true,
creator: `${global.creator}`,
result: {
url: result,
}
})
} else {
res.json(loghandler.apikey);
}
});

router.get("/asupan/thailand", async (req, res, next) => {
const thailand = require('../scraper/asupan/thailand.js')
var apikey = req.query.apikey;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
 var result = thailand[Math.floor(Math.random() * thailand.length)];
res.json({
status: true,
creator: `${global.creator}`,
result: {
url: result,
}
})
} else {
res.json(loghandler.apikey);
}
});

router.get("/asupan/indonesia", async (req, res, next) => {
const Indonesia = require('../scraper/asupan/Indonesia.js')
var apikey = req.query.apikey;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
 var result = Indonesia[Math.floor(Math.random() * Indonesia.length)];
res.json({
status: true,
creator: `${global.creator}`,
result: {
url: result,
}
})
} else {
res.json(loghandler.apikey);
}
});

router.get("/asupan/korea", async (req, res, next) => {
const korea = require('../scraper/asupan/korea.js')
var apikey = req.query.apikey;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
 var result = korea[Math.floor(Math.random() * korea.length)];
res.json({
status: true,
creator: `${global.creator}`,
result: {
url: result,
}
})
} else {
res.json(loghandler.apikey);
}
});

router.get("/asupan/japan", async (req, res, next) => {
const japan = require('../scraper/asupan/japan.js')
var apikey = req.query.apikey;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
 var result = japan[Math.floor(Math.random() * japan.length)];
res.json({
status: true,
creator: `${global.creator}`,
result: {
url: result,
}
})
} else {
res.json(loghandler.apikey);
}
});

router.get("/asupan/malaysia", async (req, res, next) => {
const malaysia = require('../scraper/asupan/malaysia.js')
var apikey = req.query.apikey;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
 var result = malaysia[Math.floor(Math.random() * malaysia.length)];
res.json({
status: true,
creator: `${global.creator}`,
result: {
url: result,
}
})
} else {
res.json(loghandler.apikey);
}
});

//========================================\\
// Download 

router.get("/download/pinterest", async (req, res, next) => {
const pinterest = require('../scraper/downloader/pinterest.js')
var apikey = req.query.apikey;
var query = req.query.query;

if (!apikey) return res.json(loghandler.noapikey);
if (!query)
return res.json({
status: false,
creator: `${global.creator}`,
message: "Masukkan query pencarian.",
});

if (listkey.includes(apikey)) {
try {
const result = await pinterest(query);
res.json({
status: true,
creator: `${global.creator}`,
result: result,
});
} catch (e) {
console.log(e);
res.json(loghandler.error);
}
} else {
res.json(loghandler.apikey);
}
});

router.get("/download/tiktok", async (req, res, next) => {
const downloadTikTokVideo = require('../scraper/downloader/tiktok.js')
var apikey = req.query.apikey;
var url = req.query.url;
if (!apikey) return res.json(loghandler.noapikey);
if (!url)
return res.json({
status: false,
creator: `${global.creator}`,
message: "Masukkan URL TikTok.",
});
if (listkey.includes(apikey)) {
try {
const result = await downloadTikTokVideo(url);
if (result) {
res.json({
status: true,
creator: `${global.creator}`,
result: result,
});
} else {
res.json(loghandler.error);
}
} catch (e) {
console.log(e);
res.json(loghandler.error);
}
} else {
res.json(loghandler.apikey);
}
});

router.get("/download/ytmp3", async (req, res, next) => {
const downloadYtmp3 = require('../scraper/downloader/ytmp3.js')
var apikey = req.query.apikey;
var url = req.query.url;
if (!apikey) return res.json(loghandler.noapikey);
if (!url)
return res.json({
status: false,
creator: `${global.creator}`,
message: "Masukkan URL YouTube.",
});

if (listkey.includes(apikey)) {
try {
const videoInfo = await downloadYtmp3(url);
res.json({
status: true,
creator: `${global.creator}`,
result: videoInfo,
});
} catch (e) {
console.log(e);
res.json(loghandler.error);
}
} else {
res.json(loghandler.apikey);
}
});

router.get("/download/ytmp4", async (req, res, next) => {
const downloadYtmp4 = require('../scraper/downloader/ytmp4.js')
var apikey = req.query.apikey;
var url = req.query.url;

if (!apikey) return res.json(loghandler.noapikey);
if (!url)
return res.json({
status: false,
creator: `${global.creator}`,
message: "Masukkan URL YouTube yang ingin diambil informasinya.",
});

if (listkey.includes(apikey)) {
try {
const videoInfo = await downloadYtmp4(url);
res.json({
status: true,
creator: `${global.creator}`,
result: videoInfo,
});
} catch (e) {
console.log(e);
res.json(`${e.message}`);
}
} else {
res.json(loghandler.apikey);
}
});

router.get("/download/mediafire", async (req, res, next) => {
const mediafireDl = require('../scraper/downloader/mediafire.js')
var apikey = req.query.apikey;
var url = req.query.url;
if (!apikey) return res.json(loghandler.noapikey);
if (!url)
return res.json({
status: false,
creator: `${global.creator}`,
message: "Linknya Mana Anying?",
});
if (listkey.includes(apikey)) {
try {
const downloadInfo = await mediafireDl(url);
res.json({
status: true,
creator: `${global.creator}`,
result: downloadInfo,
});
} catch (e) {
console.log(e);
res.json(loghandler.error);
}
} else {
res.json(loghandler.apikey);
}
});

router.get("/download/sfile", async (req, res, next) => {
 const sfileDl = require('../scraper/downloader/sfile.js')
var apikey = req.query.apikey;
var url = req.query.url;
if (!apikey) return res.json(loghandler.noapikey);
if (!url) {
return res.json({
status: false,
creator: `${global.creator}`,
message: "Masukkan URL yang ingin diunduh.",
});
}

if (listkey.includes(apikey)) {
try {
const result = await sfileDl(url);
res.json({
status: true,
creator: `${global.creator}`,
result: result,
});
} catch (e) {
console.log(e);
res.json({ 
 status: false, 
 message: e.message 
 });
}
} else {
res.json(loghandler.apikey);
}
});

//========================================\\
// Berita

router.get("/news/cnn", async (req, res, next) => {
var apikey = req.query.apikey;
var url = req.query.type;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnn-news`))
.then((response) => response.json())
.then((data) => {
var result = data;
res.json({
result,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});
router.get("/news/cnbc", async (req, res, next) => {
var apikey = req.query.apikey;
var url = req.query.type;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnbc-news`))
.then((response) => response.json())
.then((data) => {
var result = data;
res.json({
result,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});
router.get("/news/republika", async (req, res, next) => {
var apikey = req.query.apikey;
var url = req.query.type;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/republika-news`))
.then((response) => response.json())
.then((data) => {
var result = data;
res.json({
result,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});
router.get("/news/tempo", async (req, res, next) => {
var apikey = req.query.apikey;
var url = req.query.type;
if (!apikey) return res.json(loghandler.noapikey);
if (!url)
return res.json({
status: false,
creator: `${global.creator}`,
message: "masukan parameter type",
});
if (listkey.includes(apikey)) {
fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/tempo-news/${url}`))
.then((response) => response.json())
.then((data) => {
var result = data;
res.json({
author: "Zeltoria",
result,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});
router.get("/news/antara", async (req, res, next) => {
var apikey = req.query.apikey;
var url = req.query.type;
if (!apikey) return res.json(loghandler.noapikey);
if (!url)
return res.json({
status: false,
creator: `${global.creator}`,
message: "masukan parameter type",
});
if (listkey.includes(apikey)) {
fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/antara-news/${url}`))
.then((response) => response.json())
.then((data) => {
var result = data;
res.json({
author: "Zeltoria",
result,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});
router.get("/news/kumparan", async (req, res, next) => {
var apikey = req.query.apikey;
var url = req.query.type;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/kumparan-news`))
.then((response) => response.json())
.then((data) => {
var result = data;
res.json({
author: "Zeltoria",
result,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});

//========================================\\
//PhotoOxy

router.get("/photooxy/flaming", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.text;
if (!apikey) return res.json(loghandler.noapikey);
if (!text)
return res.json({
status: false,
creator: `${global.creator}`,
message: "masukan parameter text",
});
if (listkey.includes(apikey)) {
oxy(
"https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html",
[text]
)
.then((data) => {
res.set({ "Content-Type": "image/png" });
res.send(data);
})
.catch((err) => {
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});
router.get("/photooxy/shadow-sky", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.text;
if (!apikey) return res.json(loghandler.noapikey);
if (!text)
return res.json({
status: false,
creator: `${global.creator}`,
message: "masukan parameter text",
});
if (listkey.includes(apikey)) {
oxy(
"https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html",
[text]
)
.then((data) => {
res.set({ "Content-Type": "image/png" });
res.send(data);
})
.catch((err) => {
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});
router.get("/photooxy/metallic", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.text;
if (!apikey) return res.json(loghandler.noapikey);
if (!text)
return res.json({
status: false,
creator: `${global.creator}`,
message: "masukan parameter text",
});
if (listkey.includes(apikey)) {
oxy(
"https://photooxy.com/other-design/create-metallic-text-glow-online-188.html",
[text]
)
.then((data) => {
res.set({ "Content-Type": "image/png" });
res.send(data);
})
.catch((err) => {
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});
router.get("/photooxy/naruto", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.text;
if (!apikey) return res.json(loghandler.noapikey);
if (!text)
return res.json({
status: false,
creator: `${global.creator}`,
message: "masukan parameter text",
});
if (listkey.includes(apikey)) {
oxy("https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html", [text])
.then((data) => {
res.set({ "Content-Type": "image/png" });
res.send(data);
})
.catch((err) => {
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});


router.get("/photooxy/pubg-mobile", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.text;
var text2 = req.query.text;
if (!apikey) return res.json(loghandler.noapikey);
if (!text || !text2)
return res.json({
status: false,
creator: `${global.creator}`,
message: "masukan parameter text & text2",
});
if (listkey.includes(apikey)) {
oxy("https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html",
[text, text2]
)
.then((data) => {
res.set({ "Content-Type": "image/png" });
res.send(data);
})
.catch((err) => {
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});

// search api
router.get("/search/film", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.query;
if (!apikey) return res.json(loghandler.noapikey);
if (!text)
return res.json({
status: false,
creator: `${global.creator}`,
message: "Query Nya Mana Vangsat?",
});
if (listkey.includes(apikey)) {
api.search.film(query).then((data) => {
var data = data;
res.json({
status: 200,
data,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});
router.get("/search/soundcloudsearch", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.query;
if (!apikey) return res.json(loghandler.noapikey);
if (!text)
return res.json({
status: false,
creator: `${global.creator}`,
message: "Query Nya Mana Vangsat?",
});
if (listkey.includes(apikey)) {
api.search.soundcloud(query).then((data) => {
var data = data;
res.json({
status: 200,
data,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});

router.get("/search/yt", async (req, res, next) => {
var apikey = req.query.apikey;
var query = req.query.query;

if (!apikey) return res.json(loghandler.noapikey);
if (!query)
return res.json({
status: false,
creator: `${global.creator}`,
message: "Masukkan parameter query.",
});

if (listkey.includes(apikey)) {
try {
const ytSearch = async (query) => {
try {
const searchResults = await yts(query);
const videos = searchResults.videos.slice(0, 10);

const results = [];

for (let video of videos) {
// Mendapatkan informasi tambahan seperti jumlah likes dan musik yang digunakan (jika ada)
const videoDetails = await yts({ videoId: video.videoId });

const videoInfo = {
title: video.title,
thumbnail: video.thumbnail,
link: video.url,
musicUsed: videoDetails.music || 'N/A', // Musik yang digunakan, jika ada
channel: video.author.url,
creator: video.author.name,
views: video.views,
likes: videoDetails.likes || 'N/A', // Jumlah likes, jika tersedia
duration: video.timestamp,
uploaded: video.ago,
description: video.description
};
results.push(videoInfo);
}

return results;
} catch (error) {
console.error('Error searching YouTube:', error);
return [];
}
}

const searchResults = await ytSearch(query);
res.json({
status: true,
creator: `${global.creator}`,
result: searchResults,
});
} catch (e) {
console.log(e);
res.json(loghandler.error);
}
} else {
res.json(loghandler.apikey);
}
});

//========================================\\
// Searching

router.get("/search/tiktok", async (req, res, next) => {
var apikey = req.query.apikey;
var query = req.query.query;

if (!apikey) return res.json(loghandler.noapikey);
if (!query)
return res.json({
status: false,
creator: `${global.creator}`,
message: "Masukkan query yang ingin dicari.",
});

if (listkey.includes(apikey)) {
try {
const searchTikTok = async (query) => {
try {
const response = await axios.get(`https://www.tiktok.com/search?q=${encodeURIComponent(query)}`, {
headers: {
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}
});

const html = response.data;
const $ = cheerio.load(html);
const videos = [];

$('.tiktok-1f6f7vd-DivContainer').each((index, element) => {
const link = $(element).find('a').attr('href');
const duration = $(element).find('.video-duration').text();
const like = $(element).find('.like-count').text();
const share = $(element).find('.share-count').text();
const comment = $(element).find('.comment-count').text();
const title = $(element).find('.video-title').text();

videos.push({
link: link ? `https://www.tiktok.com${link}` : '',
duration: duration || '',
like: like || '',
share: share || '',
comment: comment || '',
title: title || ''
});
});

return videos;
} catch (error) {
console.error('Error fetching TikTok search results:', error);
return [];
}
}
const videos = await searchTikTok(query);
res.json({
status: true,
creator: `${global.creator}`,
result: videos,
});
} catch (e) {
console.log(e);
res.json(loghandler.error);
}
} else {
res.json(loghandler.apikey);
}
});

router.get("/search/sfile", async (req, res, next) => {
const apikey = req.query.apikey;
const query = req.query.query;
const page = req.query.page || 1;

if (!apikey) return res.json(loghandler.noapikey);
if (!query) {
return res.json({
status: false,
creator: `${global.creator}`,
message: "Masukkan query yang ingin dicari.",
});
}

if (listkey.includes(apikey)) {
try {
const results = await sfileSearch(query, page);
res.json({
status: true,
creator: `${global.creator}`,
result: results,
});
} catch (e) {
console.log(e);
res.json({ 
status: false,
message: e.message 
});
}
} else {
res.json(loghandler.apikey);
}
});

module.exports = router;

router.get("/search/wallpaper", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.query;
if (!apikey) return res.json(loghandler.noapikey);
if (!text)
return res.json({
status: false,
creator: `${global.creator}`,
message: "Query Nya Mana Vangsat?",
});
if (listkey.includes(apikey)) {
scr
.wallpaper(text)
.then((data) => {
var result = data;
res.json({
result,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});

router.get("/search/pinterest", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.query;
if (!apikey) return res.json(loghandler.noapikey);
if (!text)
return res.json({
status: false,
creator: `${global.creator}`,
message: "Query Nya Mana Vangsat?",
});
if (listkey.includes(apikey)) {
scr
.pinterest(text)
.then((data) => {
var result = data;
res.json({
result,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});

//========================================\\
// Tools

router.get("/tools/spekhp", async (req, res) => {
const apikey = req.query.apikey;
const text = req.query.hp;

if (!apikey) return res.json(loghandler.noapikey);

if (!text) {
return res.json({
status: false,
creator: 'RizzPiw',
message: "Masukkan parameter hp",
});
}

if (listkey.includes(apikey)) {
try {
const result = await spekhp(text);
 res.json({
status: true,
creator: "RizzPiw",
result,
});
} catch (error) {
console.error('Error:', error);
res.json(`${error.message}`);

}
} else {
return res.json(loghandler.apikey);
}
});

//========================================\\
// Nsfw

router.get("/nsfw/yuri", async (req, res, next) => {
const yuri = require('../scraper/nsfw/yuri.js')
var apikey = req.query.apikey;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {

var result = yuri[Math.floor(Math.random() * yuri.length)];
res.json({
status: true,
creator: `${global.creator}`,
result: {
url: result,
}
})
} else {
res.json(loghandler.apikey);
}
});

router.get("/nsfw/pussy", async (req, res, next) => {
const pussy = require('../scraper/nsfw/pussy.js')
var apikey = req.query.apikey;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {

var result = pussy[Math.floor(Math.random() * pussy.length)];
res.json({
status: true,
creator: `${global.creator}`,
result: {
url: result,
}
})
} else {
res.json(loghandler.apikey);
}
});

router.get("/nsfw/orgy", async (req, res, next) => {
const orgy = require('../scraper/nsfw/orgy.js')
var apikey = req.query.apikey;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
var result = orgy[Math.floor(Math.random() * orgy.length)];
res.json({
status: true,
creator: `${global.creator}`,
result: {
url: result,
}
})
} else {
res.json(loghandler.apikey);
}
});

router.get("/nsfw/masturbation", async (req, res, next) => {
const masturbation = require('../scraper/nsfw/masturbation.js')
var apikey = req.query.apikey;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {

var result = masturbation[Math.floor(Math.random() * masturbation.length)];
res.json({
status: true,
creator: `${global.creator}`,
result: {
url: result,
}
})
} else {
res.json(loghandler.apikey);
}
});

router.get("/nsfw/manga", async (req, res, next) => {
const manga = require('../scraper/nsfw/manga.js')
var apikey = req.query.apikey;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
var result = manga[Math.floor(Math.random() * manga.length)];
res.json({
status: true,
creator: `${global.creator}`,
result: {
url: result,
}
})
} else {
res.json(loghandler.apikey);
}
});

router.get("/nsfw/jahy", async (req, res, next) => {
const jahy = require('../scraper/nsfw/jahy.js')
var apikey = req.query.apikey;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
var result = jahy[Math.floor(Math.random() * jahy.length)];
res.json({
status: true,
creator: `${global.creator}`,
result: {
url: result,
}
})
} else {
res.json(loghandler.apikey);
}
});

router.get("/nsfw/glasses", async (req, res, next) => {
const glasses = require('../scraper/nsfw/glasses.js')
var apikey = req.query.apikey;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
var result = glasses[Math.floor(Math.random() * glasses.length)];
res.json({
status: true,
creator: `${global.creator}`,
result: {
url: result,
}
})
} else {
res.json(loghandler.apikey);
}
});

router.get("/nsfw/gangbang", async (req, res, next) => {
const gangbang = require('../scraper/nsfw/gangbang.js')
var apikey = req.query.apikey;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
var result = gangbang[Math.floor(Math.random() * gangbang.length)];
res.json({
status: true,
creator: `${global.creator}`,
result: {
url: result,
}
})
} else {
res.json(loghandler.apikey);
}
});

router.get("/nsfw/foot", async (req, res, next) => {
const foot = require('../scraper/nsfw/foot.js')
var apikey = req.query.apikey;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
var result = foot[Math.floor(Math.random() * foot.length)];
res.json({
status: true,
creator: `${global.creator}`,
result: {
url: result,
}
})
} else {
res.json(loghandler.apikey);
}
});

router.get("/nsfw/fendom", async (req, res, next) => {
const fendom = require('../scraper/nsfw/fendom.js')
var apikey = req.query.apikey;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
var result = femdom[Math.floor(Math.random() * femdom.length)];
res.json({
status: true,
creator: `${global.creator}`,
result: {
url: result,
}
})
} else {
res.json(loghandler.apikey);
}
});

router.get("/nsfw/ero", async (req, res, next) => {
const ero = require('../scraper/nsfw/ero.js')
var apikey = req.query.apikey;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
var result = ero[Math.floor(Math.random() * ero.length)];
res.json({
status: true,
creator: `${global.creator}`,
result: {
url: result,
}
})
} else {
res.json(loghandler.apikey);
}
});

router.get("/nsfw/cum", async (req, res, next) => {
const cum = require('../scraper/nsfw/cum.js')
var apikey = req.query.apikey;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
var result = cum[Math.floor(Math.random() * cum.length)];
res.json({
status: true,
creator: `${global.creator}`,
result: {
url: result,
}
})
} else {
res.json(loghandler.apikey);
}
});

router.get("/nsfw/cosplay", async (req, res, next) => {
var apikey = req.query.apikey;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
var result = cosplay[Math.floor(Math.random() * cosplay.length)];
res.json({
status: true,
creator: `${global.creator}`,
result: {
url: result,
}
})
} else {
res.json(loghandler.apikey);
}
});

//========================================\\
// Islamic

router.get("/islam/tahlil", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.page;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
fetch(
encodeURI(
`https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/dataTahlil.json`
)
)
.then((response) => response.json())
.then((data) => {
var result = data;
res.json({
result,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});
router.get("/islam/wirid", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.page;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
fetch(
encodeURI(
`https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/dataWirid.json`
)
)
.then((response) => response.json())
.then((data) => {
var result = data;
res.json({
result,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});
router.get("/islam/ayatkursi", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.page;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
fetch(
encodeURI(
`https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/dataAyatKursi.json`
)
)
.then((response) => response.json())
.then((data) => {
var result = data;
res.json({
result,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});
router.get("/islam/doaharian", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.page;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
fetch(
encodeURI(
`https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/dataDoaHarian.json`
)
)
.then((response) => response.json())
.then((data) => {
var result = data;
res.json({
result,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});
router.get("/islam/bacaanshalat", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.page;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
fetch(
encodeURI(
`https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/dataBacaanShalat.json`
)
)
.then((response) => response.json())
.then((data) => {
var result = data;
res.json({
result,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});
router.get("/islam/niatshalat", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.page;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
fetch(
encodeURI(
`https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/dataNiatShalat.json`
)
)
.then((response) => response.json())
.then((data) => {
var result = data;
res.json({
result,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});
router.get("/islam/kisahnabi", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.page;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
fetch(
encodeURI(
`https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/dataKisahNabi.json`
)
)
.then((response) => response.json())
.then((data) => {
var result = data;
res.json({
result,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});
router.get("/islam/asmaulhusna", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.page;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
fetch(
encodeURI(
`https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/dataAsmaulHusna.json`
)
)
.then((response) => response.json())
.then((data) => {
var result = data;
res.json({
result,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});
router.get("/islam/niatsubuh", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.page;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
fetch(
encodeURI(
`https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/NiatShubuh.json`
)
)
.then((response) => response.json())
.then((data) => {
var result = data;
res.json({
result,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});
router.get("/islam/niatzuhur", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.page;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
fetch(
encodeURI(
`https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/NiatDzuhur.json`
)
)
.then((response) => response.json())
.then((data) => {
var result = data;
res.json({
result,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});
router.get("/islam/niatmagrib", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.page;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
fetch(
encodeURI(
`https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/NiatMaghrib.json`
)
)
.then((response) => response.json())
.then((data) => {
var result = data;
res.json({
result,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});
router.get("/islam/niatisya", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.page;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
fetch(
encodeURI(
`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatIsya.json`
)
)
.then((response) => response.json())
.then((data) => {
var result = data;
res.json({
result,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});
router.get("/islam/niatashar", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.page;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
fetch(
encodeURI(
`https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/NiatAshar.json`
)
)
.then((response) => response.json())
.then((data) => {
var result = data;
res.json({
result,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});

//game
router.get("/game/tebakgambar", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.page;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
scr
.tebakgambar()
.then((data) => {
var result = data;
res.json({
result,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});

//========================================\\
// Gpt

router.get("/ai/simi", async (req, res, next) => {
var apikey = req.query.apikey;
var query = req.query.query;
if (!apikey) return res.json(loghandler.noapikey);
if (!query)
return res.json({
status: false,
creator: `${global.creator}`,
message: "Masukkan Teks Nya",
});
if (listkey.includes(apikey)) {
try {
const simi = async (query) => {
const url = 'https://simsimi.vn/web/simtalk';
const headers = {
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
Accept: 'application/json, text/javascript, */*; q=0.01',
'X-Requested-With': 'XMLHttpRequest',
'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36',
Referer: 'https://simsimi.vn/'
};
const response = await axios.post(url, `text=${encodeURIComponent(query)}&lc=id`, { headers });
return response.data.success;
}
const hasil_nya = await simi(query);
res.json({
status: true,
creator: `${global.creator}`,
result: hasil_nya,
});
} catch (e) {
console.log(e);
res.json({ status: false, message: e.message });
}
} else {
res.json(loghandler.apikey);
}
});

router.get("/ai/gpt4", async (req, res, next) => {
const gpt4 = require('../scraper/ai/gpt4.js')
var apikey = req.query.apikey;
var text = req.query.text;

if (!apikey) return res.json(loghandler.noapikey);
if (!text)
return res.json({
status: false,
creator: `${global.creator}`,
message: "Masukkan Teks Nya",
});

if (listkey.includes(apikey)) {
try {
const hasil_nya = await gpt4(text);
const ress = {
model: `${hasil_nya.model}`,
gpt: `${hasil_nya.gpt}`
}
res.json({
status: true,
creator: `${global.creator}`,
result: ress,
});
} catch (e) {
console.log(e);
res.json(loghandler.error);
}
} else {
res.json(loghandler.apikey);
}
});

router.get("/ai/gpt-3turbo", async (req, res, next) => {
const gpt3 = require('./scraper/ai/gpt-3-5.js')
var apikey = req.query.apikey;
var text = req.query.text;

if (!apikey) return res.json(loghandler.noapikey);
if (!text)
return res.json({
status: false,
creator: `${global.creator}`,
message: "Masukkan Teks Nya",
});

if (listkey.includes(apikey)) {
try {
const hasil_nya = await gpt3(text);
const ress = {
model: `${hasil_nya.model}`,
gpt: `${hasil_nya.gpt}`
}
res.json({
status: true,
creator: `${global.creator}`,
result: ress,
});
} catch (e) {
console.log(e);
res.json(loghandler.error);
}
} else {
res.json(loghandler.apikey);
}
});

router.get("/ai/bard", async (req, res) => {
const apikey = req.query.apikey;
const text = req.query.q;

if (!apikey) {
return res.json(loghandler.noapikey);
}
if (!text) {
return res.json({
status: false,
creator: "RizzPiw",
message: "Masukkan Query Nya",
});
}

if (listkey.includes(apikey)) {
try {
const results = await GoogleBard(text);
res.json({
status: true,
creator: "RizzPiw",
result: results,
});
} catch (e) {
console.error(e);
res.json(`${e.message}`);
}
} else {
res.json(loghandler.apikey);
}
});

router.get("/ai/bingimg", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.q;

if (!apikey) return res.json(loghandler.noapikey);
if (!text) return res.json({
status: false,
creator: 'RizzPiw',
message: "Masukkan parameter query",
});

if (listkey.includes(apikey)) {
try {
const result = await bingimg(text);
res.json({
status: true,
creator: "RizzPiw",
result,
});
} catch (e) {
console.log(e);
res.json(loghandler.error);
}
} else {
res.json(loghandler.apikey);
}
});

// Tools
router.get("/tools/subfinder", async (req, res, next) => {
var apikey = req.query.apikey;
var domain = req.query.domain;

if (!apikey) return res.json(loghandler.noapikey);
if (!domain)
return res.json({
status: false,
creator: `${global.creator}`,
message: "Masukkan domain yang ingin diperiksa.",
});

if (listkey.includes(apikey)) {
async function checkDNS(domain) {
 const CF_RANGE = [
"173.245.48.0/20",
"103.21.244.0/22",
"103.22.200.0/22",
"103.31.4.0/22",
"141.101.64.0/18",
"108.162.192.0/18",
"190.93.240.0/20",
"188.114.96.0/20",
"197.234.240.0/22",
"198.41.128.0/17",
"162.158.0.0/15",
"104.16.0.0/13",
"104.24.0.0/14",
"172.64.0.0/13",
"131.0.72.0/22"
];
console.log("Checking DNS: " + domain);
try {
let addresses = await dns.promises.resolve4(domain);
let isCloudflare = ipRange(addresses[0], CF_RANGE);
console.log(`${domain}: ${addresses}`);
console.log(`CloudFlare Proxy: ${isCloudflare ? "Yes" : "No"}`);
console.log("");
return { domain, dns: addresses, cf_proxy: isCloudflare };
} catch (e) {
console.log(`DNS Inactive: ${domain}`);
console.log("");
return { domain, dns: null };
}
}

try {
let subdomains = [];
let results = [];

console.log(`Fetching subdomains for domain: ${domain}`);
let response = await fetch(`https://crt.sh/?q=${domain}&output=json`);
let data = await response.json();

console.log(`Received data from crt.sh: ${JSON.stringify(data, null, 2)}`);

for (let entry of data) {
subdomains.push(...entry.name_value.split("\n"));
}

console.log(`Extracted subdomains: ${JSON.stringify(subdomains, null, 2)}`);

let uniqueSubdomains = [...new Set(subdomains.filter(sub => !sub.startsWith("*")))];

for (let subdomain of uniqueSubdomains) {
let result = await checkDNS(subdomain);
results.push(result);
}

console.log(`Final results: ${JSON.stringify(results, null, 2)}`);

res.json({
status: true,
creator: `${global.creator}`,
result: results,
});
} catch (e) {
console.log(e);
res.json(loghandler.error);
}
} else {
res.json(loghandler.apikey);
}
});

router.get("/tools/whois", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.domain;

if (!apikey) return res.json(loghandler.noapikey);
if (!text) return res.json({
status: false,
creator: 'RizzPiw',
message: "Masukkan parameter domain",
});

if (listkey.includes(apikey)) {
try {
const result = await whois(text);
res.json({
status: true,
creator: "RizzPiw",
result: result,
});
} catch (e) {
console.log(e);
res.json(loghandler.error);
}
} else {
res.json(loghandler.apikey);
}
});

// Stalker
router.get("/stalker/github-stalk", async (req, res, next) => {
const githubstalk = require('./scraper/stalker/github.js')
var apikey = req.query.apikey;
var username = req.query.username;

if (!apikey) return res.json(loghandler.noapikey);
if (!username)
return res.json({
status: false,
creator: 'RizzPiw',
message: "Masukkan parameter username",
});

if (listkey.includes(apikey)) {
try {
const result = await githubstalk(username);
res.json({
author: "RizzPiw",
result,
});
} catch (e) {
console.log(e);
res.json(`${e.message}`);
}
} else {
res.json(loghandler.apikey);
}
});

router.get("/stalker/tiktok-stalk", async (req, res, next) => {
const ttstalk = require('./scraper/stalker/tiktok.js')
var apikey = req.query.apikey;
var username = req.query.username;

if (!apikey) return res.json(loghandler.noapikey);
if (!username)
return res.json({
status: false,
creator: `${global.creator}`,
message: "Masukkan parameter username.",
});

if (listkey.includes(apikey)) {
try {
const userInfo = await tiktokStalk(username);
res.json({
status: true,
creator: `${global.creator}`,
result: userInfo,
});
} catch (e) {
console.log(e);
res.json(loghandler.error);
}
} else {
res.json(loghandler.apikey);
}
});

//========================================\\
// Other

router.get("/other/hilih", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.kata;
if (!apikey) return res.json(loghandler.noapikey);
if (!text)
return res.json({
status: false,
creator: `${global.creator}`,
message: "masukan parameter kata",
});
if (listkey.includes(apikey)) {
fetch(
encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${text}`)
)
.then((response) => response.json())
.then((data) => {
var result = data;
res.json({
result,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});
router.get("/other/kodepos", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.kota;
if (!apikey) return res.json(loghandler.noapikey);
if (!text)
return res.json({
status: false,
creator: `${global.creator}`,
message: "masukan parameter kota",
});
if (listkey.includes(apikey)) {
fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${text}`))
.then((response) => response.json())
.then((data) => {
var result = data;
res.json({
result,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});
router.get("/other/covid-world", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.kata;
if (!apikey) return res.json(loghandler.noapikey);
if (listkey.includes(apikey)) {
fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
.then((response) => response.json())
.then((data) => {
var result = data;
res.json({
result,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});
router.get("/other/kbbi", async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.kata;
if (!apikey) return res.json(loghandler.noapikey);
if (!text)
return res.json({
status: false,
creator: `${global.creator}`,
message: "masukan parameter kata",
});
if (listkey.includes(apikey)) {
fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${text}`))
.then((response) => response.json())
.then((data) => {
var result = data;
res.json({
result,
});
})
.catch((e) => {
console.log(e);
res.json(loghandler.error);
});
} else {
res.json(loghandler.apikey);
}
});

module.exports = router;
