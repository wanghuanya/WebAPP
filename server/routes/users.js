var express = require('express');
var router = express.Router();

var connection = require('../model')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//用户注册接口
router.post('/add',function(req,res){
	//接受前端页面发送用户注册数据
	var body  = req.body
	console.log("昵称",body.nickName)
	console.log("手机号",body.phone)
	console.log("密码",body.password)

	var nickName = body.nickName
	var phone = body.phone
	var password = body.password
	var sql = `INSERT INTO user(nickname,phone,password) VALUES('${nickName}','${phone}','${password}')`
	
	connection.query(sql,function(err,result,fields){
		if(err){
			console.log("错误",err)
			res.status(200).json({errno:0,msg:"注册失败"})
			return
		}
		console.log("结果",result)
		res.status(200).json({errno:0,msg:"注册成功"})
	})
})

//用户登录接口
router.post("/login",function(req,res){
	var phone = req.body.phone
	var password = req.body.password
	var sql = `SELECT * FROM user WHERE phone='${phone}' AND password='${password}'`
	connection.query(sql,function(err,result,fields){
		if(err){
			console.log("登录失败",err)
			res.status(200).json({errno:1,msg:"登录失败"})
			throw err
		}
		if(result.length === 1 ){
			//登录成功将用户名写入客户端cookie中
			res.cookie('username', result[0].nickname,{ maxAge: 1000*60*60*2, httpOnly: true,path:"localhost:8080",path:"/"})
			res.status(200).json({errno:0,msg:"登录成功",userInfo:result[0]})
		}else{
			res.status(200).json({errno:1,msg:"登录失败"})
			throw err
		}
	})
})

module.exports = router;
