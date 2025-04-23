const axios = require("axios");

async function fetchJokes(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.error("Kunne ikke hente vitsene:", err.message);
    return [];
  }
}

module.exports = { fetchJokes };
