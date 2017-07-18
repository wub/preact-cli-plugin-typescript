# preact-cli-plugin-typescript &middot; [![Travis Status](https://img.shields.io/travis/wub/preact-cli-plugin-typescript/master.svg?label=travis&maxAge=43200)](https://travis-ci.org/wub/preact-cli-plugin-typescript) [![npm version](https://img.shields.io/npm/v/preact-cli-plugin-typescript.svg)](https://www.npmjs.com/package/preact-cli-plugin-typescript) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Use TypeScript with [preact-cli](https://github.com/developit/preact-cli).

This will install [typescript](https://github.com/Microsoft/TypeScript)
and [awesome-typescript-loader](https://github.com/s-panferov/awesome-typescript-loader).

If you prefer Flow, check out [preact-cli-plugin-flow](https://github.com/SaraVieira/preact-cli-plugin-flow).

## Installation

Install via npm:

```shell
npm i preact-cli-plugin-typescript --save-dev
```

After installation, this plugin will create a `tsconfig.json` (TypeScript 
configuration file), and `preact.config.js`, if they don't exist already.

In the root of your project, edit `preact.config.js` to add the plugin:

```js
import preactCliTypeScript from 'preact-cli-plugin-typescript'

export default function(config) {
  preactCliTypeScript(config)
}
```

## Usage

If you have an existing `tsconfig.json` file, be sure to use the correct
JSX factory:

```json
{
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "h"
  }
}
```

Now you can simply add `.ts`/`.tsx` files to your project, and they'll
be compiled. Cool. Make sure you use `.tsx` if you want to use JSX.

If you want to incrementally move to TypeScript, enable `allowJs`
in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "allowJs": true
  }
}
```
