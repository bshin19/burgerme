// import Express, and init express router
var express = require('express');
var router = express.Router();

// import burger.js
var burger = require("../models/burger.js");

// Create the router

// get
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// create / insert
router.post("/api/burgers", function(req, res) {
    burger.create("burger_name", req.body.burger_name, function(result) {
        res.json({
            id: result.insertId
        });
    });
});

// update / put
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition ", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// export the router
module.exports = router;