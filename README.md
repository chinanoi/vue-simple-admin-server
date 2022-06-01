# vue-simple-admin-server
Vue3通用后台管理系统对应服务端接口

## 项目初始化

    1. npm install安装依赖
    2. 使用nodemon启动、pm2启动会有热更新,
    3. www文件为项目入口文件

## 项目结构

### app.js中的插件

    1. koa-views：页面模板引擎，常用node模板引擎例如ejs
    2. koa-json：将参数转为json
    3. koa-onerror：错误监听
    4. koa-bodyparser：参数转换
    5. koa-logger：日志

### routes文件夹--项目核心
