# preact-cli-plugin-typescript

Use TypeScript with [Preact CLI](https://github.com/developit/preact-cli).

If you prefer Flow, check out [preact-cli-plugin-flow](https://github.com/SaraVieira/preact-cli-plugin-flow).

## Getting Started

Install via npm or yarn:

```shell
npm i preact-cli-plugin-typescript --save-dev
```
```shell
yarn add preact-cli-plugin-typescript --dev
```

This will install:

  - [typescript](https://github.com/Microsoft/TypeScript)
  - [awesome-typescript-loader](https://github.com/s-panferov/awesome-typescript-loader)

After installation, this plugin will create a `tsconfig.json` (TypeScript configuration file).

Create or edit `preact.config.js` to add the plugin:

```javascript
import preactCliTypeScript from 'preact-cli-plugin-typescript';

export default function (config) {
	preactCliTypeScript(config);
}
```

TypeScript will now be compiled. Cool.
