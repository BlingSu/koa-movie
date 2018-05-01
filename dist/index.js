'use strict';

var _path = require('path');

var _ex = require('./ex');

var _ex2 = _interopRequireDefault(_ex);

var _util = require('util');

var _fs = require('fs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {readFile, writeFileSync as wfs} from 'fs'
// import * as qs from 'querystring'

// promisify(readFile)(r(__dirname, '../package.json'))
//   .then(data => {
//     data = JSON.parse(data)

//     console.log(data.name)
//     wfs(r(__dirname, './name'), String(data.name), 'utf-8')
//   })

console.log(_ex.name2, (0, _ex.getName2)());

// import {name, getName} from './ex'

// import {promisify} from 'util'


async function init() {
  let data = await (0, _util.promisify)(_fs.readFile)((0, _path.resolve)(__dirname, '../package.json'));

  data = JSON.parse(data);

  console.log(data.name);
}
init();
//# sourceMappingURL=index.js.map