const {readFile}  = require('fs')
const EventEmitter = require('events')

class EE extends EventEmitter {}

const yy = new EE()

yy.on('event', () => {
  console.log('出大事! ---> 2')
})


setTimeout(() => {
  console.log('0毫秒后到期执行的定时器回调 ---> 6')
}, 0)

setTimeout(() => {
  console.log('100毫秒后到期执行的定时器回调 ---> 10')
}, 100)

setTimeout(() => {
  console.log('200毫秒后到期执行的定时器回调 ---> 11')
}, 200)

readFile(`../package.json`, 'utf-8', data => {
  console.log(`完成文件 1。读操作的回调 ---> 8`)
})

readFile(`../README.md`, 'utf-8', data => {
  console.log(`完成文件 2。读操作的回调 ---> 9`)
})


setImmediate(() => {
  console.log(`Immediate 立即回调 ---> 7`)
})

process.nextTick(() => {
  console.log(`process.nextTick 的回调 ---> 1`)
})

Promise.resolve()
  .then(() => {
    yy.emit('event')
    process.nextTick(() => {
      console.log(`process.nextTick 的第二次回调 ---> 5`)
    })
    console.log(`promise 的第一次回调 ---> 3`)
  })
  .then(() => {
    console.log(`promise 的第二次回调  ---> 4`)
  })


// process -> promise -> settimout -> setimmediate
