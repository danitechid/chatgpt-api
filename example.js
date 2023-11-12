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
const { models } = chatGPTAPI;
const { chatGPT3, chatGPT35, chatGPT4 } = models;

// GPT-3 model
(async () => {
  try {
    const response = await chatGPT3('Hello, AI.');
    console.log('ChatGPT-3:', response);
  } catch (error) {
    console.error('Error:', error);
  }
})();

// GPT-3.5 model
(async () => {
  try {
    const response = await chatGPT35('Hello, AI.');
    console.log('ChatGPT-3.5:', response);
  } catch (error) {
    console.error('Error:', error);
  }
})();

// GPT-4 model
(async () => {
  try {
    const response = await chatGPT4('Hello, AI.');
    console.log('ChatGPT-4:', response);
  } catch (error) {
    console.error('Error:', error);
  }
})();