// const fs = require("node:fs");

// console.log("first");
// // read the contents of a file
// const fileContents = fs.readFileSync("./file.txt", "utf-8");
// console.log(fileContents);

// console.log("second");

// // asynchronous reading
// // if there is no error, error = null
// // data is populated with the file contents
// fs.readFile("./file.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// console.log("third");

// // Sync
// fs.writeFileSync("./greet.txt", "Hello world!");

// // Async
// fs.writeFile("./greet.txt", " Hello world!", { flag: "a" }, (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File written");
//   }
// });

const fs = require("node:fs/promises");

async function readFile() {
  try {
    const data = await fs.readFile("file.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

readFile();
