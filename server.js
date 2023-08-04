const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.render("index.ejs", {
        full_name: name,
    });
});

app.get("/grocery_account_page.ejs", function (req, res) {
    res.render("grocery_account_page.ejs");
});

app.listen(3000, function () {
    console.log("Server started");
});

var name = null;

app.post("/submit", function (req, res) {
    name = req.body.fullname;
    const Email = req.body.email;
    const phoneNo = req.body.phone;
    const pin_code = req.body.pincode;
    const Address = req.body.address;
    console.log(name, Email, phoneNo, pin_code, Address);
    res.render("index.ejs", {
        full_name: name,
    });
});
