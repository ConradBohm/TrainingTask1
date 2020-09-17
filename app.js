const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const app = express()
app.use("/", router)
userObject = {}

var uri = "mongodb://127.0.0.1:27017/users";

app.set('view engine', 'pug')


app.get('/', function(req, res){
    res.render('index')
})

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

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