const mongoose = require('mongoose');
const { getMate } = require('../helpers');

const InviteCodeSchema = new mongoose.Schema({
    // 邀请码
    code: String,
    // 用来注册那个账户
    user: String,

    meta: getMate(),
});

mongoose.model('InviteCode',InviteCodeSchema);