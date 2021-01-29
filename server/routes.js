const express = require('express');
const router = express.Router();
const { getUserData } = require('./controllers/loginController');
const { catchErrors } = require('./handlers/errorHandlers');

router.get('/get-user-data', catchErrors(getUserData));

module.exports = router;
