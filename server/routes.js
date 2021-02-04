const express = require('express');
const router = express.Router();
const { getUserData, login, logout, authenticateUser } = require('./controllers/loginController');
const { serveApplication } = require('./controllers/appController');
const { catchErrors } = require('./handlers/errorHandlers');

router.get('/login', login);
router.post('/login', catchErrors(authenticateUser));
router.get('/logout', logout);
router.get('/get-user-data', catchErrors(getUserData));
router.get("*", serveApplication);

module.exports = router;
