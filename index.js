/*!
 * spawn-commands <https://github.com/jonschlinkert/spawn-commands>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var async = require('async');
var spawn = require('async-exec-cmd');

module.exports = function spawnCommand(cmds) {
  cmds = !Array.isArray(cmds)
    ? [cmds]
    : cmds;

  async.eachSeries(cmds, function (cmd, next) {
    spawn(cmd.cmd, cmd.args, {stdio: 'inherit'}, next)
    .on('error', next)
    .on('close', next);
  });
};
