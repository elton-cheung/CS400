var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('ps3_get',
        {string: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A erat nam at lectus urna duis. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Scelerisque in dictum non consectetur a erat. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Quis enim lobortis scelerisque fermentum dui faucibus. Nisl rhoncus mattis rhoncus urna neque. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Arcu non sodales neque sodales ut etiam sit. Non diam phasellus vestibulum lorem sed risus. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Aenean euismod elementum nisi quis eleifend. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Fermentum posuere urna nec tincidunt praesent semper.'})
});

router.post('/', function (req, res, next) {
    const object = {
      string: req.body.string,
      length: req.body.string.length
    };
    // render makes Postman return HTML instead of JSON?
    // res.json(object);
    res.render('ps3_post', object)});


module.exports = router;
