const fs = require("fs")
const http = require("http")
const url = require("url")


const myServer = http.createServer((req ,res)=>{

    if (req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()} :${req.method} ${req.url} : New Request Received\n`
    const myUrl = url.parse(req.url , true);
    console.log(myUrl);

    fs.appendFile('log.txt' , log , (err ,data)=> {
      if(err){
        console.log(err);
        return res.end("Something went wrong")
      }
      switch(myUrl.pathname){
        case '/':
           if(req.method === "GET")  res.end("Home Page")
            break;
            case '/about':
                res.end("Hii this is about the HTTP method")
                break;
                case '/contact_us':
                res.end("You can email us for any information \n test123@gamil.com")
                break;
                case '/signup':
                   if(req.method === "GET")  res.end("Fill the given from")
                    else if(req.method === "POST") {
                     // bd  connection code
                         res.end("Success")
            } 
                    break;
                     default:
                        res.end("404 Page not found")
        }  

    })
}
)

myServer.listen(8000, ()=> console.log("Server start"))