#! /usr/bin/env node

const path = require('path');
const { addConfig } = require('./prettier-config');

(async () => {
  try {
    await addConfig(path.join(__dirname, 'package.json'));

    return;
  } catch (error) {
    console.error(error);
  }
})();
