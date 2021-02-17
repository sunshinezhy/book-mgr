// 引入包
const Kao = require('koa');

// 生成实例化
const app = new Kao();

// 通过app.use注册中间件
// 中间件本质上他就是一个函数
// context 上下文 - 当前请求的相关信息都在里面
app.use(async(context,next) => {
    console.log(1);
    await next();
    console.log(4);
});

app.use(async (context,next) => {
    console.log(2);
    await next();
    console.log(5);
});


app.use(async (context,next) => {
    console.log(3);
    await next();
    console.log(6);
});

// 开启一个HTTP服务
// 接受HTTP请求并作处理,处理完后响应
app.listen(3000,() =>{
    console.log('启动成功');
});