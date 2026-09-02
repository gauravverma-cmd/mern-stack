const express = require("express");
const app = express();
const urlRoute = require("./routes/url")
const {connectToMongoDb } = require("./connect")
const PORT = 8001;
const URL = require("./models/url");


connectToMongoDb("mongodb://127.0.0.1:27017/urlShortner").then(() => console.log("MongoDb Connected"))
app.use(express.json())
app.use("/url", urlRoute)
app.get('/:shortId',async(req,res)=> {
 const shortId = req.params.shortId;
 const entry =  await URL.findOneAndUpdate({
    shortId
 },{
    $push: {
        visitHistory: {
            timestamp : Date.now(), 
        },
    }
 });
 res.redirect(entry.redirectUrl)
})
app.listen(PORT,  ()=> console.log("Server Starts at : ", PORT));