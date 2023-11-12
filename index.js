/*
 * Information
 * Creator / Developer: Dani Ramdani (Dani Techno.) - FullStack Engineer
 * Contact creator / Developer: 0895 1254 5999 (WhatsApp), contact@danitechno.com (Email)
*/

/* Thanks to
 * Dani Techno. - FullStack Engineer (Creator / Developer)
 * @whiskeysockets/baileys (Library "Baileys" provider)
*/

const chatGPTAPI = require('./lib/chatgpt-api.js');

const {
  chatGPT3,
  chatGPT35,
  chatGPT4
} = chatGPTAPI.models;

const models = {
  chatGPT3,
  chatGPT35,
  chatGPT4
};

module.exports = {
  models
};