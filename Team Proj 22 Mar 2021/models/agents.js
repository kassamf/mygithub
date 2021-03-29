// Authors: Farid Kassam, Srinivasan Sivalingam

const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");
  

// Create a model Posts using the userSchema

const agentSchema = new mongoose.Schema(
   {
  _Id: {
     type: Number,
     trim: true,
    },
  AgentId: {
     type: Number,
     trim: true,
  },
  AgtFirstName: {
     type: String,
     trim: true
  },
//   AgtMiddleInitial: {
//     type: String,
//     trim: true
//  },
  AgtLastName: {
     type: String,
     trim: true
  },
  AgtBusPhone: {
     type: String,
     trim: true
  },
  AgtEmail: {
     type: String,
     trim: true
  },
//   AgtPosition:{
//    type: String,
//    trim: true
//   },
 });

agentSchema.plugin(uniqueValidator);
// Create a model User using the userSchema
module.exports = mongoose.model('Agent', agentSchema);    