const router = require('express').Router();
const { register, logIn, verifyUser } = require('../controllers/userControllers');
const validateCreds = require('../middleware/validateCredentials');
const isAuthenticated = require('../middleware/isAuthenticated');


router.post('/register', validateCreds, register);

router.post('/login', isAuthenticated, logIn);

router.get("/confirm/:code", verifyUser)

module.exports = router;
