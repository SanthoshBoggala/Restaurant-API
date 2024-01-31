const express = require('express');
const router = express.Router();

const {    
    getAllCartItems,
    getAllMyCartItems,
    getSingleCartItem,
    addSingleCartItem,
    updateSingleCartItem,
    deleteSingleCartItem } = require('../Controllers/cartControllers');

const validatetoken = require('../Middlewares/validatetoken');

router.route('/').get(validatetoken, getAllCartItems );
router.route('/user').get(validatetoken, getAllMyCartItems );
router.route('/').post(validatetoken, addSingleCartItem );
router.route('/:id').get(validatetoken, getSingleCartItem );
router.route('/:id').put(validatetoken, updateSingleCartItem );
router.route('/:id').delete(validatetoken, deleteSingleCartItem );

module.exports = router;