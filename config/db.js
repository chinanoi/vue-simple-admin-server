// 连接数据库
const mongoose = require('mongoose');
const config = require('./index');
const log4j = require('../utils/log4j');

mongoose.connect(config.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('error', () => {
    log4j.error("***连接数据库失败***");
});
db.on('open', () => {
    log4j.info("***连接数据库成功***");
});