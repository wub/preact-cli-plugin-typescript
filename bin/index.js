#!/usr/bin/env node

/**
 * This file creates a `tsconfig.json` if it doesn't already exist.
 * tsconfig is the recommended method for configuring TypeScript.
 */

/* global require process */
const exec = require('child_process').exec
const path = require('path')
const fs = require('fs')

const cwd = process.cwd().replace (/\\/g, '/')
const suffix = '/node_modules/preact-cli-plugin-typescript'
const root = cwd.endsWith(suffix) ? cwd.substr(0, cwd.length - suffix.length) : cwd

if (fs.access(path.join(root, 'tsconfig.json'), fs.constants.F_OK, () => {})) {
  // TODO: If file exists, get existing config and merge correct values.
  console.warn('Detected an existing tsconfig - make sure you have the correct settings.')
}
else {
  try {
    fs.createReadStream(path.join('src', 'tsconfig.json'))
      .pipe(fs.createWriteStream(path.join(root, 'tsconfig.json')));
  }
  catch (e) {
    console.error('An error occurred while creating the tsconfig', e);
  }
}
