const asyncHandler = require('express-async-handler');
const CartItems = require('../Models/cartItemsModel');

const getAllCartItems = asyncHandler (async (req, res) => {
    const { type } = req.user;
    if( type != 'admin' ){
        res.status(401);
        throw new Error(`authorization failed${type}`);
    }
    const cartItems = await CartItems.find();
    res.json({cartItems});
});
const getAllMyCartItems = asyncHandler (async (req, res) => {
    const { userId, type } = req.user;
    if( type != 'customer' ){
        res.status(401);
        throw new Error(`authorization failed${type}`);
    }
    const cartItems = await CartItems.find({ user: userId });
    res.json({cartItems});
});
const getSingleCartItem = asyncHandler (async (req, res)=>{
    const cartItem = await CartItems.findById(req.params.id);
    if(!cartItem) {
        res.status(400);
        throw new Error('CartItem not found');
    }
    rs.json({cartItem});
});
const addSingleCartItem = asyncHandler(async (req, res)=>{
    const { userId, type } = req.user;
    if( type != 'customer' ){
        res.status(401);
        throw new Error(`authorization failed${type}`);
    }
    const { itemKey, count } = req.body;
    if(!itemKey || !count ) {
        res.status(400);
        throw new Error('provide all fields');
    }    
    const item = await MenuItems.findOne({ key: itemKey });
    if(!item) {
        res.status(400);
        throw new Error('item not found');        
    }
    const newCartItem = await CartItems.create({ item : item._id, user: userId, count });
    res.json({newCartItem});
});
const updateSingleCartItem = asyncHandler(async (req, res)=>{
    const { userId, type } = req.user;
    if( type != 'customer' ){
        res.status(401);
        throw new Error(`authorization failed${type}`);
    }
    const updatedCartItem = await CartItems.findByIdAndUpdate(req.params.id, req.body);
    if(!updatedCartItem) {
        res.status(400);      
        throw new Error('CartItem not found');        
    } 
    res.json({updatedCartItem});
});
const deleteSingleCartItem = asyncHandler(async (req, res)=>{
    const { type } = req.user;
    if( type != 'customer' ){
        res.status(401);
        throw new Error(`authorization failed${type}`);
    }
    const deletedCartItem = await CartItems.findByIdAnddelete(req.params.id);
    if(!deletedCartItem) {
        res.status(400);      
        throw new Error('CartItem not found');        
    } 
    res.json({deletedCartItem});
});

module.exports = {
    getAllCartItems,
    getAllMyCartItems,
    getSingleCartItem,
    addSingleCartItem,
    updateSingleCartItem,
    deleteSingleCartItem
};