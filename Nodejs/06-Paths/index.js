const path = require("path")

console.log("Filename : ", __filename)
console.log("Dirname : ", __dirname)

//School mgt system 
// So here what we are doing that we just trying to show the path of the dir that in which dir students data is situated for that first we use the { Join function } , Join fucntion solve the prblm of the slashes like forward and backward slashes bcz there are diffrent slashes in windows and Macos or linux.

//* Join()
const filepath = path.join("folder", "students", "data.txt")
console.log(filepath)

const parseDataPath = path.parse(filepath)
const resolvePath = path.resolve(filepath) // it is for to find absolute path 
const extName = path.extname(filepath)
const dirName = path.dirname(filepath)
const baseName = path.basename(filepath)

console.log({
    parseDataPath,
    resolvePath,
    extName,
    dirName,
    baseName
})