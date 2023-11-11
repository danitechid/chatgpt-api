const axios = require('axios');

async function fetchJson(baseUrl, relativeUrl, params) {
  try {
    const data = await axios.get(baseUrl + relativeUrl, { params });
    const response = data.data;
    return response;
  } catch (error) {
    console.error('Error fetching JSON:', error);
    const response = { status: false, error: 'Failed to fetch JSON data' };
    return response;
  }
};

module.exports = {
  fetchJson
};