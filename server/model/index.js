var mysql = require("mysql")

//配置MySQL连接信息
var connection = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"123456",
	database:"vanke"
})


connection.connect(function(err){
	if(err){
		console.log("连接数据库失败")
		throw err
	}
	console.log("连接数据库成功")
})

module.exports = connection