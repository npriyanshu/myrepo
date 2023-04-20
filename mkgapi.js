const express = require('express')
const dbConnect = require('./mongodbcon');
const app = express();

// now to get the data from req or postman 
app.use(express.json());

// this is how we can read data from mongo and respond in api   
app.get('/', async (req,res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data)
});

// now time for the post method to send data using post method 
// we can give same route to it as the get method 
app.post('/', async (req,res)=>{

    let data = await dbConnect();

    // only working insertOne an insertMany so use it otherwise give error 
    let result = await data.insertOne(req.body)

    res.send(result)
});

// to updatedata we use put method 
app.put('/',async(req,res)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:"priyanshu"},
        { $set:req.body})
res.send([{name:"pinchu negi"},req.body])
})

app.listen(5000);


