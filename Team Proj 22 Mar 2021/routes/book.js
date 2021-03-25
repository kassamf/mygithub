var express = require('express');
var router = express.Router();
const packages = require('../models/packages');
const { Booking } = require('../models/booking');
//const { getAgents } = require('../models/contactMongo');
const Contact = require("../models/contactMongo");
const query = ({});
const Package = require("../models/package_irshaad");//added by Irshaad 24 Mar 2021
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

/* GET home page. */
// router.get('/:pid', function(req, res, next) {
//   console.log('PID:',req.params.pid)
//   packages.getPackages({_id:parseInt(req.params.pid)}, (err, resd)=>{
//     if(err) return res.send(err);
//     if (resd) {
//       Contact.getAgents({AgentId:Math.floor(Math.random()*9)+1}, (err, resagent)=>{
//         if(err) return res.send(err);
//         if (resagent) {
//           console.log(resagent);
//           res.render('order_page',{data:resd, dataAgent:resagent});
//         }
//       })
      
     
//     }
//   });
  
// });


// function getNextSequenceValue(sequenceName){
//   var sequenceDocument = db.counters.findAndModify({
//      query:{_id: sequenceName },
//      update: {$inc:{sequence_value:1}},
//      new:true
//   });
//   return sequenceDocument.sequence_value;
// }

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



    
  //});
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

module.exports = router;
