const express = require("express");
const app = express();
const PORT = 8000;
const users = require("./MOCK_DATA.json");
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
app.route("/api/users/:id").get((req, res) => {
    const id =  Number(req.params.id)
    const user = users.find(user => user.id === id)
    return res.json(user)
})
.patch((req,res)=>{
    // TO do edit the user
    return res.json({status : "pending"})
})
.delete((req,res)=> {
    // TO do delete the user
    return res.json({status : "pending"})
})
.post((req,res)=> {
    // TO do create a new user
    return res.json({status : "pending"})
})
app.listen(PORT, () => console.log("Server starts"));   
