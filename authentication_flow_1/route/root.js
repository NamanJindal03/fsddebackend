const express = require('express');
const router = express.Router();
const {signupUser, loginUser, fetchPaginatedUsers} = require('../controller/userController')
router.post('/signup', signupUser);
router.post('/login', loginUser);
router.get('/users', fetchPaginatedUsers);

module.exports = router
