const express = require('express')
const dbConnect = require('./mongodbcon');
const app = express();

// we need a mongo object to create an object instance to delete data through id 
const mongodb = require('mongodb')

// now to get the data from req or postman 
app.use(express.json());

// this is how we can read data from mongo and respond in api   
app.get('/', async (req,res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data)
    console.log(data)
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
    // or we can also give condition like this : {name : req.body.name or req.param.name}
        { $set:req.body})
res.send([{name:"pinchu negi"},req.body])
});

// delete method api 
// this time we will use parameters to get data 

app.delete("/:id",async (req,res)=>{
    let data = await dbConnect();

    // now to delete thorugh id we will use mongo object to create instance 
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    // console.log(req.params.id);

    res.send(result);

});

app.listen(5000);


