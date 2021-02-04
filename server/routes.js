const express = require('express');
const router = express.Router();
const { getUserData, login } = require('./controllers/loginController');
const { serveApplication } = require('./controllers/appController');
const { catchErrors } = require('./handlers/errorHandlers');

router.post('/login', catchErrors(login));
router.get('/get-user-data', catchErrors(getUserData));
router.get("*", serveApplication);

module.exports = router;
