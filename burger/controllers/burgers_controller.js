var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
    res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
    burger.selectAll(function(data) {
    	  var hbsObject = { burgers: data };
        res.render('index', hbsObject);
    });
});

router.post('/burgers/create', function(req, res) {
    // editing burger so adds in burger_name
    Burger.create({burger_name: req.body.burger_name})
    // passing call result
    .then(function(newBurger){
        // logging the result
        console.log(newBurger);
        // the redirect
        res.redirect('/');
    });
});

// route to catch burger
router.put('/burgers/update', function(req,res){