const Koa = require('koa')
const app = new Koa()
const {pugTpl} = require('./template')
const pug = require('pug')

app.use(async (ctx, next) => {
  ctx.header = 'text/html; charset=utf-8'
  ctx.body = pug.render(pugTpl, {
    you: 'pig',
    me: 'angelasu'
  })
})

app.listen(2333)
