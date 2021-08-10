const express = require('express');
const router = express.Router();

const pwdValidator = require('../middleware/password-validator');
const userCtrl = require('../controllers/user');

router.post('/signup', pwdValidator, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;