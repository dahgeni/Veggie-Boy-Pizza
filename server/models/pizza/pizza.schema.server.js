var mongoose = require('mongoose');

var PizzaSchema = mongoose.Schema({

    title: {type: String, default: ''},
    description: {type: String},
    topping: [{type: String}],
    price: {type: Number},
}, {collection: 'pizza'});

module.exports = PizzaSchema;