/*!
 * spawn-commands <https://github.com/jonschlinkert/spawn-commands>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var spawn = require('./index');

spawn([
  {cmd: 'deps', args: ['-e', 'node_modules']},
  {cmd: 'echo "hello world"'}
]);
