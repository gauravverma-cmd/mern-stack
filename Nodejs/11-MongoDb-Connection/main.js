const express = require("express");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");
const fs = require("fs");
const { type } = require("os");

// Making connection with mongodb
mongoose
  .connect("mongodb://127.0.0.1:27017/firstConnection")
  .then(() => console.log("Mongodb Connected"))
  .catch((err) => console.log("Mondodb err", err));

// Making a schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  jobTitle: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  gender: {
    type: String,
  },
},{timestamps : true}
);
// Making a modal to use schema
const User = mongoose.model("user", userSchema);

// Middleware in Express is a function that runs in the middle of the request-response cycle and can process the request, send a response, or pass control to the next handler using next(). We can make as much as we can
app.use(express.urlencoded({ extended: false })); // It's a buil-in middleware

// This is a custom made middleware
app.use((req, res, next) => {
  fs.appendFile("./log.txt", `${Date.now()}, ${req.ip}, ${req.path}, ${req.method} \n`,
    (err) => {
      next();
    },
  );
});

// Home page
app.get("/", (req, res) => {
  res.send("This is a Home page");
});
// To show users in HTML formate
app.get("/users", async (req, res) => {
  const allDbUsers = await User.find({})
  const html = `${allDbUsers.map((user) => `<li>${user.firstName} ${user.lastName} - ${user.email} </li>`).join("")}`;
  res.send(html);
});
// TO show users in api formate
app.get("/api/users", async (req, res) => {
  const allDbUsers = await User.find({})
  return res.json(allDbUsers);
});
// TO show, edit and delete only user by a id.
app
  .route("/api/users/:id")
  .get(async(req, res) => {
    const user = await User.findById(req.params.id); 
    return res.json(user);
  })
  .patch(async(req, res) => {
   await User.findByIdAndUpdate(req.params.id, req.body, {new : true})
    return res.json({msg : "Sucesss"})
  })
  .delete(async(req, res) => {  
    await User.findByIdAndDelete(req.params.id) 
      return res.json({ status: "Success"});
  });
// Post req
app.post("/api/users", async (req, res) => {
  const body = req.body;
  if(
    !body || 
    !body.first_name ||
    !body.last_name ||
    !body.email || 
    !body.gender ||
    !body.job_title
  ) {
    return res.send(400).json({msg : "All fileds are required"})
  }
   // Creates the Users in the database.. 
  const result =  await User.create({
    firstName : body.first_name,
    lastName : body.last_name,
    email : body.email,
    gender : body.gender,
    jobTitle : body.job_title,
  })  
  console.log(result);
   return res.status(201).json({msg : "Sucess"})
});
app.listen(PORT, () => console.log("Server starts"));
