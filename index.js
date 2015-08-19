/*!
 * spawn-commands <https://github.com/jonschlinkert/spawn-commands>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var spawn = require('child_process').spawn;
var win32 = process.platform === 'win32';

module.exports = function spawnCommand(cmds, cb) {
  cmds = Array.isArray(cmds) ? cmds : [cmds];

  eachSeries(cmds, function (cmd, next) {
    var command = win32 ? 'cmd' : cmd.cmd;

    var args = win32
      ? ['/c'].concat([cmd.cmd + ' ' + cmd.args.join(' ')])
      : cmd.args;

    spawn(command, args, {stdio: 'inherit'})
      .on('error', next)
      .on('close', next);
  }, cb);
};

function eachSeries(arr, iter, cb) {
  cb = cb || function noop() {};
  (function next(i) {
    if (i === arr.length) return cb();
    iter(arr[i], i, function(err) {
      if (err) return cb(err);
      setImmediate(function () {
        return next(i + 1);
      });
    });
  })(0);
}

