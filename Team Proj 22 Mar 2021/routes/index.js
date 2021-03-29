// Authors: Shefqet Zyko
// Grp1 Team 2
// Date: 24 Mar 2021


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pug_index');
});

module.exports = router;
