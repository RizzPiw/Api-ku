const axios = require('axios')
const cheerio = require('cheerio')

async function listsurah(){
  let { data }= await axios.get('https://litequran.net/')
  const $ = cheerio.load(data)
  const Result = []
  $('body > main > ol > li:nth-child(n)').each((i, e) => {
    const name_surah = $(e).find('a').text()
    const link = 'https://litequran.net/' + $(e).find('a').attr('href')
    Result.push({
      link,
      name_surah,
    });
  });
  return Result
}

async function selectSurah(link){ 
    let { data }= await axios.get(link)
    const $ = cheerio.load(data)
    const Result = []
    const Isi = []
    var surah = $('body > main > article > h1').text()
    var bismillah = $('body > main > article > p').text()
    $('body > main > article > ol > li:nth-child(n)').each((i, e) => {
      const arabic = $(e).find('p.arabic').text()
      const baca = $(e).find('p.translate').text()
      const arti = $(e).find('p.meaning').text()
      Isi.push({
        arabic,
        baca,
        arti,
      });
    });
    Result.push({surah, bismillah}, Isi)
    return Result
	}

async function getSurah(surahIndex) {
  const surahList = await listsurah();
  if (surahIndex < 1 || surahIndex > surahList.length) {
    return "Nomor surah tidak valid.";
  }
  const selectedSurah = surahList[surahIndex - 1];
  const surahContent = await selectSurah(selectedSurah.link);
  let response = `*Berikut ${surahContent[0].surah}*\n\n`;
  surahContent[1].forEach((ayah) => {
    response += `${ayah.arabic}\n${ayah.baca}\n${ayah.arti}\n\n\n`;
  });
  return response;
}

module.exports = { listsurah, selectSurah, getSurah };