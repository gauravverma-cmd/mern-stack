const express = require("express");
const app = express();
const PORT = 8000;
const { type } = require("os");
const userRouter = require("./routes/user");
const { connectMongoDb } = require("./connection");
const  logReqRes  = require("./middlewares");

// connection to mongodb
connectMongoDb("mongodb://127.0.0.1:27017/firstConnection").then(()=> console.log("MongoDb connected"))

// Middleware in Express is a function that runs in the middle of the request-response cycle and can process the request, send a response, or pass control to the next handler using next(). We can make as much as we can
app.use(express.urlencoded({ extended: false })); // It's a buil-in middleware

// This is a custom made middleware
app.use(logReqRes("log.txt"));

// Routes
app.get('/',(req,res)=> {
    res.send("This is a Home page")
})
app.use("/api/users", userRouter);
app.listen(PORT, () => console.log("Server starts"));
