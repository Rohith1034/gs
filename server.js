const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.use(express.static(__dirname));

app.listen(3000,function(req,res) {
    console.log("Server started");
})