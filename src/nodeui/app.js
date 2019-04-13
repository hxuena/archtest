const Koa = require('koa');
const app = new Koa();
import config from "./config"


app.use(ctx => {
  ctx.body = 'Hello Koa';
  console.log('current port:', config.devPort)
})
app.listen(config.devPort)