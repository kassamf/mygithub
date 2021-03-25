// getting-started.js
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");
mongoose.connect('mongodb+srv://irshaad:%23myfirstDB@cluster0.dmjv8.mongodb.net/myclouddb', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

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

packageSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Package", packageSchema);




// (err, client) => {
//     const db = client.db("myclouddb");     
//     const mypackages = db.collection("packages");
//     mypackages.find().toArray((err, dbpackages) => {
//        return dbpackages;
//       });
//   }




