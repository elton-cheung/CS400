const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rateSchema = new Schema({
    rates: {
        CAD: Number,
        EUR: Number,
        CNY: Number,
        JPY: Number,
        GBP: Number
    },
    base: String,
    date: String,
    found: String,
    _locals: {}
});

const Rate = mongoose.model("rate", rateSchema);
module.exports = Rate;
