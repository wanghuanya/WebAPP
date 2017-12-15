var express = require('express');
var router = express.Router();
var connection = require("../model")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//获取分类数据接口
router.get("/typeList",function(req,res){
  var level = req.query.level

  var sql = `SELECT * FROM sort WHERE level=${level}`
  console.log(sql);
  connection.query(sql,function(err,result,fields){
    if(err){
      console.log("获取分类数据失败")
      res.status(200).json({errno:1,msg:"获取分类数据失败"})
      throw err
    }
    res.status(200).json({errno:0,msg:"获取数据成功",list:result})
  })
})

module.exports = router;
