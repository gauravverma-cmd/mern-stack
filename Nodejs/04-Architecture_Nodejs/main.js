const { error } = require("console");
const fs = require("fs")
const os = require("os") 
// Blocking operation ( Sync )
// function blocking_operation (){
//     console.log(1);
//     const result = fs.readFileSync("test.txt","utf-8")
//     console.log(result)
//     console.log(2);
//     console.log(3);
//     console.log(4);
//     console.log(5);
// }
// blocking_operation()

// Non-Blocking operation (Async)

function non_blocking_operation (){
    console.log(1);
    // fs.writeFile("./text.txt", "This is a Non-blocking operation file",(err)=>{
    //     console.log("File made by non blocking state");
    // }) 
    fs.readFile("./text.txt","utf-8",(err , result)=> {
        console.log(result);
    })
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
}
non_blocking_operation()
// knowing the cpu details by os.cpu() fucntion

// model name
const cpuInfo = os.cpus()[0];
console.log("Your Exact CPU Model is:");
console.log(cpuInfo.model); 
// No of cores but not the hardware cores 
console.log(os.cpus().length);
