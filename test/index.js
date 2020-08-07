const { addConfig } = require('../prettier-config');
const { expect } = require('chai');
const fs = require('fs').promises;
const path = require('path');

const packageJsonPath = path.join(__dirname, 'package.json');

const initializePackageJson = async () => {
  const packageObj = {
    name: 'add-setting-prettier-for-package-json-test',
  };

  await fs.writeFile(packageJsonPath, JSON.stringify(packageObj));

  return;
};

const clearPackageJson = async () => {
  await fs.unlink(packageJsonPath);
};

describe('index.js', () => {
  it('Add prettier setting', async () => {
    await initializePackageJson();

    const packageJson = require(packageJsonPath);
    expect(packageJson).to.not.have.property('prettier');

    await addConfig(packageJsonPath);

    const updatedPackageJson = require(packageJsonPath);
    expect(updatedPackageJson).to.have.property('prettier');

    await clearPackageJson();
  });
});
