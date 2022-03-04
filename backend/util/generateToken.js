const jwt = require ('jsonwebtoken')

const generaterToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:"30d",
    });
};

module.exports=generaterToken;
