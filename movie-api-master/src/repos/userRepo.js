const mongodb = require("../config/mongodb");

module.exports.add = async (user)=>{
    console.log(user);
    const collection = mongodb.getCollection("user");
    try{
        await collection.insertOne(user);
    }
    catch(err){
        console.log(err);
    }
    return;
}