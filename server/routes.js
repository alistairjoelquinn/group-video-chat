const express = require('express');
const router = express.Router();
const { loadLoginPage } = require('./controllers/loginController');

router.get('/', loadLoginPage);

module.exports = router;
