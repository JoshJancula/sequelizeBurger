// get express
var express = require("express");
// link to the router
var router = express.Router();
// link to the models folder
var db = require("../models");

// Import the model (burger.js) to use its database functions.
// var Burger = require("../models/burger.js");

// route to get all the burgers
router.get("/", function(req, res) {
    db.burger.findAll({}).then(function(dbBurger) {
       var hbsObject = {
      burgers: dbBurger
    }; // log the burgers 
    console.log(hbsObject); // render them to index
    res.render("index", hbsObject);
    });
});




// post a new burger
router.post("/api/burgers", function(req, res) {
  db.burger.create({
      burger: req.body.burger
    }).then(function(dbBurger) {
    // Send back the ID of the new quote
    // res.json(dbBurger.insertId);
    res.redirect("/");
  });
});



// if we eat the burger it is now devoured so update its condition
router.put("/api/burgers/:id", function(req, res) {
    console.log("req = " + JSON.stringify(req.body))
    db.burger.update({
      
      devoured: req.body.devoured
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbBurger) {
        console.log("wtf bro?");
      //res.json(dbBurger);
    res.redirect("/");
    });
});


 

// export to server
module.exports = router;
