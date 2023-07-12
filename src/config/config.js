const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
  path: path.join(__dirname, `../../.env`),
});
   
module.exports = { 
  port: process.env.PORT,
  environment: process.env.NODE_ENV,
};
