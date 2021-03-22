var express = require('express');
   const { MongoClient } = require('mongodb');
   var router = express.Router();
   const packages = require('../models/packages');

   router.get('/', function(req, res, next) {    
       var myobj = [
        //{  _id: 16, Bookingid: 16, BookingDate:  mydate1 = new Date(),BookingNo:"DFS3",TravelerCount: 1.0,CustomerID:143,TripTypedId: "B",PackageId: 2},
           { 
            _id: 1,
            Package_id: 1,
            PkgName : "Playa de las Americas", 
            PkgStartDate : mydate1 = new Date(),
            PkgEndDate : mydate1 = new Date(), 
            PkgDesc : "Playa De Las Americas holidays are always a crowd pleaser. Golfing greens, cabaret bars and strolls more scenic than you can believe are just a few of the draws here. Topping it all with a range of neon-lit nights out, there's an all-action pace you’d better get used to.",
            PkgBasePrice : 4800.0, 
            PkgAgencyCommission : 400.0
        },
        { 
            _id: 2,
            Package_id: 2,
            PkgName : "Cape Town", 
            PkgStartDate : mydate1 = new Date(), 
            PkgEndDate : mydate1 = new Date(), 
            PkgDesc : "Cape Town is well known for its fascinating history, interesting culture, natural beauty, award winning wines and laidback lifestyle. The sun rays shining down upon the wonderful city of Cape Town make for a breath-taking and stunning aerial shot of the city below. The vast South Atlantic Ocean and the white rays of the sun on a beautiful day, experienced along with Cape Town holiday packages.",
            PkgBasePrice : 3000.0, 
            PkgAgencyCommission : 310.0
        },
        { 
            _id: 3,
            Package_id: 3,
            PkgName : "Ton Sai Beach", 
            PkgStartDate : mydate1 = new Date(), 
            PkgEndDate : mydate1 = new Date(),
            PkgDesc : "Airfaire, Hotel and Eco Tour.", 
            PkgBasePrice : 2800.0, 
            PkgAgencyCommission : 300.0
        },
        { 
            _id: 4,
            Package_id: 4,
            PkgName : "Machu Pichu", 
            PkgStartDate : mydate1 = new Date(), 
            PkgEndDate : mydate1 = new Date(), 
            PkgDesc : "Euro Tour with Rail Pass and Travel Insurance", 
            PkgBasePrice : 3000.0, 
            PkgAgencyCommission : 280.0
        }
//           { name: 'Peter', address: 'Lowstreet 4'},
//           { name: 'Ben', address: 'Park Lane 38'},
//           { name: 'William', address: 'Central st 954'},
//           { name: 'Chuck', address: 'Main Road 989'},
//           { name: 'Viola', address: 'Sideway 1633'} var mydate1 = new Date()
         ];
         packages.insertPackages(myobj, (err, resd)=>{
             if(err) return res.send(err);
             res.send(`<h2> ${resd}</h2>`);
            })
        });
  
       router.get('/findone/:pname', function(req, res, next) {    
           console.log(req.params.pname)
           const query = {name: req.params.pname};
             packages.getPackages(query, (err, resd)=>{
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