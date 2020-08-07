const fs = require('fs').promises;
const config = require('config');

module.exports.addConfig = async (packageJsonPath) => {
  const packageJson = require(packageJsonPath);

  packageJson.prettier = config.prettier;

  await fs.writeFile(packageJsonPath, JSON.stringify(packageJson));

  return;
};
