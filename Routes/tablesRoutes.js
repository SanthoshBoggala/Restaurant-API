const express = require('express');
const router = express.Router();

const {    
    getAllTables,
    getSingleTable,
    getAllReservedTables,
    getAllAvailableTables,
    addSingleTable,
    updateSingleTable,
    deleteSingleTable } = require('../Controllers/tableControllers');

router.route('/').get( getAllTables );
router.route('/').post( addSingleTable );
router.route('/reserved').get( getAllReservedTables );
router.route('/available').get( getAllAvailableTables );
router.route('/:id').get( getSingleTable );
router.route('/:id').put( updateSingleTable );
router.route('/:id').delete( deleteSingleTable );

module.exports = router;