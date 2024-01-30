const express = require('express');
const router = express.Router();

const {    
    getAllMenu,
    getSingleMenuItem,
    addSingleMenuItem,
    updateSingleMenuItem,
    deleteSingleMenuItem } = require('../Controllers/menuItemControllers');

router.route('/').get( getAllMenu );
router.route('/').post( addSingleMenuItem );
router.route('/:id').get( getSingleMenuItem );
router.route('/:id').put( updateSingleMenuItem );
router.route('/:id').delete( deleteSingleMenuItem );

module.exports = router;