require("crypto-js")

const express = require('express')
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();
const bodyParser = require('body-parser');

//导入扣下的js代码
var fun = require('./翻页的m参数.js')

console.log(fun);
//构建实例化对象
const app = express()

//extended:false 不使用第三方模块处理参数，使用Nodejs内置模块querystrinodeng处理
//处理XHR请求时 对于 x-www-form-urlencoded形式提交的数据进行处理
app.use(bodyParser.json()) 
//处理普通请求时 对于 x-www-form-urlencoded形式提交的数据进行处理
app.use(bodyParser.urlencoded({extended:false}))



// 建立get路由
//http://localhost:3000/?timestamp=12345434534
app.get('/', function(req, res){
    timestamp = req.query.timestamp; //传入加密需要的参数
    res.send(fun(parseInt((timestamp)))) //返回加密结果
})


//建立post路由
//使用multipartMiddleware中间件，可以处理已form-data形式提交的数据
// http://localhost:3000
app.post('/encrypt', multipartMiddleware, function(req, res){
    res.send(req.body) // 通过post传递参数
})



//设立监听端口
app.listen(3000)