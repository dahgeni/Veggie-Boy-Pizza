var mongoose = require("mongoose");

var ReservationSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    people: Number,
    date: String,
    time: String
  },
  { collection: "reservation" }
);

module.exports = ReservationSchema;
