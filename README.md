# ChatGPT API - TypeScript/JavaScript
ChatGPT API ini ditenagai oleh: <a href="https://daniapi.biz.id">daniapi.biz.id</a>

## Instalasi
### Menggunakan Npm
```bash
npm i @danitech/chatgpt-api
```

### Atau Menggunakan Yarn
```bash
yarn add @danitech/chatgpt-api
```

## Cara Menggunakan
### Import Module @danitech/chatgpt-api
#### CJS
```javascript
const chatGPTAPI = require('@danitech/chatgpt-api');
```

#### ESM
```javascript
import chatGPTAPI from '@danitech/chatgpt-api';
```

### Contoh Kode Lengkap
```javascript
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
```

### Hasil
```text
ChatGPT-3: Hello! How can I assist you today?
ChatGPT-3.5: Hello! How can I assist you today?
ChatGPT-4: Hello! How can I assist you today?
```

## Informasi
* Pembuat / Pengembang: Dani Ramdani (Dani Techno.) - FullStack Engineer
* Kontak Pembuat / Pengembang: 0895 1254 5999 (WhatsApp), contact@danitechno.com (Email)

## Terimakasih Kepada
* Dani Techno. - FullStack Engineer (Pembuat / Pengembang)
* daniapi.biz.id (Penyedia JSON-API)