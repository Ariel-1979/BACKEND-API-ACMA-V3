require('dotenv').config();

const DEVELOPMENT = require('./development');
const PRODUCTION = require('./production');

const { NODE_ENV } = process.env;

let currentEnv = DEVELOPMENT;

if (NODE_ENV === 'production') {
  currentEnv = PRODUCTION;
} else if (NODE_ENV === 'development') {
  currentEnv = DEVELOPMENT;
}

module.exports = currentEnv;