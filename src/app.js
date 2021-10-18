const express = require("express");
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 9000
const app = express();

app.set("view engine","hbs");
const static_path = path.join(__dirname,"../public");

app.use(express.static(static_path));

app.get("/",(req,res)=>{
    res.render("index");
});

app.listen(port,()=>{
    console.log(`Server is running on port 9000`);
});