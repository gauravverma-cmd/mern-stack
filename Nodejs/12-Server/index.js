const http  = require("http")

const myServer = http.createServer((req ,res)=> {   // createServer() is used to create the sever and it is a built in http server
    console.log("New requesr");        // It takes two parameter (req and response)
    res.end("Hello from the server")    // this helps to shows data  on the screen.  
})
myServer.listen(8000, ()=> console.log("Server started"))  // here 8000 is a port Number 