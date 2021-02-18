const mongoose = require('mongoose');
const { getMate } = require('../helpers');

const UserSchema = new mongoose.Schema({
    // 账户
    account: String,
    // 密码
    password: String,

    meta: getMate(),
});

mongoose.model('User',UserSchema);