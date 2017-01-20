var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.listen(process.env.PORT || 80, process.env.IP || '0.0.0.0', () => {
    console.log('Server running');
});

module.exports = app;
