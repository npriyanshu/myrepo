const express = require('express');
const app = express();
app.get('',(req,res)=>{
    console.log("data sent by the browser is >>>>>> :",req.query.name)
    let nam = req.query.name;
    res.send('HEllo '+nam)
})
app.get('/about',(req,res)=>{
    res.send('Hello')
}).listen(5000);