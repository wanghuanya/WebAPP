var http = require('http')
var request = require('request')
var fs = require('fs')
var path = require('path')
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

var cheerio = require("cheerio") 

var urlList = ["http://m.vancl.com/Product/AjaxSonCateList?cateId=&np=10366&cateref=",
				"http://m.vancl.com/Product/AjaxSonCateList?cateId=&np=10146&cateref=",
				"http://m.vancl.com/Product/AjaxSonCateList?cateId=&np=10145&cateref=",
				"http://m.vancl.com/Product/AjaxSonCateList?cateId=&np=10421&cateref=",
				"http://m.vancl.com/Product/AjaxSonCateList?cateId=&np=10426&cateref=",
				"http://m.vancl.com/Product/AjaxSonCateList?cateId=&np=10151&cateref=",
				"http://m.vancl.com/Product/AjaxSonCateList?cateId=&np=10154&cateref=",
				"http://m.vancl.com/Product/AjaxSonCateList?cateId=&np=10378&cateref=",
				"http://m.vancl.com/Product/AjaxSonCateList?cateId=&np=10149&cateref="]

//请求分类数据
function getTypeData(url,index){  //index代表第几个分类
	//调用http模块的get方法发起http请求
	http.get(url,function(res){
		//设置响应内容的编码
		res.setEncoding("utf-8")
		//监听res的data事件和end事件
		var result = ""
		res.on("data",function(chunk){
			result += chunk
		})

		res.on("end",function(){
			// console.log(result)  //result是json字符串
			result = JSON.parse(result)
			for(var i=0;i<result.length;i++){
				saveImg(result[i].Logo,result[i].TypeName,index,i)
				// console.log(`第${index}类的第${i}张图片下载完成`)
			}
		})

	})
}


function saveImg(imgUrl,typeName,index,i){
	//设置request请求头信息
	request.head(imgUrl,function(err,res,body){
		if(err){
			console.log("请求失败")
			throw err
		}
	})

	// imgUrl = http://i7.m.vancl.com/oms/2016_11_4_14_42_3_7460_400x400.jpg 

	var fileName = imgUrl.substring(imgUrl.lastIndexOf("/")+1)

	var filePath = path.join(__dirname,"images",fileName)

	//发起request请求并将请求得到的图片保存至本地
	request(imgUrl).pipe(fs.createWriteStream(filePath))
	console.log(`第${i+1}张图片下载完成`)
	var sql = `INSERT INTO sort(level,typeName,logo) VALUES(${index},"${typeName}","${fileName}")`
	// console.log(sql)
	connection.query(sql,function(err,result,fields){
		if(err){
			console.log("添加数据失败")
			throw err
		}
		console.log(`第${index}的第${i}张图片添加至数据库成功`)
	})
}


//循环获取分类图片
for(var index=0;index<urlList.length;index++){
	getTypeData(urlList[index],index)
}


//getTypeData()


//获取主页图片
// function getIndex(){
// 	http.get("http://m.vancl.com/",function(res){
// 		res.setEncoding("utf-8")
// 		var html = ""
// 		res.on("data",function(chunk){
// 			html += chunk
// 		})

// 		res.on("end",function(){
// 			console.log(html)

// 			var $ = cheerio.load(html)

// 			$(".t1001").each(function(index,item){
// 				var imgUrl = $(this).find("img").attr("src")
// 				console.log(imgUrl)
// 				saveImg(imgUrl,index)
// 			})
// 		})
// 	})
// }

//getIndex()