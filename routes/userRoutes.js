const router = require('express').Router();
const { register, logIn } = require('../controllers/userControllers');

router.post('/register', register);

router.post('/login', logIn);

module.exports = router;
