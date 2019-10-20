const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

/* GET ps4 listing. */
router.get('/', async function(req, res, next) {
    const weather = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=0731f3195c156e62e35cd545e2a1cea5&units=imperial');
    const weatherJson = await weather.json();

    console.log(weatherJson);
    res.render('ps4',
      {title:'Here is the current weather in Boston!',
       longitude: weatherJson.coord.lon,
       latitude: weatherJson.coord.lat,
       temperature: weatherJson.main.temp
       });
});

module.exports = router;
