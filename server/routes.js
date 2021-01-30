const express = require('express');
const router = express.Router();
const { getUserData } = require('./controllers/loginController');
const { serveApplication } = require('./controllers/appController');
const { catchErrors } = require('./handlers/errorHandlers');

router.get('/get-user-data', catchErrors(getUserData));
router.get("*", serveApplication);

module.exports = router;
