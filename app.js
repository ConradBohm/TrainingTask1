var express = require('express');
var app = express();
var mongoose = require('mongoose');
var router = express.Router();
var url = "mongodb://127.0.0.1:27017/users";
var bodyParser = require('body-parser');

//app.use("/", router);
app.set('view engine', 'pug');
app.set('views','./views/');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
mongoose.connect(url);
var userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String
});

var User = mongoose.model("User", userSchema)

app.get('/', function(req, res){
    res.render('index')
});

app.get('/find', function(req,res){
    res.render('find')
})

app.post('/database', (req,res) => {
    var Details = new User(req.body)
    Details.save()
        .then(item => {
            res.send("User sent to database.")
        })
});

//var userJSON = 

//router.route("/insertdata").post(function(req,res) {
//    users.insert()
//})

//var connection = mongoose.connection;

//connection.once("open", function() {
//  console.log("MongoDB database connection established successfully");
//});

//router.route("/insertdata").post(function(req, res) {
//});


app.listen(4000, function() {
  console.log("Server is running on port: 4000");
});


app.listen(3000, function() {
  console.log(`App listening at http://localhost:3000`)
})