const isEmail = require('validator/lib/isEmail');

const validateChangeCreds = (req, res, next) => {
  try {
    const { username, email, password, languages } = req.body;

    // check userName length
    if (username && username.length < 6) {
      return res.status(403).json({ errMsg: 'Username is too short' });
    }
    // check email
    if (email && !isEmail(email)) {
      return res.status(403).json({ errMsg: 'invalid email' });
    }
    // check password length
    if (password && password.length < 8) {
      return res.status(403).json({ errMsg: 'Password is too short' });
    }

    //check if at least one language is chosen
    if (languages && languages.length < 1) {
      return res
        .status(403)
        .json({ errMsg: 'At least one language is required' });
    }

    if (languages && languages.length > 5) {
      return res
        .status(403)
        .json({ errMsg: 'You can only choose five languages' });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

module.exports = validateChangeCreds;
