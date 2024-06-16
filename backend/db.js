const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://tamishgambhir:mongodblearning/inotebook@cluster0.ait123r.mongodb.net/"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;