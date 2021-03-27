// getting-started.js
const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");
mongoose.connect('mongodb+srv://irshaad:%23myfirstDB@cluster0.dmjv8.mongodb.net/myclouddb', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  // we're connected!
  


// Create a model Posts using the userSchema

});

const bookingSchema = new mongoose.Schema(
   {
   BookingId: {
     type: Number,
     
     trim: true,
  },
   BookingDate: {
     type: String,
     trim: true
  },
   BookingNo: {
     type: String,
     trim: true
  },

  BookingCost:{
    type: Number,
    trim:true
  },
 
   TravelerCount: {
     type: Number,
     trim: true
  },
   CustomerId: {
     type: Number,
   
     trim: true
  },
  TripTypeId:{
   type: String,
   trim: true
  },
  PackageId: {
   type: Number,
   trim: true
},
userid: {
  type: String,
  trim: true,
  unique: "The username must be unique.",
}
 });

bookingSchema.plugin(uniqueValidator);
// Create a model User using the userSchema
module.exports.Booking = mongoose.model('Booking', bookingSchema);     
 