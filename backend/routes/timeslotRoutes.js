const express = require("express");
const { createTimeslot } = require("../controllers/TimeslotController");

const router = express.Router();

router.route("/create-timeslot").post(createTimeslot);

module.exports = router;
