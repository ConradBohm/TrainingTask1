var express = require('express');
var app = express();
var mongoose = require('mongoose');
var router = express.Router();
var url = "mongodb://127.0.0.1:27017/users";

app.use("/", router);
app.set('view engine', 'pug');
app.set('views','./views/');


app.get('/', function(req, res){
    res.render('index')
});

mongoose.connect(url);

var connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

router.route("/insertdata").post(function(req, res) {
});


app.listen(4000, function() {
  console.log("Server is running on port: 4000");
});


app.listen(3000, function() {
  console.log(`App listening at http://localhost:3000`)
})