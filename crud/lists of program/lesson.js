const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const database = 'e-comm'
const client = new MongoClient(url)
async function getData(){
    // first we will connet to db 
    console.log('response')
    let con = await client.connect()
    console.log('response')
    // then we will spacify the database
    let db = con.db(database)
    console.log('response')
    // then it is time to specify Collection
    let collection = db.collection('items')
    console.log('response')
    let response = await collection.find({}).toArray();
    console.log('response')
    console.log(response)
    console.log('response')
}
getData();
