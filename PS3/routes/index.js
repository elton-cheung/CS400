var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
      { title: 'Hello World!',
        message: "Welcome to Elton's first website."});
});

module.exports = router;
