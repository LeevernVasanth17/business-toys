var express = require("express"),
    app = express();
    
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("index");
});

app.listen(5000, function(req, res) {
  console.log("server started at port 5000");
});
