require('dotenv').config();

const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const Users = require('../Models/userModel');

const register = asyncHandler(async (req, res) => {

    const { username, password, email, type } = req.body;
    if (!username || !email || !type || !password) {
        res.status(400);
        throw new Error('provide all credentials');
    }

    const existUser = await Users.findOne({ email });
    if(existUser) {
        res.json({"msg": 'user already exists'});
        return;
    }

    let hashedPassword;
    try{
        hashedPassword = await bcrypt.hash( password, 10 );
    } catch(err) {
        res.status(400);
        throw new Error('error in hashing password');
    }

    const newUser = await Users.create({ 
        username,
        email,
        type,
        password: hashedPassword
    });

    res.json({newUser});
});
const login = asyncHandler (async (req, res)=>{

    const { email , password} = req.body;
    if(!email || !password) {
        res.status(400);
        throw new Error('provide all credentials');
    }

    const existUser = await Users.findOne({ email });
    if(!existUser) {
        res.status(400);
        throw new Error('credentials incorect');
    }

    let isPasswordCorrect;
    try {
        isPasswordCorrect = await bcrypt.compare(password, existUser.password);
    } catch(err) {
        res.status(400);
        throw new Error('error in comparing password');
    }

    if(!isPasswordCorrect) {
        res.status(400);
        throw new Error('password incorrect');
    }

    let token;
    try{
        token = await jsonwebtoken.sign({
            userId : existUser._id,
            username : existUser.username,
            type: existUser.type
            },
            process.env.SECRET_KEY,
            { expiresIn : '5h' }
         )
    } catch(err) {
        res.status(400);
        throw new Error('error in generating token');
    }
    res.header('Authorization', `bearer ${token}`);
    res.json({ token });
});
const getAllUsers = asyncHandler(async (req, res)=>{
    const { type } = req.user;
    if(type != 'admin') {
        res.status(401);
        throw new Error(`authorizartion failed(${type})`);
    }
    const users = await Users.find();
    res.json({users});
});
const getUser = asyncHandler(async (req, res)=>{
    const { userId } = req.user;

    const user = await Users.findById( userId );
    res.json({ user });
});
const updateUser = asyncHandler(async (req, res)=>{
    const { userId } = req.user;

    const { username, type } = req.body;
    const updateUser = await Users.findByIdAndUpdate( userId , {username , type});
    res.json({updateUser});    
});
const deleteUser = asyncHandler(async (req, res)=>{
    const { userId } = req.user;

    const deleteUser = await Users.findByIdAndDelete( userId );
    res.json({deleteUser});
});

module.exports = {
    register,
    login,
    getUser,
    getAllUsers,
    updateUser,
    deleteUser
};