// import {promisify} from 'util'
import {resolve as r} from 'path'
// import {readFile, writeFileSync as wfs} from 'fs'
// import * as qs from 'querystring'

// promisify(readFile)(r(__dirname, '../package.json'))
//   .then(data => {
//     data = JSON.parse(data)

//     console.log(data.name)
//     wfs(r(__dirname, './name'), String(data.name), 'utf-8')
//   })

import {name} from './ex'
import {getName} from './ex'
import {promisify} from 'util'
import {readFile} from 'fs'

import age from './ex'

// import {name, getName} from './ex'

import {
  name2 as name3,
  getName2 as getName3
} from './ex'

console.log(name3, getName3())


async function init() {
  let data = await promisify(readFile)(r(__dirname, '../package.json'))

  data = JSON.parse(data)

  console.log(data.name)
}
init()
