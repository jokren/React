// 公用服务器  端口
var express = require('express');
var multer = require('multer');
var mysql = require("mysql")
var bodyParser = require('body-parser');
var router = express.Router();



var app = express();


app.use('/upFiles',require('./uploadTimeline'))

app.use('/',require('./indexread.js'))




app.use(express.static('upimg'));
// 登录
app.use('/login',require('./login.js'))
//设置信息
app.use('/setuser',require('./setuser'))
//修改密码
app.use('/change',require('./change'))

app.listen(8888);
console.log("开启服务器");