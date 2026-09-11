//So this is all about how to build custom stream 
const {Readable, Writable} = require("stream")
    
// Readable Stream
const readableStream = new Readable({
    highWaterMark : 6,
    read(){},
})
// Writeable stream
const writeableStream = new Writable({
    write(streamData){
      console.log("Writing....", streamData.toString())
    }
})
// This is where actual output work 
readableStream.on("data",(chunk)=> {
 console.log("In CHUNKS",chunk, "In string :",chunk.toString())
 writeableStream.write(chunk)
})

console.log(readableStream.push("Hello"))
