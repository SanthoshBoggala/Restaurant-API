const asyncHandler = require('express-async-handler');
const Orders = require('../Models/orderModel');
const MenuItems = require('../Models/menuItemModel');

const getAllOrders = asyncHandler (async (req, res) => {
    const orders = await Orders.find();
    res.json({orders});
});
const getAllMyOrders = asyncHandler (async (req, res) => {
    const orders = await Orders.find();
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
    const { itemId, count, price } = req.body;
    if(!itemId || !count || !price) {
        res.status(400);
        throw new Error('provide all requirments');
    }
    const item = await MenuItems.findById(itemId);
    if(!item) {
        res.status(400);
        throw new Error('item not found'); 
    }
    const newOrder = await Orders.create({ item : itemId, count, price });
    rs.json({newOrder});
});
const updateSingleOrder = asyncHandler(async (req, res)=>{
    const {id} = req.params;
    const updatedOrder = await Orders.findByIdAndUpdate(id, req.body);
    if(!updatedOrder) {
        res.status(400);
        throw new Error('order not found'); 
    }
    res.json({updatedOrder});
});
const deleteSingleOrder = asyncHandler(async (req, res)=>{
    const {id} = req.params;
    const deletedOrder = await Orders.findByIdAndDelete(id);
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