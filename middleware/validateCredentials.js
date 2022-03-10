const validator = require('validator');

// const isEmail = require('validator/lib/isEmail');
// const normalizeEmail = require('validator/lib/isEmail');

const validateCreds = (req, res, next) => {
  try {
    const { userName, email, password, languages } = req.body;

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

    //check if at least one language is chosen
    if (languages.length < 1) {
      return res
        .status(403)
        .json({ errMsg: 'At least one language is required' });
    }

    if (languages.length > 5) {
      return res
        .status(403)
        .json({ errMsg: 'You can only choose five languages' });
    }

    next();
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = validateCreds;
