const router = require('express').Router();
const {
  register,
  logIn,
  verifyUser,
  logout,
  changeCredentials,
} = require('../controllers/userControllers');
const validateCreds = require('../middleware/validateCredentials');
const isAuthenticated = require('../middleware/isAuthenticated');
const cookieValidator = require('../middleware/cookieValidator');
const validateChangeCreds = require('../middleware/validateChangeCreds');

// Register
router.post('/register', validateCreds, register);

// Login
router.post('/login', isAuthenticated, logIn);

// confirm code after mail verification
router.get('/confirm/:code', verifyUser);

// change account credentials

router.post(
  '/account',
  cookieValidator,
  validateChangeCreds,
  changeCredentials
);

//logout
router.get('/logout', logout);

module.exports = router;
