const express = require("express");
const { createEvent, getEvent } = require("../controllers/CalenderController");

const router = express.Router();

router.route("/create-event").post(createEvent);
router.route("/get-events").get(getEvent);

module.exports = router;
