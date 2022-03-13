const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generaterToken = require("../util/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { ictid, name, email, password, pic } = req.body;

  const userExist = await User.findOne({ ictid,email });
  if (userExist) {
    res.status(400);
    throw new Error("User Already exists");
  }

  const user = await User.create({
    ictid,
    name,
    email,
    password,
    pic,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generaterToken(user, _id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user id or password");
  }
});
const authUser = asyncHandler(async (req, res) => {
  const { ictid, password } = req.body;

  const user = await User.findOne({ ictid });

  if (user && (await user.matchPassword(password))) {
    res.json({
      ictid: user.ictid,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generaterToken(user, ictid),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user id or password");
  }
});

const getUser = asyncHandler(async (req, res) => {
    User.find({isAdmin:false}, function (err, docs) {
      if (err) res.json(err);
      else res.json({ users: docs });
    });
});

const deleteUser = asyncHandler(async (req, res) => {
  const { isAdmin,  ictid } = req.body;
  const user = await User.find({ictid});
  console.log(ictid)
  console.log(user)

  if (!isAdmin) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (user) {
    console.log(user)
    await User.deleteOne({ictid});
    res.json({ message: "User Removed" });
  } else {
    res.status(404);
    throw new Error("User not Found");
  }
});

module.exports = { registerUser, authUser, getUser ,deleteUser };
