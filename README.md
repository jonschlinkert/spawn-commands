# spawn-commands [![NPM version](https://badge.fury.io/js/spawn-commands.svg)](http://badge.fury.io/js/spawn-commands)

> Launches a new process with the given command, with command line arguments in `args`. Should work with any platform - even Windows.

## Install with [npm](npmjs.org)

```bash
npm i spawn-commands --save
```

## Run tests

```bash
npm test
```

## Usage

```js
var cmd = require('spawn-commands');
```

Say you want to run [lint-deps](https://github.com/jonschlinkert/lint-deps) programmatically,
and you want to exclude the `test` directory from the scan. Just do:

```js
cmd({cmd: 'deps', args: ['-e', 'test']});
//=> 'deps -e test'
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/spawn-commands/issues)

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on December 09, 2014. To update, run `npm i -g verb && verb`._