const mongoose = require('mongoose');
var Schema = mongoose.Schema

var sellingSchema = new Schema({
    owner     : String,
    address   : String,
    image     : String,
    price     : String,
    phone     : String,
    location  : String,
});

var House = mongoose.model('House', sellingSchema);

module.exports = House;