const preactCliTypeScript = config => {
  if (!config) {
    throw Error('You need to pass the webpack config to preactCliTypeScript')
  }

  // TODO: Let people choose between atl and tsl.

  // TODO: If `awesome-typescript-loader` or `ts-loader` is already
  // loaded, warn the user and don't add another one.

  // TODO: Make sure webpack is setup to resolve ts/x files.

  config.module.loaders.push({
    enforce: 'pre',
    test: /\.tsx?$/,
    loader: 'awesome-typescript-loader'
  })

  return config
}

module.exports = preactCliTypeScript
