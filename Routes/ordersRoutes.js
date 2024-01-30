const express = require('express');
const router = express.Router();

const {    
    getAllOrders,
    getAllMyOrders,
    getSingleOrder,
    addSingleOrder,
    updateSingleOrder,
    deleteSingleOrder } = require('../Controllers/orderControllers');

router.route('/').get( getAllOrders );
router.route('/user').get( getAllMyOrders );
router.route('/').post( addSingleOrder );
router.route('/:id').get( getSingleOrder );
router.route('/:id').put( updateSingleOrder );
router.route('/:id').delete( deleteSingleOrder );

module.exports = router;