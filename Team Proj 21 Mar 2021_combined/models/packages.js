// getting-started.js
const mongo = require('mongodb').MongoClient;
module.exports.insertPackages=(data,callback)=>{mongo.connect('mongodb+srv://irshaad:%23myfirstDB@cluster0.dmjv8.mongodb.net/myclouddb', {useNewUrlParser: true, useUnifiedTopology: true},
  (err, db) => {
   if (err) callback(err); // send the error to the callback function
   var dbo = db.db("myclouddb");

   dbo.collection("packages").insertMany(data, (err, resd)=>{
   if (err) callback(err); // send the error to the callback function
   console.log("Number of documents inserted: " + resd.insertedCount);
   db.close();
   // Send update information to the callback funcation
   callback(null, "Number of documents inserted: " + resd.insertedCount);
   });
});     

}

module.exports.getPackages = (query,callback)=>{mongo.connect('mongodb+srv://irshaad:%23myfirstDB@cluster0.dmjv8.mongodb.net/myclouddb', {useNewUrlParser: true, useUnifiedTopology: true},
       (err, db) => {
       if (err) callback(err.errmsg); // send the error to the callback function
       var dbo = db.db("myclouddb");
       dbo.collection("packages").find(query).toArray(function(err, result) {
         if (err) callback(err.errmsg); // send the error to the callback function
         db.close();
         callback(null, result);
       });
     });
}





// (err, client) => {
//     const db = client.db("myclouddb");     
//     const mypackages = db.collection("packages");
//     mypackages.find().toArray((err, dbpackages) => {
//        return dbpackages;
//       });
//   }




