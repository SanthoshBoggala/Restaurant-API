const express = require('express');
const router = express.Router();

const {    
    getAllCategories,
    getSingleCategory,
    addSingleCategory,
    updateSingleCategory,
    deleteSingleCategory } = require('../Controllers/categoriesControllers');

router.route('/').get( getAllCategories );
router.route('/').post( addSingleCategory );
router.route('/:id').get( getSingleCategory );
router.route('/:id').put( updateSingleCategory );
router.route('/:id').delete( deleteSingleCategory );

module.exports = router;