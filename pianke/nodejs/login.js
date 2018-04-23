var express=require("express");
var querystring=require("querystring");
var mysql=require("mysql");
var router = express.Router();
var bodyParser = require('body-parser');
var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"pianke"
});
connection.connect();
router.use(bodyParser.urlencoded({
	extended: false
}))
router.use(bodyParser.json())
router.post('/',function(request,response) {
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Content-Type", "text/plain;charset=UTF-8");
	console.log(request.body);
	connection.query(`SELECT * FROM user where u_tel=${request.body.tel} and u_pwd=${request.body.pwd} `, function(error, results, fields){
		console.log(results);
		if(results.length==0){
			response.end("失败")
		}else {
			var res=JSON.stringify(results)
			connection.query(`UPDATE user SET status=1 WHERE u_tel=${request.body.tel}`, function(error, results, fields){
				response.end(res);
			})
		}
	})
})

router.get('/verification',function(request,response) {
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Content-Type", "text/plain;charset=UTF-8");
	console.log(request.query);
	connection.query(`SELECT * FROM user where u_tel=${request.query.tel} and status=1 `, function(error, results, fields){
		console.log(results);
		if(results.length==0){
			response.end("未登录")
		}else {
			response.end(JSON.stringify(results))
		}
	})
})

router.get('/outlogin',function(request,response) {
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Content-Type", "text/plain;charset=UTF-8");
	console.log(request.query);
	connection.query(`SELECT * FROM user where u_tel=${request.query.tel} and status=1 `, function(error, results, fields){
		console.log(results);
		if(results){
			if(results.length!=0) {
				var res = JSON.stringify(results)
				connection.query(`UPDATE user SET status=0 WHERE u_tel=${request.query.tel}`, function (error, results, fields) {
					response.end("已退出");
				})
			}else {
				response.end("失败")
			}
		}else {
			response.end("失败")
		}
	})
})

module.exports = router;