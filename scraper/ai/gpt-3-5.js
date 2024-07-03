const axios = require('axios');

const gpt3 = async (text) => {
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 const hari = today.toLocaleDateString('id-ID', { weekday: 'long' });
 const tanggal = today.toLocaleDateString('id-ID', options);
 const jam = today.toLocaleTimeString('id-ID');
const url = 'https://nexra.aryahcr.cc/api/chat/gpt';
const headers = {
'Content-Type': 'application/json'
};
const body = {
messages: [
{ role: "assistant", content: `Perkenalkan nama kamu adalah Assisten AI kamu dapat menjawab semua jawaban Dan semua pertanyaan yang di beri oleh semua orang, kamu dapat mencari jawaban yang tepat melalui website google.com, bing.com, openai.com, dll agar pengetahuan kamu lebih luas dan lebih pintar Hari : ${hari}, Tanggal : ${tanggal}, Jam : ${jam}` },
{ role: "user", content: `${text}.` }
],
prompt: text,
model: "gpt-3.5-turbo",
markdown: false
};
const response = await axios.post(url, body, { headers });
return response.data;
}


module.exports = gpt3;