const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const Rate = require('../rate-model');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('form');
});

router.post('/', (req, res, next) => {
    const queryDate = req.body.date;
    console.log("querydate", queryDate);
    Rate.findOne({date: queryDate}).then((item) => {
        if (item) { // get from database
            console.log('rate is ', item);
            item.found = "database";
            res.render('form', item);
        } else { // if not, create rate in db
            fetch(`https://api.exchangeratesapi.io/${queryDate}?base=USD&symbols=EUR,GBP,CAD,CNY,JPY`)
                .then(res => res.json())
                .then(json => {
                    json.date = queryDate;
                    new Rate(json).save()
                        .then((newRate) => {
                            console.log('new rate stored: ' + newRate);
                            newRate.found = "API";
                            res.render('form', newRate);
                        })
                });
        }
    })});


module.exports = router;
