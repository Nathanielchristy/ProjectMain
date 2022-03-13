const mongoose = require('mongoose');

const EventSchema= mongoose.Schema({
    start:Date,
    end:Date,
    title:String,
    Hall:String
});

const Event = mongoose.model("Event",EventSchema);

module.exports = Event;