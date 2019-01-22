var mongoose = require('mongoose');

var ReservationSchema = mongoose.Schema({

    title: {type: String, default: ''},
    description: {type: String, Boulean},
}, 
);


module.exports = ReservationSchema;