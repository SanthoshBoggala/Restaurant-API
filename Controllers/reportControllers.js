const asyncHandler = require('express-async-handler');
const Reports = require('../Models/reportModel');

const getAllReports = asyncHandler (async (req, res) => {
    const { type } = req.user;
    if( type != 'admin' ){
        res.status(401);
        throw new Error(`authorization failed${type}`);
    }
    const reports = await Reports.find();
    res.json({reports}); 
});
const getAllMyReports = asyncHandler (async (req, res) => {
    const { userId, type } = req.user;
    if( type != 'customer' ){
        res.status(401);
        throw new Error(`authorization failed${type}`);
    }
    const reports = await Reports.find({ user: userId });
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
    const { userId, type } = req.user;
    if( type != 'customer' ){
        res.status(401);
        throw new Error(`authorization failed${type}`);
    }
    const { report , reportType} = req.body;
    if(!report || !reportType) {
        res.status(400);
        throw new Error('provide all fields');
    }
    const newReport = await Reports.create({ user: userId, type: reportType ,report});
    res.json({newReport});
});
const updateSingleReport = asyncHandler(async (req, res)=>{
    const { userId, type } = req.user;
    if( type != 'customer' ){
        res.status(401);
        throw new Error(`authorization failed${type}`);
    }
    const updatedReport = await Reports.findByIdAndUpdate( req.params.id, req.body );
    if(!updatedReport) {
        res.status(400);      
        throw new Error('report not found');        
    } 
    res.json({updatedReport});
});
const deleteSingleReport = asyncHandler(async (req, res)=>{
    const { userId, type } = req.user;
    if( type != 'admin' ){
        res.status(401);
        throw new Error(`authorization failed${type}`);
    }
    const deletedReport = await Reports.findByIdAndDelete( req.params.id );
    if(!deletedReport) {
        res.status(400);      
        throw new Error('report not found');        
    } 
    res.json({deletedReport});
});

module.exports = {
    getAllReports,
    getAllMyReports,
    getSingleReport,
    addSingleReport,
    updateSingleReport,
    deleteSingleReport
};