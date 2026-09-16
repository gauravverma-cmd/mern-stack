const http = require("http");
const fs = require("fs");
const url = require("url");
const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()} : ${req.url} New Request Received\n`;
  const myUrl = url.parse(req.url, true); // here we parse the url like it tell us about all the things in url just like pathname, host name, path, href and many more things also passing "true" converts the query string into an object automatically.

  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    // made a log file in which all the user data is stored
    if (err) {
      console.log(err);
      return res.end("Something went wrong.");
    }
    switch (
      myUrl.pathname // pathname is used for routing. It tells us which page the user wants (/about, /search, /contact). We use it inside switch() to decide what response to send.
    ) {
      case "/":
        res.end("Home page");
        break;
      case "/about":
        const username = myUrl.query.name;
        res.end("hii this is " + username);
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end(`Your serach result is ${search}`);
        break;
      default:
        res.end("404 Page not found");
    }
  });
});

myServer.listen(8002, () => console.log("Server started"));
