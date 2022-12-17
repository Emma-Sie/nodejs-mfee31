const express =require('express');

const app=express();

//app.[method]    
//get(),post,put,patch,delete,option,head;
app.get('/',(req,res)=>{
    res.send('hello express 555666')
});


app.listen(3001,()=>{
    console.log('server running at prot 3001')
});

