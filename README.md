# add-setting-prettier-for-package-json

This is a tool for use when writing JavaScript programs.
Add the "prettier" setting that you have set in your config file to your package.json.

## Install

It's not yet available on npm.

```bash
npm install -g shinshin86/add-setting-prettier-for-package-json
# or
yarn global add shinshin86/add-setting-prettier-for-package-json
```

## Setup prettier config

TODO

## Usage

```bash
# project root and By default, it refers to the settings found in "config/default.json".
add-setting-prettier-for-package-json
# => A "pretier" setting has been added to your "package.json".

# Other prettier setting(ex config file: "config/type1.json")
NODE_CONFIG_ENV=type1 add-setting-prettier-for-package-json
```
