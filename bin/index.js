#!/usr/bin/env node

/**
 * This file creates a `tsconfig.json` if it doesn't already exist.
 * tsconfig is the recommended method for configuring TypeScript.
 */

/* global require process */
const exec = require('child_process').exec

const cwd = process.cwd().replace (/\\/g, '/')
const suffix = '/node_modules/preact-cli-plugin-typescript'
const root = cwd.endsWith(suffix) ? cwd.substr(0, cwd.length - suffix.length) : cwd

exec('tsc --init', {cwd: root}, (error) => {
  if (error) {
      console.error(`An error occurred while creating tsconfig: ${error}`)
      return
  }
})
