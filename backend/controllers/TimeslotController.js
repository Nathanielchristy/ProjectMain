const Timeslot = require("../models/timeslot");
const moment = require("moment");
const asyncHandler = require("express-async-handler");

const createTimeslot = asyncHandler(async (req, res) => {
  const { hall, start, end, slot } = Timeslot(req.body);
  const timeslotexist = await Timeslot.findOne({ hall, start, end, slot });
  if (timeslotexist) {
    res.status(400);
    throw Error("Timeslot already exists");
  }

  const timeslot = await Timeslot.create({
    hall,
    start,
    end,
    slot,
  });
  timeslot.save();
  if(timeslot){
      console.log(timeslot)
      res.status(201).json({
          _id:timeslot.id,
          hall:timeslot.hall,
          start:timeslot.start,
          end:timeslot.end,
          slot:timeslot.slot,
      });
  }else{
      res.status(400);
      throw new Error("Invalid Timeslot");
  }
});

const fetchTimeslot = asyncHandler(async(req,res)=>{
    const {hall} =req.body.hall;

});

module.exports = { createTimeslot };
