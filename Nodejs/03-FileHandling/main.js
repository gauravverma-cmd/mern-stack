const fs = require("fs");
const fsPromises = fs.promises;

// 1. Create / Write
fs.writeFileSync(
  "./test.txt",
  "Hii there this is first time that i am creating a file in node js"
);

// 2. Update
fs.appendFileSync(
  "./test.txt",
  "\nThis is the updated file (it is done by appendFileSync)"
);

// 3. Read
const readFile = fs.readFileSync("./test.txt", "utf-8");
console.log("File Content:");
console.log(readFile);

// 4. Copying a file and then updating it
function copyFile() {
  fs.copyFileSync("./test.txt", "./copy.txt");
  console.log("copy.txt created");

  fs.appendFileSync(
    "./copy.txt",
    "\nSo this file is copied from the test file"
  );
}

copyFile();

// 5. Copy and update file using Promises
async function copyAndModify() {
  try {
    const content = await fsPromises.readFile("./test.txt", "utf-8");

    const modifiedContent = content +"\nThis file is copied from the test file by the promise method";

    await fsPromises.writeFile("./copy2.txt", modifiedContent);

    console.log("copy2.txt created");
  } catch (error) {
    console.log(error.message);
  }
}

// 6. Delete a file
async function deletingFileFnc() {
  try {
    await fsPromises.writeFile(
      "./trashFile.txt",
      "This file is made to be deleted"
    );

    await fsPromises.unlink("./trashFile.txt");

    console.log("trashFile.txt deleted");
  } catch (error) {
    console.log(error.message);
  }
}

// 7. Main Function (Runs everything in order) 
// Renaming the file 
async function main() {
  try {
    await copyAndModify(); // Wait until copy2.txt is created

    await fsPromises.rename("./copy2.txt", "./newRenameFile.txt");

    console.log("copy2.txt renamed to newRenameFile.txt");

    await deletingFileFnc();
  } catch (error) {
    console.log(error.message);
  }
}

main();

//8. Checking the file exist or not 
if (fs.existsSync("./test.txt")) {
  console.log("Exists");
}

// 9. Get the info 
const stats = fs.statSync("./test.txt");

console.log("The size of the file is : ",stats.size);
console.log("The exist or not : ",stats.isFile());
console.log("The directory of the file is : ",stats.isDirectory());
console.log("The birthTime of the file is : ",stats.birthtime);
console.log("The modification time is : ",stats.mtime);

// 10. Making and delting the folder 
