var express = require("express");
var router = express.Router();
const Contact = require("../models/contactMongo");
const mongoose = require('mongoose'); //new
//console.log(Contact);
// const pageCreatePost = {
//   pagetitle: "Blog post",
//   pageheading: "Create a new post",
//   pagemessage: "This is where you can create a new post.",
// };
const pageShowContacts = {
  pagetitle: "Orders Summary",  //new
 // pageheading: "A collection of all blog posts.",
 // pagemessage: "Write your own inspiring tale to capture the memories of past travels.",
};




const { Booking } = require('../models/booking');

router.use((req, res, next) => {
  //console.log('Time: ', Date.now());
  if (!req.user) res.render('pug_index');
  //res.status(403).send("Not allowed");
  else next();
});
// Get all contacts page for agencies part

router.get('/', function(req, res, next) {
  
      const query = { CustomerId : req.user.CustomerId };
  
      Booking.find(query, (err, bookings) => {
  
        if (err) {
  
          console.log(err);
  
          next(err);
        }

  res.render("orders_summary", { allBookings:bookings });
  console.log(bookings)
              })});
    
module.exports = router;
