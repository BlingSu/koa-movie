const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  ctx.body = 'hello koa-movie'
})

app.listen(2333)
