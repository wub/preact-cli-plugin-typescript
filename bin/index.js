#!/usr/bin/env node

/**
 * This file creates a `tsconfig.json` if it doesn't already exist.
 * tsconfig is the recommended method for configuring TypeScript.
 */

/* global require process */
const path = require('path')
const fs = require('fs')

const cwd = process.cwd().replace(/\\/g, '/')
const suffix = '/node_modules/preact-cli-plugin-typescript'
const root = cwd.endsWith(suffix)
  ? cwd.substr(0, cwd.length - suffix.length)
  : cwd

// Install tsconfig
if (fs.access(path.join(root, 'tsconfig.json'), fs.constants.F_OK, () => {})) {
  // TODO: If file exists, get existing config and merge correct values.
  console.log(
    'tsconfig detected - make sure you have the correct settings.'
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
if (fs.access(path.join(root, 'preact.config.js'), fs.constants.F_OK, () => {})) {
  // TODO: If file exists, get existing config and merge correct values.
  console.log(
    'preact.config.js detected - you can now import the plugin.'
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
