// Authors: David McDonald, Farid Kassam, Shefqet Zyko, Irshaad Sardiwalla, Srinivasan Sivalingam

var express = require("express");
var router = express.Router();
const { Booking } = require('../models/booking');
const mongoose = require('mongoose'); //new
mongoose.connect('mongodb+srv://irshaad:%23myfirstDB@cluster0.dmjv8.mongodb.net/myclouddb', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


router.use((req, res, next) => {
  //console.log('Time: ', Date.now());
  if (!req.user) res.render('pug_index');
  //res.status(403).send("Not allowed");
  else next();
});
// Get all bookings for logged in customer

router.get('/', function(req, res, next) {
      const query = { userid : req.user.userid };
      Booking.find(query, (err, bookings) => {
        if (err) {
          console.log(err);
          next(err);
        }
  res.render("bookingsview", { allBookings:bookings });
  console.log(bookings)
              })});

//deletes individual booking
router.get('/delete/:id',(req,res)=>{
  console.log('id',req.params.id)
  Booking.findByIdAndRemove(req.params.id,(err,result)=>{
    if (err){console.log(err)}
    console.log(result);
  })
  res.redirect('/viewbookings');
});
    
module.exports = router;
