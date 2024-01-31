const express = require('express');
const router = express.Router();

const {    
    getAllOrders,
    getAllMyOrders,
    getSingleOrder,
    addSingleOrder,
    updateSingleOrder,
    deleteSingleOrder } = require('../Controllers/orderControllers');

const validatetoken = require('../Middlewares/validatetoken');

router.route('/').get(validatetoken, getAllOrders );
router.route('/user').get(validatetoken, getAllMyOrders );
router.route('/').post(validatetoken, addSingleOrder );
router.route('/:id').get(validatetoken, getSingleOrder );
router.route('/:id').put(validatetoken, updateSingleOrder );
router.route('/:id').delete(validatetoken, deleteSingleOrder );

module.exports = router;