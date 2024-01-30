const asyncHandler = require('express-async-handler');
const Reports = require('../Models/reportModel');

const getAllReports = asyncHandler (async (req, res) => {
    const reports = await Reports.find();
    res.json({reports}); 
});
const getAllMyReports = asyncHandler (async (req, res) => {
    const reports = await Reports.find();
    res.json({reports}); 
});
const getSingleReport = asyncHandler (async (req, res)=>{
    const report = await Reports.findById(req.params.id);
    if(!report) {
        res.status(400);
        throw new Error('report not found');
    }
    res.json({report});
});
const addSingleReport = asyncHandler(async (req, res)=>{
    const {user, report , type} = req.body;
    if(!report || !type) {
        res.status(400);
        throw new Error('provide all fields');
    }
    const newReport = await Reports.create(req.body);
    res.json({newReport});
});
const updateSingleReport = asyncHandler(async (req, res)=>{
    res.send("put report item");
});
const deleteSingleReport = asyncHandler(async (req, res)=>{
    res.send("delete report item");
});

module.exports = {
    getAllReports,
    getAllMyReports,
    getSingleReport,
    addSingleReport,
    updateSingleReport,
    deleteSingleReport
};