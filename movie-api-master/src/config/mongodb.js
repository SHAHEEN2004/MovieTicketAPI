
const mongodb = require("mongodb");

const client = mongodb.MongoClient;

const uri = "mongodb+srv://test:test@cluster0.cbdyt.mongodb.net/?retryWrites=true&w=majority&ssl=true";
let connectedClient;

module.exports.connect = async()=>{
    try{
        connectedClient = await client.connect(uri);
        console.log("Mongodb is connected");
    }catch(err){
        console.log(err);
    }
}

module.exports.getCollection = (name)=>{
    return connectedClient.db("MovieApp").collection(name);
}