#!env node
"use strict";

var version = require('../package.json').version;

var readlineSync = require('readline-sync');
var fs = require('fs');
var path = require('path');
var cd = require('cd');
var exec = require('exec');
var execSync = require('child_process').execSync;

cd(path.join(__dirname, '..'));

if (!readlineSync.keyInYN('Did you bump the version number in package.json?')) {
    process.exit(1);
}

if (!readlineSync.keyInYN('Did you update CHANGELOG.md using scripts/update_changelog.js?')) {
    process.exit(1);
}

if (!readlineSync.keyInYN('Did you push all changes back to origin?')) {
    process.exit(1);
}

execSync('npm run package');

execSync('git commit -m "Release ' + version + '"');


// publish to npm first
execSync('npm publish');

// then branch, add/commit release files, tag, and push
execSync('git tag ' + version);
execSync('git push');
execSync('git push origin ' + version);