var express = require("express");
var router = express.Router();
const packages = require("../models/packages");
const query = {};

/* GET package page. */
router.get("/", function (req, res, next) {
  //insertmany was used to create initial database entry. could have been exported as json file.
  // var myobj = [
  //   //{  _id: 16, Bookingid: 16, BookingDate:  mydate1 = new Date(),BookingNo:"DFS3",TravelerCount: 1.0,CustomerID:143,TripTypedId: "B",PackageId: 2},
  //      {
  //       PkgName : "Playa de las Americas",
  //       PkgStartDate : mydate1 = new Date(),
  //       PkgEndDate : mydate1 = new Date(),
  //       PkgDesc : "Playa De Las Americas holidays are always a crowd pleaser. Golfing greens, cabaret bars and strolls more scenic than you can believe are just a few of the draws here. Topping it all with a range of neon-lit nights out, there's an all-action pace youâ€™d better get used to.",
  //       PkgBasePrice : 4800.0,
  //       PkgAgencyCommission : 400.0,
  //       PkgImg : 'images/Playa-de-las-Americas.jpg'
  //   },
  //   {
  //       PkgName : "Cape Town",
  //       PkgStartDate : mydate1 = new Date(),
  //       PkgEndDate : mydate1 = new Date(),
  //       PkgDesc : "Cape Town is well known for its fascinating history, interesting culture, natural beauty, award winning wines and laidback lifestyle. The sun rays shining down upon the wonderful city of Cape Town make for a breath-taking and stunning aerial shot of the city below. The vast South Atlantic Ocean and the white rays of the sun on a beautiful day, experienced along with Cape Town holiday packages.",
  //       PkgBasePrice : 3000.0,
  //       PkgAgencyCommission : 310.0,
  //       PkgImg : 'images/cape_town.jpeg'
  //   },
  //   {
  //       PkgName : "Phú Quốc",
  //       PkgStartDate : mydate1 = new Date(),
  //       PkgEndDate : mydate1 = new Date(),
  //       PkgDesc : "Phú Quốc is a Vietnamese island off the coast of Cambodia in the Gulf of Thailand. It's known for white-sand beaches and resorts, most of which are along the palm-lined southwest coast. More than half of the island is part of Phú Quốc National Park, which features mountains, dense tropical jungle, hiking trails and wildlife. Duong Dong is the largest town, with day and night markets selling crafts, produce and fish. ― Google",
  //       PkgBasePrice : 2800.0,
  //       PkgAgencyCommission : 300.0,
  //       PkgImg : 'images/sunrise-phu-quoc-island-ocean.jpg'
  //   },
  //   {
  //       PkgName : "Ton Sai Beach",
  //       PkgStartDate : mydate1 = new Date(),
  //       PkgEndDate : mydate1 = new Date(),
  //       PkgDesc : "Airfaire, Hotel and Eco Tour.",
  //       PkgBasePrice : 2800.0,
  //       PkgAgencyCommission : 300.0,
  //       PkgImg : 'images/ton_sai_beach.jpg'
  //   },
  //   {
  //     PkgName : "Machu Pichu",
  //     PkgStartDate : mydate1 = new Date(),
  //     PkgEndDate : mydate1 = new Date(),
  //     PkgDesc : "Euro Tour with Rail Pass and Travel Insurance",
  //     PkgBasePrice : 3000.0,
  //     PkgAgencyCommission : 280.0,
  //     PkgImg : 'images/machupichu.jpg'
  // }
  // ];

  //   packages.insertPackages(myobj, (err, resd)=>{
  //     if(err) return res.send(err);
  //     //res.send(`<h2> ${resd}</h2>`);
  //     res.render('mypackages',{data:myobj});
  //     });

  packages.getPackages(query, (err, resd) => {
    if (err) return res.send(err);
    if (resd) {
      res.render("mypackages", { data: resd });
    }
  });

  //res.send(`<h2> ${JSON.stringify(resd)}</h2>`);

  //
  // });
  //else res.render('mypackages',{data:myPkgs});
});

router.post("/request", function (req, res, next) {
  res.send(req.body);
});

module.exports = router;

/// ceti
//// farid
/// Irshad
/// david
