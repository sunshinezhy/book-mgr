// 引入包
const Kao = require('koa');

// 生成实例化
const app = new Kao();



// 开启一个HTTP服务
// 接受HTTP请求并作处理,处理完后响应
app.listen(3000,() =>{
    console.log('启动成功');
});

console.log('1233')