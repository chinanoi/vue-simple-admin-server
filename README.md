# vue-simple-admin-server
Vue3通用后台管理系统对应服务端接口

## pm2常用命令
    1. pm2 list 查看所有已启动项目
    2. pm2 start 启动
    3. pm2 restart www  重启
    4. pm2 stop www 停止
    5. pm2 delete www 删除
    6. pm2 start ./bin/www --watch自动重启

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
