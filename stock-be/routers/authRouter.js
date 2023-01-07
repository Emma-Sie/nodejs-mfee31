const express = require('express');
// 利用 express 這個框架建立一個 router(小型app)
const router=express.Router();

router.post('/register',(req,res,next)=>{
    console.log('i am register');
    res.json({});
})

module.exports= router;
