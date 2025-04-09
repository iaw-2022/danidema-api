// api/index.js
const app = require('../src/index');

module.exports = (req, res) => {
  app(req, res); // esto convierte tu app express en función serverless
};