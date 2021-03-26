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
    


    
   
       



// // From Book.js
//Irshaad commented out router so book button is not function
// router.get('/:pid/:cid/', function(req, res, next) {
//   console.log('CID:',req.params.cid)
//   const booking = new Booking({ CustomerId: parseInt(req.params.cid), BookingId:Math.floor(Math.random()*100)+1, BookingDate: new Date(), TravelerCount: 3, PackageId: parseInt(req.params.pid) }); 
//   console.log(booking);
//   booking.save((err, result)=> {
//     if(err) // If there are errors from the Model schema
//     {   const errorArray = [];
//         const errorKeys = Object.keys(err.errors);
//         errorKeys.forEach(key => errorArray.push(err.errors[key].message));
//         return res.render("sign-up", 
//         { ...pageRegister,
//             errors: errorArray,
//             ...req.body,
//         });     
//     }
//       res.render('thankyou',{data:result.CustomerId})
//     });
//   });











module.exports = router;
