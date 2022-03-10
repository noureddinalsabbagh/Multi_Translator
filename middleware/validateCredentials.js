const validator = require('validator');

// const isEmail = require('validator/lib/isEmail');
// const normalizeEmail = require('validator/lib/isEmail');

const validateCreds = (req, res, next) => {
  try {
    const { userName, email, password } = req.body;

    // check userName length
    if (userName.length < 6) {
      return res.status(403).json({ errMsg: 'Username is too short' });
    }
    // check email
    if (!validator.isEmail(email)) {
      return res.status(403).json({ errMsg: 'invalid email' });
    }
    // check password length
    if (password.length < 8) {
      return res.status(403).json({ errMsg: 'Password is too short' });
    }

    next();
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = validateCreds;
