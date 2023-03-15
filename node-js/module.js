// const { os, array } = require("./file1");
// const file2 = require('./file2')
// console.log(os.platform());

const fs = require("fs");
//fs === fileSystem
fs.readFile("./blog.txt", (err, data) => {
  if (err) {
    return
  } else {
    console.log(data.toLocaleString());
  }
});
