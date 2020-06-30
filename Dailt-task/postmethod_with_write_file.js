const express = require("express");
const bodyparser=require("body-parser");
const fs = require("fs");
const app = express();
const port = 4000;

app.use(bodyparser.json());//middleware

app.post("/create", (req, res) => {
  fs.writeFile(`${req.body.filename}.txt`,req.body.content , (err) => {
    if (err) throw err;
    res.json({
      message:"file created!"
    })
  });
});

app.listen(port, () => {
  console.log(`server is listening ${port}`);
});
