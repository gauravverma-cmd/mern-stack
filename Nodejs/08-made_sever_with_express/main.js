const express = require("express");
const fs = require("fs");
const app = express();

app.use((req, res, next) => {
  const log = `${Date.now()} : ${req.method}: ${req.url} : Request Received\n`;
  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      console.log("Failed to write file", err);
      return res.status(500).send("Something went wrong with the server logs");
    }
    next();
  });
});

app.get("/", (req, res) => {
  res.send("This is a Home page");
});

app.get("/about", (req, res) => {
  res.send(
    `This is an About page \n Hii this is ${req.query.name || "Guest"} \n and i am ${req.query.age || "unknown"}`,
  );
});
app.get("/contact", (req, res) => {
  res.send("This is a contact us page");
});

app.listen(8000, () => console.log("Server Started"));
