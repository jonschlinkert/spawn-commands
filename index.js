/*!
 * spawn-commands <https://github.com/jonschlinkert/spawn-commands>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var async = require('async');
var spawn = require('child_process').spawn;
var win32 = process.platform === 'win32';

module.exports = function spawnCommand(cmds) {
  cmds = !Array.isArray(cmds)
    ? [cmds]
    : cmds;

  async.eachSeries(cmds, function (cmd, next) {
    var command = win32
      ? 'cmd'
      : cmd.cmd;

    var args = win32
      ? ['/c'].concat([cmd.cmd + ' ' + cmd.args.join(' ')])
      : cmd.args;

    spawn(command, args, {stdio: 'inherit'})
      .on('error', next)
      .on('close', next);
  });
};
