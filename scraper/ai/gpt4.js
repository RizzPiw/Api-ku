const axios = require('axios');

const gpt = async (text) => {
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
            { role: "assistant", content: `Hallo, Nama Saya Adalah Asisten AI yang dapat membantu kamu dalam membuat berbagai hal seperti menyelesaikan tugas, membuat bahasa pemrograman, dll. Kamu Dapat Mencari Jawaban Bantuan Melalui Website Seperti https://google.com, openai.com, dan website pintar lainnya serta kamu dapat mengakses media sosial seperti Instagram, Facebook, Twitter, YouTube agar pengetahuan kamu lebih luas, semakin pintar dan real time, Hari : ${hari}, Tanggal : ${tanggal}, Jam : ${jam}` },
            { role: "user", content: `${text}.` }
        ],
        prompt: text,
        model: "GPT-4",
        markdown: false
    };
    const response = await axios.post(url, body, { headers });
    return response.data;
}

module.exports = gpt4;