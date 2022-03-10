const router = require('express').Router();
const {
  register,
  logIn,
  verifyUser,
  addLanguages,
} = require('../controllers/userControllers');
const validateCreds = require('../middleware/validateCredentials');
const isAuthenticated = require('../middleware/isAuthenticated');

// Register
router.post('/register', validateCreds, register);

// Login
router.post('/login', isAuthenticated, logIn);

// confirm code after mail verification
router.get('/confirm/:code', verifyUser);

module.exports = router;
