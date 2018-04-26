const resolve = require('path').resolve

const preactCliTypeScript = config => {
  if (!config) {
    throw Error('You need to pass the webpack config to preactCliTypeScript')
  }

  // TODO: Let people choose between atl and tsl.

  // TODO: If `awesome-typescript-loader` or `ts-loader` is already
  // loaded, warn the user and don't add another one.

  // Add the loader to the configuration
  config.module.loaders.push({
    enforce: 'pre',
    test: /\.tsx?$/,
    loader: 'awesome-typescript-loader'
  })

  // Currently, preact-cli only looks for `src/index.js` - this will look
  // for any file in `src` named `index` that has an extension that's
  // resolved by webpack. This can be overridden by the user.
  config.resolve.alias['preact-cli-entrypoint'] = resolve(process.cwd(), 'src', 'index')

  // Recursively substitute 'typings-for-css-modules-loader' for 'css-loader'
  // when generating CSS modules.  'typings-for-css-modules-loader' generates
  // '*.d.ts' files, allowing CSS modules to be imported in *.tsx files via:
  //
  //    import * as style from './style.css';
  //
  // (See https://github.com/wub/preact-cli-plugin-typescript/issues/4)
  const substituteTypingsForCssModulesLoader = config => {
    // Match instances of { loader: 'css-loader', options { modules: true }}
    if (config.loader === 'css-loader'
      && config.options
      && config.options.modules) {
      config.loader = 'typings-for-css-modules-loader';

      // Use of 'namedExport' and 'camelCase' are required:
      // https://github.com/Jimdo/typings-for-css-modules-loader/issues/20#issuecomment-334867043
      config.options.namedExport = true;
      config.options.camelCase = true;
    }

    // Recursively search for and replace instances of 'css-loader' per the above.
    for (const key of Object.keys(config)) {
      const value = config[key];
      if (typeof value === "object") {
        substituteTypingsForCssModulesLoader(value);
      }
    }
  };

  substituteTypingsForCssModulesLoader(config);

  return config
}

module.exports = preactCliTypeScript
