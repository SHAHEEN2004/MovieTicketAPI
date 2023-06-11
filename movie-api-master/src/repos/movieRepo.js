const { ObjectId } = require("mongodb");
const mongodb = require("../config/mongodb");

module.exports.getCinemas = async(id, cb)=>{

    const collection = mongodb.getCollection("cinemas");
    try{
        var movies = await collection.find(
            { timings: { $elemMatch: { movie_id: id } } }
        ).toArray();
    }
    catch(err){
        console.log(err);
    }
    return cb(movies);
}

module.exports.get = async (cb)=>{
    console.log("sd");
    const collection = mongodb.getCollection("movies");
    try{
        var movies = await collection.find().toArray();
        console.log(movies);
    }
    catch(err){
        console.log(err);
    }
    return cb(movies);
}


module.exports.getByID = async (id,cb)=>{
    console.log(id);
    const collection = mongodb.getCollection("movies");
    try{
        var movie = await collection.findOne({_id:new ObjectId(id)});
        console.log(movie);
    }
    catch(err){
        console.log(err);
    }
    return cb(movie);
}