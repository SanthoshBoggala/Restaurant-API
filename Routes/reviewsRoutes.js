const express = require('express');
const router = express.Router();

const {    
    getAllReviews,
    getAllMyReviews,
    getSingleReview,
    addSingleReview,
    updateSingleReview,
    deleteSingleReview } = require('../Controllers/reviewControllers');

router.route('/').get( getAllReviews );
router.route('/user').get( getAllMyReviews );
router.route('/').post( addSingleReview );
router.route('/:id').get( getSingleReview );
router.route('/:id').put( updateSingleReview );
router.route('/:id').delete( deleteSingleReview );

module.exports = router;