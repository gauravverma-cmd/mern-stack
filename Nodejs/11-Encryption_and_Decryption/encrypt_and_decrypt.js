const crypto = require("crypto")

// Encryption start....

const algo =  "aes-256-gcm" 
const key = crypto.randomBytes(32);
const IV = crypto.randomBytes(12);

const cipher = crypto.createCipheriv(algo,key,IV)

let encrypted = cipher.update("Shhhhhhhhh ....... This is a Secret Msg","utf-8","hex")

encrypted += cipher.final("hex")

const authTag = cipher.getAuthTag();

console.log("Encrypted data:",encrypted)
console.log("Key :",key.toString("hex"))
console.log("IV :",IV.toString("hex"))
console.log("AuthTag :",authTag.toString("hex"))


// Decryption start....

const decipher = crypto.createDecipheriv(algo, key, IV);

decipher.setAuthTag(authTag);

let decrypted = decipher.update(encrypted, "hex", "utf8");

decrypted += decipher.final("utf8");

console.log("Decrypted data :",decrypted);