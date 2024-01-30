const express = require('express');
const router = express.Router();

const {    
    getAllReservations,
    getAllMyReservations,
    getSingleReservation,
    updateSingleReservation,
    deleteSingleReservation } = require('../Controllers/reservationControllers');

router.route('/').get( getAllReservations );
router.route('/user').get( getAllMyReservations );
router.route('/:id').get( getSingleReservation );
router.route('/:id').put( updateSingleReservation );
router.route('/:id').delete( deleteSingleReservation );

module.exports = router;