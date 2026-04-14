const express = require('express');
const router = express.Router();
const { registerUser, loginuser, logoutuser, getProfile } = require('../controller/authController');
const isloggedin = require('../middleware/islogdin'); 

router.post('/register', registerUser);
router.post('/login', loginuser);
router.get('/logout', logoutuser);

router.get('/profile', isloggedin, getProfile);

module.exports = router;