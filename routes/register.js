var express = require('express');
var router = express.Router();

/* GET REgistration page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

module.exports = router;
