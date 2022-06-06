const router = require('koa-router')();
const User = require('../models/userSchema');
const utils = require('../utils/utils');

router.prefix('/users');

router.post('/login', async(ctx) => {
    const { userName, userPwd } = ctx.request.body;
    try {
        const res = await User.findOne({
            userName,
            userPwd
        });
        if (res) {
            ctx.body = utils.success(res);
        } else {
            ctx.body = utils.fail('', '账号或密码错误', 20001);
        }
    } catch (e) {
        ctx.body = utils.fail(e.msg);
    }

});


module.exports = router;