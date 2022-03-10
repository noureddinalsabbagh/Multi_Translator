const User = require('../models/userModel');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    // check if the user exists
    const foundUser = await User.findOne({ email: email }).lean();
    if (foundUser)
      return res.status(403).json({ errMsg: 'email is already in use' });
    // hash Password
    const hashedPass = await bcrypt.hash(password, 10);
    // create a new token
    const token = jwt.sign({ email }, process.env.COOKIE_SECRET);
    // create a new user
    const newUser = await User.create({
      userName,
      email: email.toLowerCase(),
      password: hashedPass,
      confirmationCode: token,
    });

    res.status(201).json({ msg: 'registered successfully', newUser });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.logIn = async (req, res) => {
  try {
    // send a token with cookies
    const payload = { id: req.user._id, email: req.user.email };
    const token = jwt.sign(payload, process.env.COOKIE_SECRET, {
      expiresIn: '1h',
    });
    res
      .status(200)
      .cookie('token_cookie', token, { httpOnly: true, secure: false })
      .json({ msg: 'you successfully logged in!' });
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};
