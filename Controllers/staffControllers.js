const asyncHandler = require('express-async-handler');

const getAllStaff = asyncHandler (async (req, res) => {
    res.send("get all Staff items");
});
const getSingleStaff = asyncHandler (async (req, res)=>{
    res.send("get Staff item");
});
const addSingleStaff = asyncHandler(async (req, res)=>{
    res.send("post Staff item");
});
const updateSingleStaff = asyncHandler(async (req, res)=>{
    res.send("put Staff item");
});
const deleteSingleStaff = asyncHandler(async (req, res)=>{
    res.send("delete Staff item");
});

module.exports = {
    getAllStaff,
    getSingleStaff,
    addSingleStaff,
    updateSingleStaff,
    deleteSingleStaff
};