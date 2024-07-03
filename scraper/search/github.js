// Versi searching 
const axios = require('axios');

async function searchGithub(query) {
    const apiUrl = `https://api.github.com/search/repositories?q=${query}`;

    try {
        const response = await axios.get(apiUrl);
        return response.data.items; // Mengembalikan array objek repository
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}
