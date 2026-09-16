const crypto = require("crypto")

// 1. randomByte
const randomValue = crypto.randomBytes(8)
console.log(randomValue.toString("hex")) 

// 2. createHash

const hashValue = crypto.createHash("sha256").update("grv").digest("hex")

const inputValue = "grv"
const matchValue = crypto.createHash("sha256").update(inputValue).digest("hex")

if(hashValue === matchValue){
    console.log("You can login")
}
else {
    console.log("Something went wrong")
}