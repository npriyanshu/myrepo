const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

async function dbConnect(){
    let connection = await client.connect();
    let db = await connection.db('e-comm');
    let collection = await db.collection('products')
    let result = await collection.find().toArray();
    console.log(result)
    
}
module.exports=dbConnect;