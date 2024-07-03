const fetch = require('node-fetch');

const kisahNabi = async (namaNabi) => {
try {
    const url = await fetch(`https://raw.githubusercontent.com/Aiinne/scrape/main/data/kisahnabi/${namaNabi}.json`);
    const kisah = await url.json();
    const hasil = `nabi: ${kisah.name}\ntahun: ${kisah.thn_kelahiran}\ntempat: ${kisah.tmp}\nusia: ${kisah.usia}\nkisah: ${kisah.description}`;
    return hasil;
} catch (err) {
return `Nama Nabi Tidak Di Temukan`
}
};