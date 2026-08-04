// This is a mini -  multi route or multipage sever
const fs = require("fs");
const http = require("http");
const { url } = require("inspector");
const myMiniServer = http.createServer((req, res) => {
  if(req.url === "/favicon.ico") return res.end()
  const log = `${Date.now()} :${req.url} New Req Received\n`;
  fs.appendFile("./log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home page");
        break;
      case "/about":
        res.end("Hii there its Dave and its my first server");
        break;
      case "/contact":
        res.end(
          "You can email us on the email given below\n test123@gmail.com",
        );
        break;
      default:
        res.end("404 Not Found");
    }
  });
});

myMiniServer.listen(8001, () => console.log("Server Strated"));
