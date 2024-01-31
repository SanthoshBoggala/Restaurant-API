const asyncHandler = require('express-async-handler');
const Orders = require('../Models/orderModel');
const MenuItems = require('../Models/menuItemModel');

const getAllOrders = asyncHandler (async (req, res) => {
    const { type } = req.user;
    if( type != 'admin' ){
        res.status(401);
        throw new Error(`authorization failed${type}`);
    }
    const orders = await Orders.find();
    res.json({orders});
});
const getAllMyOrders = asyncHandler (async (req, res) => {
    const { userId, type } = req.user;
    if( type != 'customer' ){
        res.status(401);
        throw new Error(`authorization failed${type}`);
    }

    const orders = await Orders.find({ user: userId });
    res.json({orders});
});
const getSingleOrder = asyncHandler (async (req, res)=>{
    const order = await Orders.findById(req.params.id);
    if(!order) {
        res.status(400);
        throw new Error('order not found');
    }
    res.json({order});
});
const addSingleOrder = asyncHandler(async (req, res)=>{
    const { itemKey, count, price } = req.body;
    const { userId, type } = req.user;
    if( type != 'customer' ){
        res.status(401);
        throw new Error(`authorization failed${type}`);
    }    
    if(!itemKey || !count || !price) {
        res.status(400);
        throw new Error('provide all requirments');
    }
    const item = await MenuItems.findOne({ key: itemKey });
    if(!item) {
        res.status(400);
        throw new Error('item not found'); 
    }
    const newOrder = await Orders.create({ item : item._id, count, price });
    rs.json({newOrder});
});
const updateSingleOrder = asyncHandler(async (req, res)=>{
    const { type } = req.user;
    if( type != 'admin' ){
        res.status(401);
        throw new Error(`authorization failed${type}`);
    }
    const updatedOrder = await Orders.findByIdAndUpdate(req.params.id, { status: req.body.status });
    if(!updatedOrder) {
        res.status(400);
        throw new Error('order not found'); 
    }
    res.json({updatedOrder});
});
const deleteSingleOrder = asyncHandler(async (req, res)=>{
    const { type } = req.user;
    if( type != 'admin' ){
        res.status(401);
        throw new Error(`authorization failed${type}`);
    }
    const deletedOrder = await Orders.findByIdAndDelete(req.params.id);
    if(!deletedOrder) {
        res.status(400);
        throw new Error('order not found'); 
    }
    res.json({deletedOrder});
});

module.exports = {
    getAllOrders,
    getAllMyOrders,
    getSingleOrder,
    addSingleOrder,
    updateSingleOrder,
    deleteSingleOrder
};