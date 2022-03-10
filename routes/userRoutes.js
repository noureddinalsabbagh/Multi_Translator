const router = require('express').Router();
const { register, logIn } = require('../controllers/userControllers');
const validateCreds = require('../middleware/validateCredentials');
const isAuthenticated = require('../middleware/isAuthenticated');

router.post('/register', validateCreds, register);

router.post('/login', isAuthenticated, logIn);

module.exports = router;
