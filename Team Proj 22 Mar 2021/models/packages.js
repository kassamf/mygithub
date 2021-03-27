/// Authors: Irshaad Sardiwalla, Srinivasan Sivalingam
//courtesy of Mostafa Mohamed


// getting-started.js
var mongoose = require("mongoose");
var Schema = mongoose.Schema;


const packageSchema = new Schema({
  _id: Number,
  PackageId: Number,
  PkgName: String,
  PkgStartDate: Date,
  PkgEndDate: Date,
  PkgDesc: String,
  PkgBasePrice: Number,
  PkgAgencyCommission: Number,
  PkgImg: String,
});

module.exports = mongoose.model("Package", packageSchema);



// (err, client) => {
//     const db = client.db("myclouddb");     
//     const mypackages = db.collection("packages");
//     mypackages.find().toArray((err, dbpackages) => {
//        return dbpackages;
//       });
//   }









