var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//module.exports.joinPackages = function(data, callback){
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection('booking').aggregate([
    { $lookup:
       {
         from: 'packages',
         localField: 'PackageId',
         foreignField: '_id',
         as: 'bookingdetails'
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
});
//}