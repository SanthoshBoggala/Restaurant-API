const asyncHandler = require('express-async-handler');

const getAllReservations = asyncHandler (async (req, res) => {
    res.send("get all reservation items");
});
const getAllMyReservations = asyncHandler (async (req, res) => {
    res.send("get all reservation items");
});
const getSingleReservation = asyncHandler (async (req, res)=>{
    res.send("get reservation item");
});
const updateSingleReservation = asyncHandler(async (req, res)=>{
    res.send("put reservation item");
});
const deleteSingleReservation = asyncHandler(async (req, res)=>{
    res.send("delete reservation item");
});

module.exports = {
    getAllReservations,
    getAllMyReservations,
    getSingleReservation,
    updateSingleReservation,
    deleteSingleReservation
};