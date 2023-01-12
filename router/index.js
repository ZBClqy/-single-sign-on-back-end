const express=require('express')
const router=express.Router()
const { verifyUser } = require('../model/userInfo')
const JsonResult=require('../utils/return')
const jwt=require('../utils/jwt')

router.post('/login',(req,res,next)=>{
    verifyUser((err,result)=>{
        if(err){
            res.send(JsonResult(false))
        }else{
            if(result[0].password==req.body.password){
                const token=jwt.setToken(req.body)
                res.send(JsonResult(true,token))
            }else{
                res.send(JsonResult(false))
            }
        }
    },req.body)
})

router.post('/verifyToken',(req,res,next)=>{
    jwt.verifyToken(req.body.token,function(err,data){
        if(err){
       
            res.send(JsonResult(false))
        }
        if(!data){
            res.send(JsonResult(false))
        }
        res.send(JsonResult(true,''))
    })
})

module.exports=router