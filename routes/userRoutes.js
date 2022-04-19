const router = require('express').Router();
const {
  register,
  logIn,
  verifyUser,
  logout,
  changeCredentials,
  isLoggedIn,
  sendUserCreds,
} = require('../controllers/userControllers');
const validateCreds = require('../middleware/validateCredentials');
const isAuthenticated = require('../middleware/isAuthenticated');
const cookieValidator = require('../middleware/cookieValidator');
const validateChangeCreds = require('../middleware/validateChangeCreds');
const { tryForErrors } = require('../middleware/errorHandler');

// Register
router.post('/register', validateCreds, tryForErrors(register));

// Login
router.post('/login', isAuthenticated, tryForErrors(logIn));

// confirm code after mail verification
router.get('/confirm/:code', tryForErrors(verifyUser));

// send user creds for settings page
router.get('/userCreds', cookieValidator, tryForErrors(sendUserCreds));

// change account credentials
router.post(
  '/account',
  cookieValidator,
  validateChangeCreds,
  tryForErrors(changeCredentials)
);

//logout
router.get('/logout', tryForErrors(logout));

// confirm is logged in
router.get('/isloggedin', tryForErrors(isLoggedIn));

module.exports = router;
