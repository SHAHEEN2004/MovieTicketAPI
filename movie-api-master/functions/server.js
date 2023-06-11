const express = require("express");
const userRoutes = require("../src/routes/userRoutes");
const movieRoutes = require("../src/routes/movieRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");
const serverless = require("serverless-http");

const mongodb = require("../src/config/mongodb");

mongodb.connect();
const server = express();

server.use(cors());
server.listen(4000);
server.use(bodyParser.json());
server.use("/api/user/", userRoutes.router);
server.use("/api/movie/", movieRoutes.router);

server.get("/", (req, res)=>{
    res.send("Welcome to Movie API");
});

module.exports.handler = serverless(server);