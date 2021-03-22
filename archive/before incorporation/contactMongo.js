//This is for the agencies - get data from database getContact part//

// getting-started.js
const mongo = require('mongodb').MongoClient;
module.exports.insertContacts=(data,callback)=>{mongo.connect("mongodb://localhost:27017/mydb", 
{useNewUrlParser: true, useUnifiedTopology: true},
  (err, db) => {
   if (err) callback(err); // send the error to the callback function
   var dbo = db.db("mydb");

   dbo.collection("agencies").insertMany(data, (err, resd)=>{
   if (err) callback(err); // send the error to the callback function
   console.log("Number of documents inserted: " + resd.insertedCount);
   db.close();
   // Send update information to the callback funcation
   callback(null, "Number of documents inserted: " + resd.insertedCount);
   });
});     

}

module.exports.getContacts = (query,callback)=>{mongo.connect("mongodb://localhost:27017/mydb", 
{useNewUrlParser: true, useUnifiedTopology: true},
       (err, db) => {
       if (err) callback(err.errmsg); // send the error to the callback function
       var dbo = db.db("mydb");
       dbo.collection("agencies").find(query).toArray(function(err, result) {
         if (err) callback(err.errmsg); // send the error to the callback function
         db.close();
         callback(null, result);
       });
     });
}

//This is for the agents - get data from database getAgents part//
module.exports.getAgents = (query,callback)=>{mongo.connect("mongodb://localhost:27017/mydb", 
{useNewUrlParser: true, useUnifiedTopology: true},
       (err, db) => {
       if (err) callback(err.errmsg); // send the error to the callback function
       var dbo = db.db("mydb");
       dbo.collection("agents").find(query).toArray(function(err, result) {
         if (err) callback(err.errmsg); // send the error to the callback function
         db.close();
         callback(null, result);
       });
     });
}