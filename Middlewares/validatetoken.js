require('dotenv').config();
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validatetoken = asyncHandler(async (req, res, next)=>{
    const token = req.headers.Authorization || req.headers.authorization;
    if(!token) {
        res.status(401);
        throw new Error('invalid error');
    }
    const jwttoken = token.split(' ')[1];
    if(!jwttoken) {
        res.status(401);
        throw new Error('authorization error');
    } 
    const decoded = await jwt.decode( jwttoken, process.env.SECRET_KEY );
    req.user = decoded.user;
    next();
})

module.exports = validatetoken;