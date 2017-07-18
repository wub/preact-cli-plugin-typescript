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

  return config
}

module.exports = preactCliTypeScript
