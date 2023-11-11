const { fetchJson } = require('./utils.js');
const config = require('./config.js');
const baseUrl = config.apiUrl;

async function chatGPT3(query) {
  const data = await fetchJson(baseUrl, '/tools/chatgpt3', { q: query });
  const response = data.data;
  return response;
}

async function chatGPT35(query) {
  const data = await fetchJson(baseUrl, '/tools/chatgpt3', { q: query });
  const response = data.data;
  return response;
}

module.exports = {
  chatGPT3,
  chatGPT35
};