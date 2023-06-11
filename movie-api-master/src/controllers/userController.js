
const repo = require("../repos/userRepo");

module.exports.post = (req, res)=>{
    repo.add(req.body);
    return res.status(200).send("User is created");
}

module.exports.get=(req, res)=>{
    return res.send("user is created..");
}