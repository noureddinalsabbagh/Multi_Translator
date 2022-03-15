const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendEmail = require('../helpers/sendEmail');

// Register Controller
exports.register = async (req, res) => {
  try {
    const { username, email, password, languages } = req.body;
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
      username,
      email: email.toLowerCase(),
      password: hashedPass,
      confirmationCode: token,
      languages: languages,
    });

    // Send verification email
    // await sendEmail(userName, email, token);
    res.status(201).json({
      msg: 'User was registered successfully! Please check your email',
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Login Controller
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

// verify user Controller
exports.verifyUser = async (req, res) => {
  try {
    // Find user with the code matching the one sent in verification mail
    const foundUser = await User.findOne({ confirmationCode: req.params.code });
    if (!foundUser) {
      return res.status(404).send({ msg: 'User Not found.' });
    }

    // update user status if code sent from from end matches the one in the document
    foundUser.status = 'active';
    foundUser.save((err) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
    });

    return res.status(200).send('you can login right now!');
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

// change account credentials

exports.changeCredentials = async (req, res) => {
  try {
    const { userName, email, password, languages } = req.body;

    const foundUser = await User.findById(req.user.id);

    if (userName) foundUser.userName = userName;

    if (email) foundUser.email = email;

    if (password) foundUser.password = password;

    if (languages) foundUser.languages = languages;

    foundUser.save();
    res.status(200).json(`changes have been saved `);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};

// logout Controller

exports.logout = (req, res) => {
  try {
    res.clearCookie('token_cookie').status(200).json({ msg: 'logged out' });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// confirm user is logged in

exports.isLoggedIn = (req, res) => {
  try {
    const token = req.cookies.token_cookie;
    if (!token) {
      return res.status(403).json({ isLoggedIn: false });
    }
    return res.status(200).json({ isLoggedIn: true });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
