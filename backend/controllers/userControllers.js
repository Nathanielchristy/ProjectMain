const asyncHandler = require("express-async-handler");
const User= require('../models/userModel');
const generaterToken = require("../util/generateToken");

const registerUser = asyncHandler(async(req,res)=>{
    const {ictid,name,email,password,pic} = req.body;

    const userExist = await User.findOne({ictid});
    if(userExist){
        res.status(400)
        throw new Error('User Already exists');
    }

    const user= await User.create({
        ictid,name,email,password,pic,
    });
    if (user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            pic:user.pic,
            token:generaterToken(user,_id),
        });
    }else{
        res.status(400)
        throw new Error("Invalid user id or password")
    }

});
const authUser = asyncHandler(async(req,res)=>{
    const {ictid,password} = req.body;

    const user = await User.findOne({ ictid });

    if(user && (await user.matchPassword(password))){
        res.json({
            ictid:user.ictid,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            pic:user.pic,
            token:generaterToken(user,ictid),
        });
    }else{
        res.status(400)
        throw new Error("Invalid user id or password")
    }

});

module.exports = {registerUser,authUser};