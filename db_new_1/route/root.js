const express = require('express');
const router = express.Router();
const {signupUser, loginUser, fetchPaginatedUsers, getUserDetails} = require('../controller/userController')
router.post('/signup', signupUser);
router.post('/login', loginUser);
router.get('/users', fetchPaginatedUsers);
router.get('/user', getUserDetails)

module.exports = router
