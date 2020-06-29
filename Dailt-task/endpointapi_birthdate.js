const express = require("express");
const fs = require("fs");
const app = express();
const port = 4000;
app.get("/", (req, res) => {
  fs.writeFile("date-time.txt", createdDate("./date-time.txt"), (err) => {
    if (err) throw err;
    console.log("success");
  });
  function createdDate(file) {
    const { birthtime } = fs.statSync(file);
    return birthtime;
  }
  res.send("File Created");
});
app.get("/date", (req, res) => {
  fs.readdir("C:\Users\nithe\Desktop\NODEJS", (err, files) => {
    if (err) throw err;
    res.send(files);
  });
});
app.listen(port, () => {
  console.log(`server is listening ${port}`);
});
