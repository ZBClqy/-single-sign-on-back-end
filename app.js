const express = require('express')
const app = express()
const port = 5857
require('./model/db.js')
const router=require('./router/index.js')

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.all("*",function(req,res,next){
    // 设置允许跨域的域名,*代表允许任意域名跨域
    res.header('Access-Control-Allow-Origin','*');
    // 允许的header类型
    res.header('Access-Control-Allow-Headers','content-type');
    // 跨域允许的请求方式
    res.header('Access-Control-Allow-Methods','DELETE,PUT,POST,GET,OPTIONS');
    if(req.method.toLowerCase() == 'options')
        res.send(200); // 让options 尝试请求快速结束
    else
        next();
})

app.use(router)

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})