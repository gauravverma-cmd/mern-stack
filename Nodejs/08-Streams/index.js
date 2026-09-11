const http = require("http");
const fs = require("fs");
const { Transform } = require("stream");

const server = http.createServer((req, res) => {

  // ? -------- 1. Downloading File (Read) --------

  // ! 1. Bad way ❌
  // const file = fs.readFileSync("sample.txt");
  // res.end(file);

  // * 2. Good way ✅ Using Stream
  // const readStream = fs.createReadStream("sample.txt");
  // readStream.pipe(res); // we can see this data in the browser by the localhost:8080


  // ? -------- 2. Copying File (Write) --------

  // ! 1. Bad way ❌
  // const file = fs.readFileSync("sample.txt");
  // fs.writeFileSync("output.txt", file);
  // res.end("File copied successfully");


  // * 2. Good way ✅ Using Stream
  // const readStream = fs.createReadStream("sample.txt");  // here all the sample.txt data copy into output.txt data
  // const writeStream = fs.createWriteStream("output.txt");

  // readStream.pipe(writeStream); //This is how we can copy a file 

  // readStream.on("end", () => {
  //   res.end("File copied successfully");
  // });


  // ? -------- 3. String Processing (Transform) --------
  // ipsum -> SURAJ  // here what are doing that we just replace the word ipsum to banger and also converting the complete text to uppercase

  const readStream = fs.createReadStream("sample.txt");
  const writeStream = fs.createWriteStream("output.txt");

  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const modifiedText = chunk
        .toString()
        .toUpperCase()
        .replaceAll(/IPSUM/gi, "BANGER");

      callback(null, modifiedText);
    },
  });

  // ! Bad way ❌
  // readStream.on("data", (chunk) => {
  //   const modifiedText = chunk
  //     .toString()
  //     .toUpperCase()
  //     .replaceAll(/IPSUM/gi, "SURAJ");

  //   writeStream.write(modifiedText);
  // });

  // * Good way ✅ Using Transform Stream
  readStream.pipe(transformStream).pipe(writeStream);

  readStream.on("end", () => {
    res.end("File processed successfully");
  });
});

server.listen(8080, () => {
  console.log("Server is connected at 🔥", 8080);
});