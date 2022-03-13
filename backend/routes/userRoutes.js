const express = require('express');
const { registerUser, authUser,getUser,deleteUser } = require('../controllers/userControllers');

const router = express.Router()

router.route('/').post(registerUser)
router.route('/login').post(authUser)
router.route('/userdata').post(getUser)
router.route('/delete').post(deleteUser)

module.exports = router;