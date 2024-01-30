const express = require('express');
const router = express.Router();

const {    
    login,
    register,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser } = require('../Controllers/userControllers');
    
const validatetoken = require('../Middlewares/validatetoken');

router.route('/register').post( register);
router.route('/login').post( login );
router.route('/all_users').get( validatetoken, getAllUsers );
router.route('/user').get( validatetoken , getUser );
router.route('/user').put( validatetoken ,  updateUser );
router.route('/user').delete( validatetoken , deleteUser );

module.exports = router;