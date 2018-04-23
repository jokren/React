var express = require('express');
var multer = require('multer');
var router= express.Router();
var mysql = require('mysql');
var querystring=require("querystring");
var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"pianke"
});
connection.connect();

router.post('/uploads',function(request,response) {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Content-Type", "text/plain;charset=UTF-8");
    var data='';
    var params;
    request.on("data",(chunk)=>{
        data+=chunk;
    })
    request.on("end",()=>{
        params = querystring.parse(data);
        connection.query("INSERT INTO timeline(`u_tel`,`u_content`,`u_photo`) VALUES('"+params.u_tel+"','"+params.u_cont+"','"+params.u_photo+"')",function(error,results,fields){
            res.send("发布成功");
        })

        })
})
module.exports = router;