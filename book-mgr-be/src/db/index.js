const mongoose = require('mongoose');

//1.给哪个数据库的
//哪个集合
//添加什么格式的文档


//Schema 影射了MongoDB下的一个集合，并且它的内容就是集合下文档的构成
//Modal 可以解释成是根据schema生成的一套方法，这套方法用来操作MongoDB集合和集合下的文档

const UserSchema = new mongoose.Schema({
    nickname: String,
    password: String,
    age: Number,
});

const UesrModal = mongoose.model('User',UserSchema);

function connect() {
    //去连接数据库
    mongoose.connect('mongodb://127.0.0.1:27017/book-mgr');

    //当数据库被打开的时候 做一些事情
    mongoose.connection.on('open', () => {
        console.log('连接成功');

        //创建文档
        const user = new UesrModal({
            nickname: '小明',
            password: '12345',
            age: 12,
        });

        //修改年龄
        user.age = 99;

        //保存，同步到MongoDB
        user.save();
    });
}

connect();