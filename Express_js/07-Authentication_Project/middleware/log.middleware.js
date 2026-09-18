import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

// *Handles ES module __dirname and __filename

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


// Middleware to log all request 

const LogMiddleware = (req,res,next)=>{
const timestamp = new Date().toISOString()
const log = `[${timestamp}] ${req.method} ${req.url}\n`
const LogFile = path.join(__dirname, "../logs/request.log");

fs.appendFile(LogFile, log, (err)=> {
    if(err) console.log(`Failed to log request`, err)   
})
next()
}

export default LogMiddleware