const express = require("express");
const bodyparser=require("body-parser");
const app = express();
const port = 2000;

app.use(bodyparser.json());//middleware
let productdata=[];

app.post("/productdetails", (req, res) => {
  productdata.push(req.body);
    res.json({message:"product details created successfully!" })
  });
app.get("/productdetails", (req, res) => {
      res.json(productdata) });
app.listen(process.env.PORT || port, () => {
  console.log(`server is listening ${port}`);
});
