const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    "userId": Number, // 用户ID，自增长
    "userName": String, // 用户名称
    "userPwd": String, // 密码
    "userEmail": String, // 邮箱
    "mobile": String, // 手机号
    "sex": Number, // 性别： 0：男  1：女
    "deptId": [], // 部门
    "job": String, // 岗位
    "state": {
        type: Number,
        default: 1
    }, // 1：在职  2：离职 3：试用期
    "role": {
        type: Number,
        default: 1
    }, // 角色： 0：系统管理员  1：普通用户
    "roleList": [], // 系统角色
    "createTime": {
        type: Date,
        default: new Date()
    }, // 创建时间
    "lastLoginTime": {
        type: Date,
        default: new Date()
    }, // 更新时间
    remark: String // 备注-预留字段
});
module.exports = mongoose.model('users', userSchema, 'users');