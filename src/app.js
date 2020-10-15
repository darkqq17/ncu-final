const koa = require('koa');
const logger = require('koa-logger');
const koaBody = require('koa-bodyparser');
const apiRouter = require('./router/router');
const cors = require('@koa/cors');

const app = new koa();
const PORT = process.env.PORT || 3000;

app.use(logger());
app.use(cors());
app.use(koaBody());
app.use(apiRouter.routes());

app.listen(PORT, () => {
    console.log(`[SERVER] is listening on port ${PORT}`)
})
