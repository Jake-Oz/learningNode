/*destructure methods needed from fs module
 these ones are synchronous */

// const { readFileSync, writeFileSync } = require("fs");

// const test = readFileSync("./content/test.txt", "utf8");
// const second = readFileSync("./content/second.txt", "utf8");

//console.log(test, second);

// writeFileSync(
//   "./content/result.txt",
//   `Here is the result: Test - ${test}, Second - ${second}`,
//   { flag: "a" }
// );

// these ones are asynchronous and require a callback function - you can add flags as well if needed.
// using async/await or promises may be a better approach

const { readFile, writeFile } = require("fs");

readFile("./content/test.txt", "utf8", (err, data) => {
  if (err) throw err;
  const first = data;
  readFile("./content/second.txt", "utf8", (err, data) => {
    if (err) throw err;
    const second = data;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}.`,
      (err) => {
        if (err) throw err;
        console.log("The file has been saved.");
      }
    );
  });
});
