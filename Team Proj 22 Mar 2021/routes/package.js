// Authors:  Irshaad Sardiwalla, Srinivasan Sivalingam


var express = require("express");
var router = express.Router();
const Package = require("../models/packages");
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
const query = {};

/* GET package page. */
router.get("/", function (req, res, next) {
  Package.find(query, (err, resd) => {
    if (err) return res.send(err);
    if (resd) {
      res.render("mypackages", { data: resd });
    }
  });

});

router.post("/request", function (req, res, next) {
  res.send(req.body);
});

module.exports = router;
