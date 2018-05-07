const Koa = require('koa')
const mongoose = require('mongoose')
const app = new Koa()
const views = require('koa-views')
const {resolve} = require('path')
const {connect, initSchemas} = require('./database/init')

;(async () => {
  await connect()

  initSchemas()
  // require('./tasks/movie')
  // require('./tasks/api')
})()


app.use(views(resolve(__dirname, './views'), {
  extension: 'pug'
}))

app.use(async (ctx, next) => {
  await ctx.render('index', {
    you: 'lol',
    me: 'angelasu'
  })
})

app.listen(2333)
