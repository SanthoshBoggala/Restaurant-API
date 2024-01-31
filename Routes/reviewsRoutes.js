const express = require('express');
const router = express.Router();

const {    
    getAllReviews,
    getAllMyReviews,
    getSingleReview,
    addSingleReview,
    updateSingleReview,
    deleteSingleReview } = require('../Controllers/reviewControllers');

const validatetoken = require('../Middlewares/validatetoken');

router.route('/').get(validatetoken, getAllReviews );
router.route('/user').get(validatetoken, getAllMyReviews );
router.route('/').post(validatetoken, addSingleReview );
router.route('/:id').get(validatetoken, getSingleReview );
router.route('/:id').put(validatetoken, updateSingleReview );
router.route('/:id').delete(validatetoken, deleteSingleReview );

module.exports = router;