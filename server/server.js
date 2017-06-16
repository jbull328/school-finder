var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    path = require("path");

var schoolController = require("./controllers/schoolController");

var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));
app.use(bodyParser.json())
app.use("/api", schoolController);

app.listen(7777, function() {
  console.log("Started School-Finder Server on port", 7777);
})

mongoose.connect("mongodb://localhost/schoolfinder");
