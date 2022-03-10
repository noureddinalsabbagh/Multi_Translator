const router = require('express').Router();
const { register, logIn, verifyUser } = require('../controllers/userControllers');

router.post('/register', register);

router.post('/login', logIn);

router.get("/confirm/:code", verifyUser)

module.exports = router;
