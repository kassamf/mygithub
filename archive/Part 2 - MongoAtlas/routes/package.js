// var express = require("express");
// var router = express.Router();
// const { Package1 } = require("../models/packageold");


// // middleware that is specific to this router,
// // checks that the user must be logged in
// router.use((req, res, next) => {
//   //console.log('Time: ', Date.now());
//   if (!req.user) res.status(403).send("Not allowed");
//   else next();
// });


// //insert data into Package model
// var myobj = new Package1({PkgName : "Caribbean New Year"});
// // (
// //   //{ __id: 11, Bookingid: 11, BookingDate:  mydate1 = new Date(),BookingNo:"DFS3",TravelerCount: 1.0,CustomerID:143,TripTypedId: "B",PackageId: null},
// //   {PkgName : "Caribbean New Year",
// //   PkgDesc : "Cruise the Caribbean & Celebrate the New Year."}
// //   );
  
// myobj.save(myobj, (err)=>{
//   if(err) return res.send(err);
// })
// // Get all packages page
// router.get("/package", function (req, res, next) {
//   Package.find((err, packages) => {
//     //console.log(posts);
//     res.render("package");
//   });
// });

// module.exports = router;