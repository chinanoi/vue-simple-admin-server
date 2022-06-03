const log4js = require('./log4j');

//  通用工具函数
const CODE = {
    SUCCES: 200,
    PARAM_ERROR: 10001, // 参数错误
    USER_COUNT_ERROR: 20001, // 账号或密码错误
    USER_LOGIN_ERROR: 30001, // 用户未登录
    BUSINESS_ERROR: 40001, // 业务请求失败
    AUTHOR_ERROR: 50001 // 认证失败或token过期
};

module.exports = {
    // 分页结构封装
    pager({ pageNumber = 1, pageSize = 10 }) {
        // 简单处理，若传入的是字符串
        pageNumber *= 1;
        pageSize *= 1;
        const skipIndex = (pageNumber - 1) * pageSize;
        return {
            page: {
                pageNumber,
                pageSize
            },
            skipIndex
        };
    },
    success(data = '', msg = '', code = CODE.SUCCESS) {
        log4js.debug(data);
        return {
            code,
            data,
            msg
        };
    },
    fail(data = '', msg = '', code = CODE.BUSINESS_ERROR) {
        log4js.error(msg);
        return {
            code,
            data,
            msg
        };
    }
};