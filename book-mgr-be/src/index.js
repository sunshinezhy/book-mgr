const Koa = require('koa');
const koaBody = require('koa-body');
const { connect } = require('./db');
const registerRoutes = require('./routers');
const cors = require('@koa/cors');


// 生成实例化
const app = new Koa();

connect().then(() => {
    app.use(cors());
    app.use(koaBody());

    registerRoutes(app);

        
    // 开启一个HTTP服务
    // 接受HTTP请求并作处理,处理完后响应

    app.listen(3000,() =>{
        console.log('启动成功');
    });
});

