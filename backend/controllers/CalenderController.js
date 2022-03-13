const Event = require("../models/events");
const moment = require("moment");
const asyncHandler = require("express-async-handler");

const createEvent = asyncHandler(async (req, res) => {
  const event = Event(req.body);
  await event.save();
  res.sendStatus(201);
});
const getEvent = asyncHandler(async (req, res) => {
  const events = await Event.find({
    start: { $gte: moment(req.query.start).toDate() },
    end: { $gte: moment(req.query.end).toDate() },
  });
  res.send(events);
});

module.exports = { createEvent, getEvent };
