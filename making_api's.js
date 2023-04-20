const express = require('express')
const dbConnect = require('./mongodbcon');
const app = express();

// this is how we can read data from mongo and respond in api   
app.get('/', async (req,res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data)
});

// now time for the post method to send data 
// we can give same url as the get  method and it will not contradict with each other 
app.post('/',(req,res)=>{

    res.send({name:"anil da"})
});

app.listen(5000);


