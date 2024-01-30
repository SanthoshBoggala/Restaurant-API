const asyncHandler = require('express-async-handler');

const getAllTables = asyncHandler (async (req, res) => {
    res.send("get all Table items");
});
const getAllReservedTables = asyncHandler (async (req, res) => {
    res.send("get all Reserved Table items");
});
const getAllAvailableTables = asyncHandler (async (req, res) => {
    res.send("get all Available Table items");
});
const getSingleTable = asyncHandler (async (req, res)=>{
    res.send("get Table item");
});
const addSingleTable = asyncHandler(async (req, res)=>{
    res.send("post Table item");
});
const updateSingleTable = asyncHandler(async (req, res)=>{
    res.send("put Table item");
});
const deleteSingleTable = asyncHandler(async (req, res)=>{
    res.send("delete Table item");
});

module.exports = {
    getAllTables,
    getAllReservedTables,
    getAllAvailableTables,
    getSingleTable,
    addSingleTable,
    updateSingleTable,
    deleteSingleTable
};