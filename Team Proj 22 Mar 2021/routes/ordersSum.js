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



const bookings = require('../models/booking'); //new
// const packages = require('../models/packages');
//const query = ({});


// //from packages - new
// router.get('/', function(req, res, next) {
// packages.getPackages(query, (err, resd)=>{
//   if(err) return res.send(err);
//   if (resd) {
//     res.render('mypackages',{data:resd})
//   }
// });
// });






// Get all contacts page for agencies part
const query = ({});
router.get('/', function(req, res, next) {
   //Contact.find((err, agencies) => {
    Contact.getContacts(query, (err, agencies)=>{
      if(err) return res.send(err);
      if (agencies) {
        Contact.getAgents({AgencyId:1}, (err, agents1)=>{
          if(err) return res.send(err);
          if (agents1) {
            Contact.getAgents({AgencyId:2}, (err, agents2)=>{
              if(err) return res.send(err);
              if (agents2) {
                console.log(agents2)
                res.render("orders_summary", { blogPosts:agencies, blogAgents1:agents1, blogAgents2: agents2});
              }
            })
            
          }
        })

        
      }
    })
    });

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







//packages - new
router.post('/request', function(req, res, next) {
  res.send(req.body)
});



module.exports = router;
