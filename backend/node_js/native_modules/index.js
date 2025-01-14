// fs is file system native module which allows you to work with file system on your computer

const fs = require("fs");

// writing any msg inside the file
fs.writeFile("message.txt", "hello from sakshi", (err) => {
    if (err) throw err;
    console.log("The file has been saved");
});

// reading the file
fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});
