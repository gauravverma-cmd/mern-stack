const express = require("express");
const app = express();
const PORT = 8000;
let users = require("./MOCK_DATA.json");
const fs = require("fs");

// Middleware in Express is a function that runs in the middle of the request-response cycle and can process the request, send a response, or pass control to the next handler using next(). We can make as much as we can 
app.use(express.urlencoded({ extended: false }));  // It's a buil-in middleware

// This is a custom made middleware
app.use((req,res,next)=>{
  fs.appendFile('./log.txt', `${Date.now()}, ${req.ip}, ${req.path}, ${req.method} \n`, (err)=>{
      next()
  })
})

// app.use((req,res,next)=>{
//     console.log("This is middleware 2")
//     next()
// })

// Home page
app.get("/", (req, res) => {
  res.send("This is a Home page");
});
// To show users in HTML formate
app.get("/users", (req, res) => {
  const html = `${users.map((user) => `<li>${user.first_name} ${user.last_name}</li>`).join("")}`;
  res.send(html);
});
// TO show users in api formate
app.get("/api/users", (req, res) => {
  return res.json(users);
});
// TO show, edit and delete only user by a id.
app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    const id = Number(req.params.id)
    const body = req.body;
    const  user = users.find((user)=> user.id === id)
    Object.assign(user,body)
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users,null,2), (err)=> {
      if(err){
        console.log(err)
        return res.status(500).json({status: "Error"})
      }
      return res.json({ status: "Success", user});
    })
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    users = users.filter((user)=> user.id !== id)
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users,null,2), (err)=> {
      if(err){
        console.log(err);
        return res.status(500).json({status: "Error"})
      }
      return res.json({ status: "Success", users });
    })
  });
  // Post req
app.post("/api/users", (req, res) => {
  const body = req.body;
  const newUser = {id: users.length + 1, ...body,};
  users.push(newUser);
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ status: "Error" });
    }
    return res.json({
      status: "Success",
      user: newUser,
    });
  });
});
app.listen(PORT, () => console.log("Server starts"));
