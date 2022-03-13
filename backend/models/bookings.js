const mongoose = require("mongoose");

const BookingSchema = mongoose.Schema({
  ictid: {
    type: String,
    required: true,
    unique: true,
  },
  hall: {
    type: String,
    required: true,
    unique: true,
  },
  event: {
    start: Date,
    end: Date,
    title: String,
  },
});

const Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;
