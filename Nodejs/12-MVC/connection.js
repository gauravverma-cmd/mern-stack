const mongoose = require("mongoose");
// Making connection with mongodb

async function connectMongoDb(url){
 return mongoose.connect(url)
}

module.exports = {
    connectMongoDb,
}