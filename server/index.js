const Koa = require('koa')
const app = new Koa()
const {normal} = require('./template/index')

app.use(async (ctx, next) => {
  ctx.header = 'text/html; charset=utf-8'
  ctx.body = normal
})

app.listen(2333)
