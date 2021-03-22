   var express = require('express');
   const { MongoClient } = require('mongodb');
   var router = express.Router();
   const contactDB = require('../models/booking');

   router.get('/', function(req, res, next) {    
       var myobj = [
        // {  _id: 16, Bookingid: 16, BookingDate:  mydate1 = new Date(),BookingNo:"DFS3",TravelerCount: 1.0,CustomerID:143,TripTypedId: "B",PackageId: 2},
        { 
            _id : 110, 
            BookingId : 110, 
            BookingDate :mydate1 = new Date(), 
            BookingNo : "DFS3", 
            TravelerCount : 1.0, 
            CustomerId : 143, 
            TripTypeId : "B", 
            PackageId : null
        },
        { 
    _id : 15, 
    BookingId : 15, 
    BookingDate :mydate1 = new Date(), 
    BookingNo : "WDR898", 
    TravelerCount : 1.0, 
    CustomerId : 135, 
    TripTypeId : "L", 
    PackageId : 1
},
{ 
    _id : 17, 
    BookingId : 17, 
    BookingDate :mydate1 = new Date(), 
    BookingNo : "FES3", 
    TravelerCount : 1.0, 
    CustomerId : 143, 
    TripTypeId : "B", 
    PackageId : 2
},
{ 
    _id : 34, 
    BookingId : 34, 
    BookingDate :mydate1 = new Date(), 
    BookingNo : "S935", 
    TravelerCount : 2.0, 
    CustomerId : 138, 
    TripTypeId : "G", 
    PackageId : 3
},
{ 
    _id : 46, 
    BookingId : 46, 
    BookingDate :mydate1 = new Date(), 
    BookingNo : "SKJ329", 
    TravelerCount : 2.0, 
    CustomerId : 133, 
    TripTypeId : "L", 
    PackageId : 4
},

//           { name: 'Peter', address: 'Lowstreet 4'},
//           { name: 'Ben', address: 'Park Lane 38'},
//           { name: 'William', address: 'Central st 954'},
//           { name: 'Chuck', address: 'Main Road 989'},
//           { name: 'Viola', address: 'Sideway 1633'} var mydate1 = new Date()
         ];
         contactDB.insertContact(myobj, (err, resd)=>{
             if(err) return res.send(err);
             res.send(`<h2> ${resd}</h2>`);
         })
     });
  
       router.get('/findone/:pname', function(req, res, next) {    
           console.log(req.params.pname)
           const query = {name: req.params.pname};
             contactDB.getContact(query, (err, resd)=>{
                 if(err) return res.send(err);
                 if(resd) res.send(`<h2> ${JSON.stringify(resd)}</h2>`);
                 else res.send(`<h2>User not found.</h2>`);
                // console.log(result.pname)
             })
       });

          
        //    router.get('/findone', function(req, res, next) {
        //      MongoClient.connect(url, function(err, db) {
        //          if (err) throw err;
        //          var dbo = db.db("mydb");
        //          dbo.collection("contact").findOne({}, function (err, result) {
        //              if (err) throw err;
        //              console.log(result.name);
        //              db.close();
        //              res.send(result.name);
        //          });
        //       });
        //      });   
  
  module.exports = router;

