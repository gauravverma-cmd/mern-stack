const express = require("express");
const app = express();
const urlRoute = require("./routes/url")
const {connectToMongoDb } = require("./connect")
const PORT = 8001;

connectToMongoDb("mongodb://127.0.0.1:27017/urlShortner").then(() => console.log("MongoDb Connected"))

app.use("/url", urlRoute)
app.listen(PORT,  ()=> console.log("Server Starts at : ", PORT));