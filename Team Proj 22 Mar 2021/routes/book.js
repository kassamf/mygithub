// Authors: David McDonald

var express = require('express');
var router = express.Router();
const { Booking } = require('../models/booking');
//const { getAgents } = require('../models/contactMongo');
const Contact = require("../models/contactMongo");
const query = ({});
const Package = require("../models/packages_irshaad");//added by Irshaad 24 Mar 2021
const Agent = require("../models/agents")
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://irshaad:%23myfirstDB@cluster0.dmjv8.mongodb.net/myclouddb', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


const pageRegister = {
  pagetitle:'Sign-Up',
  pageheading:'Create a new account',
  pagemessage:'Please enter the required information to create a new account.'};

router.use((req, res, next) => {
  //console.log('Time: ', Date.now());
  if (!req.user) res.render('pug_index');
  //res.status(403).send("Not allowed");
  else next();
});


  //new booking page Irshaad
  router.get("/:pkgId", function (req, res, next) {
    //console.log("We are now in the packages end-point");
    const pkgId = req.params.pkgId;
    const query = { PackageId : pkgId };
    Package.findOne(query, (err, package) => {
      if (err) {
        console.log(err);
        next(err);
      }
      console.log(package);
      Agent.findOne({AgentId:Math.floor(Math.random()*9)+1}, (err, agent)=>{
        if (err) {
          console.log(err);
          next(err);
        }
        res.render("order_new",{ package, agent });
      })
    });
  });

  //recieves data from the order_new pug page form and stores to Mongo Atlas booking collection
  router.post("/:pkgId", function (req, res, next) {
    //console.log("We are now in the packages end-point");
      //console.log(req.user.CustomerId)
      const booking = new Booking({ userid: req.user.userid,
                                    BookingId:Math.floor(Math.random()*100)+1,
                                    BookingCost: req.body.packageCost*parseInt(req.body.inlineRadioOptions),
                                    BookingDate: new Date(), 
                                    TravelerCount: req.body.inlineRadioOptions, 
                                    PackageId: parseInt(req.body.PackageId) }); 
      //console.log(booking);
      booking.save((err, result)=> {
        if(err) // If there are errors from the Model schema
        {   const errorArray = [];
            const errorKeys = Object.keys(err.errors);
            errorKeys.forEach(key => errorArray.push(err.errors[key].message));
            return res.render("sign-up", 
            { ...pageRegister,
                errors: errorArray,
                ...req.body,
            });     
        }
        console.log(result.BookingDate)  
        res.render('thankyou',{data:result.BookingDate})
        });
      });


module.exports = router;
