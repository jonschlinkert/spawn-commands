/*!
 * spawn-commands <https://github.com/jonschlinkert/spawn-commands>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var run = require('./index');

// run({cmd: 'npm --version'});
// run({cmd: 'npm', args: ['--version']});
// run([
//   {cmd: 'npm', args: ['install', '--save', 'is-glob']},
//   {cmd: 'npm', args: ['uninstall', '--save', 'is-glob']},
//   {cmd: 'npm install --production -d'}
// ]);
run({cmd: 'npm install', args: ['--save-dev', 'mocha', 'should']});
// run({cmd: 'npm uninstall --save-dev', args: ['mocha', 'should']});
// run({cmd: 'npm install -d'});
