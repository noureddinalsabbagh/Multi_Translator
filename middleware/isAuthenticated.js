const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const isAuthenticated = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // check if the user exists
    const foundUser = await User.findOne({ email: email }).lean();
    if (!foundUser) {
      return res
        .status(404)
        .json({ errMsg: 'User not found, please register!' });
    }
    // compare the passwords
    const passwordIsValid = await bcrypt.compare(password, foundUser.password);
    if (!passwordIsValid) {
      return res.status(403).json({ errMsg: 'invalid password!' });
    }
    // check if user is verified

    if (foundUser.status === 'pending') {
      return res.status(403).json({
        errMsg: 'user is not verified, please check your Email',
      });
    }

    req.user = foundUser;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = isAuthenticated;
