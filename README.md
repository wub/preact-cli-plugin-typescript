# preact-cli-plugin-typescript &middot; [![Build status](https://img.shields.io/travis/wub/preact-cli-plugin-typescript/master.svg?label=build&maxAge=43200)](https://travis-ci.org/wub/preact-cli-plugin-typescript) [![npm version](https://img.shields.io/npm/v/preact-cli-plugin-typescript.svg)](https://www.npmjs.com/package/preact-cli-plugin-typescript) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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

### Existing `tsconfig.json`

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

### Mixing JavaScript and TypeScript

You might see an error like
`Module './components/app' was resolved to '/src/components/app.js', but '--allowJs' is not set.`.

To fix this, or if you want to incrementally move to TypeScript, make sure
`allowJs` is enabled in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "allowJs": true
  }
}
```

### Changing the entrypoint

By default, preact-cli looks for `src/index.js` to start your app. This plugin
widens the scope to "any file in `src` that starts with `index` and has
a file extension resolved by webpack" - to change this,
override the `preact-cli-entrypoint` in `preact.config.js`:

```js
import { resolve } from 'path'

export default function (config, env, helpers) {
  preactCliTypeScript(config)

  config.resolve.alias['preact-cli-entrypoint'] = resolve(__dirname, 'src', 'foo-file.foo-extension')
}

```
