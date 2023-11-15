/*
 * Information
 * Creator / Developer: Dani Ramdani (Dani Techno.) - FullStack Engineer
 * Contact creator / Developer: 0895 1254 5999 (WhatsApp), contact@danitechno.com (Email)
*/

/* Thanks to
 * Dani Techno. - FullStack Engineer (Creator / Developer)
 * @whiskeysockets/baileys (Library "Baileys" provider)
*/

const { fetchJson } = require('./utils.js');
const config = require('./config.js');
const { api } = config;

async function chatGPT3(query) {
  const encodedQuery = encodeURIComponent(query);
  const data = await fetchJson(api.one.baseUrl + '/tools/chatgpt', { q: encodedQuery });
  const response = data.data.data;
  return response;
};

async function chatGPT35(query) {
  const encodedQuery = encodeURIComponent(query);
  const data = await fetchJson(api.one.baseUrl + '/tools/chatgpt3', { q: encodedQuery });
  const response = data.data.data;
  return response;
};

async function chatGPT4(query) {
  const encodedQuery = encodeURIComponent(query);
  const data = await fetchJson(api.two.baseUrl, { text: encodedQuery });
  const response = data.data;
  return response;
};

const models = {
  chatGPT3,
  chatGPT35,
  chatGPT4
};

module.exports = {
  models
};