var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var url = "mongodb://127.0.0.1/fitness";
mongoose.connect(url);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

var userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

var User = mongoose.model("User", userSchema);

// User.find(function(err, results) {
//   //invoke callback with your mongoose returned result
//   // assert.equal(null, err);
//   console.log(results);
// });

try {
  User.find({ username: "aditya" }, function(err, users) {
    // var userMap = {};
    //
    // users.forEach(function(user) {
    //   userMap[user._id] = user;
    // });
    //console.log(users[0].password);
  });
} catch (error) {
  console.log(error);
}

// var users = [
//   {
//     username: "Mike",
//     password: "mike123"
//   },
//   {
//     username: "Tom",
//     password: "tom123"
//   },
//   {
//     username: "John",
//     password: "john123"
//   },
//   {
//     username: "Mac",
//     password: "mac123"
//   }
// ];

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/doLogin", function(req, res, next) {
  var reqUsername = req.body.username;
  var reqPassword = req.body.password;

  if (reqUsername && reqPassword) {
    try {
      User.find({ username: reqUsername }, function(err, results) {
        if (err) {
          console.log(err);
        } else if (results.length == 0) {
          res.status(401).json({ message: "incorrect credentials" });
        } else if (results[0].password == reqPassword) {
          res.status(201).json({ message: "Login successful" });
        }
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(501).json({ message: "Enter username and Password" });
  }
  // console.log(reqUsername);
  // console.log(reqPassword);
});

module.exports = router;
