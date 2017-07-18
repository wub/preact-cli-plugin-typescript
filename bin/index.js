#!/usr/bin/env node

/* global require process */
const path = require('path')
const fs = require('fs')

const cwd = process.cwd().replace(/\\/g, '/')
const suffix = '/node_modules/preact-cli-plugin-typescript'
const root = cwd.endsWith(suffix)
  ? cwd.substr(0, cwd.length - suffix.length)
  : cwd

// Install tsconfig
if (fs.existsSync(path.join(root, 'tsconfig.json'))) {
  // TODO: If file exists, get existing config and merge correct values.
  console.log(
    'tsconfig detected - make sure you have the correct settings: https://github.com/wub/preact-cli-plugin-typescript#installation'
  )
} else {
  try {
    fs
      .createReadStream(path.join('src', 'tsconfig.json'))
      .pipe(fs.createWriteStream(path.join(root, 'tsconfig.json')))

    console.log('tsconfig.json installed.')
  } catch (e) {
    console.error('An error occurred while creating the tsconfig', e)
  }
}

// Install preact.config.js
if (fs.existsSync(path.join(root, 'preact.config.js'))) {
  // TODO: If file exists, get existing config and merge correct values.
  console.log(
    'preact.config.js detected - you can now import the plugin: https://github.com/wub/preact-cli-plugin-typescript#existing-tsconfigjson'
  )
} else {
  try {
    fs
      .createReadStream(path.join('src', 'preact.config.js'))
      .pipe(fs.createWriteStream(path.join(root, 'preact.config.js')))

    console.log('preact.config.js installed.')
  } catch (e) {
    console.error('An error occurred while creating the tsconfig', e)
  }
}
