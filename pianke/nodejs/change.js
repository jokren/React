var express=require("express");
var querystring=require("querystring");
var mysql=require("mysql");
var multer = require('multer');
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
	connection.query(`SELECT * FROM user where u_tel=${request.body.tel} AND u_pwd=${request.body.oldpwd}`, function(error, results, fields){
		console.log(results);
		if(results){
			if(results.length!=0) {
				var res = JSON.stringify(results)
				connection.query(`UPDATE user SET ? WHERE u_tel=${request.body.tel} AND u_pwd=${request.body.oldpwd}`, {
					u_pwd: request.body.newpwd,
				}, function (error, results, fields) {
					response.end("修改成功");
				})
			}else {
				response.end("密码不正确")
			}
		}else {
			response.end("密码不正确")
		}
	})
})

module.exports = router;
