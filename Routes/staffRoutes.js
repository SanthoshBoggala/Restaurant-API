const express = require('express');
const router = express.Router();

const {    
    getAllStaff,
    getSingleStaff,
    addSingleStaff,
    updateSingleStaff,
    deleteSingleStaff } = require('../Controllers/staffControllers');

router.route('/').get( getAllStaff );
router.route('/').post( addSingleStaff );
router.route('/:id').get( getSingleStaff );
router.route('/:id').put( updateSingleStaff );
router.route('/:id').delete( deleteSingleStaff );

module.exports = router;