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

const userSchema = new mongoose.Schema({
       useremail: {
        type: String,
        trim: true,
        validate: {
            validator: function(v) {
                return /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(v);
              },
              message: props => 
            `${props.value} is not a valid Email address.`
            },
        unique:'The e-mail must be unique.',
        lowercase: true         
     },
     userpassword: {
        type: String,
        required: 'Please enter a password',
        trim: true,
        validate: {
            validator: function(v) {
                return /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{6,}$/.test(v);
              },
              message: props => 
               `Password should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 6 characters.`
            }            
     },
     fname: {
        type: String,
        required: 'First name is required',
        trim: true
     },
     lname: {
        type: String,
        trim: true
     },
    
     address1: {
        type: String,
        trim: true
     },
     address2: {
        type: String,
        trim: true
     },
     usercity: {
        type: String,
        trim: true
     },
     userprovince: {
        type: String,
        trim: true
     },
     userpostal: {
        type: String,
        trim: true
     },
     userphone: {
        type: String,
        trim: true
     }
   
      
    });

userSchema.plugin(uniqueValidator);
// Create a model User using the userSchema
module.exports.User = mongoose.model('User', userSchema);     
 