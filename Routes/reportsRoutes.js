const express = require('express');
const router = express.Router();

const {    
    getAllReports,
    getAllMyReports,
    getSingleReport,
    addSingleReport,
    updateSingleReport,
    deleteSingleReport } = require('../Controllers/reportControllers');

router.route('/').get( getAllReports );
router.route('/user').get( getAllMyReports );
router.route('/').post( addSingleReport );
router.route('/:id').get( getSingleReport );
router.route('/:id').put( updateSingleReport );
router.route('/:id').delete( deleteSingleReport );

module.exports = router;