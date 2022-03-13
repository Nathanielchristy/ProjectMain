const mongoose = require("mongoose");

const TimeslotSchema = mongoose.Schema({
  hall: String,
  start: Date,
  end: Date,
  slot:Number,
});

const Timeslot = mongoose.model("Timeslot", TimeslotSchema);

module.exports = Timeslot;
