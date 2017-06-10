var express = require("express"),
      path = require("path");

var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));
app.listen(7777, function() {
  console.log("Started School-Finder Server on port", 7777);
})
