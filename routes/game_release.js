var express = require('express');
var router = express.Router();

/* GET Game Release page. */
router.get('/', function(req, res, next) {
  /* Compute Timer */
  var release_date = new Date('2019,02,20');
  var today = new Date();
  var difference = Math.round((release_date - today)/(1000*60*60*24));
  var dd = release_date.getDate();
  var mm = release_date.getMonth()+1;
  var yyyy = release_date.getFullYear();
  var game_release = dd+"-"+mm+"-"+yyyy;
  res.render('game_release', { Message: difference+' days to game release',Release_date: game_release});
});

module.exports = router;
