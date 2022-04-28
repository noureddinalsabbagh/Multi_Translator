const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendEmail = require('../helpers/sendEmail');

// Register Controller
exports.register = async (req, res) => {

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
  await sendEmail(username, email, token);
  res.status(201).json({
    msg: 'User was registered successfully! Please check your email',
  });

};

// Login Controller
exports.logIn = async (req, res) => {

  // send a token with cookies
  const payload = { id: req.user._id, email: req.user.email };
  const token = jwt.sign(payload, process.env.COOKIE_SECRET, {
    expiresIn: '5h',
  });

  res
    .status(200)
    .cookie('token_cookie', token, { httpOnly: true, secure: true, sameSite: "none" })
    .json({ msg: 'you successfully logged in!' });

};

// verify user Controller
exports.verifyUser = async (req, res) => {

  // Find user with the code matching the one sent in verification mail
  const foundUser = await User.findOne({ confirmationCode: req.params.code });

  if (!foundUser) {
    return res.status(404).send({ errMsg: 'User Not found.' });
  }

  // update user status if code sent from from end matches the one in the document
  foundUser.status = 'active';
  foundUser.save();

  return res
    .status(200)
    .send({ msg: 'Account successfully verified. You can login right now!' });

};

exports.sendUserCreds = async (req, res) => {
  const user = req.user;

  return res.status(200).json({ user });

};
// change account credentials
exports.changeCredentials = async (req, res) => {

  const { username, email, newPassword, languages } = req.body;

  const foundUser = await User.findById(req.user.id);

  if (username) foundUser.username = username;

  if (email) foundUser.email = email;

  if (newPassword) {
    // hash Password
    const hashedPass = await bcrypt.hash(newPassword, 10);
    foundUser.password = hashedPass;
  }

  if (languages) foundUser.languages = languages;

  foundUser.save();
  res.status(200).json(`changes have been saved `);

};


// logout Controller
exports.logout = (req, res) => {
  res.clearCookie('token_cookie');
  return res.status(200).json({ msg: 'logged out' });
};


// confirm user is logged in
exports.isLoggedIn = (req, res) => {

  const token = req.cookies.token_cookie;

  if (!token) {
    return res.status(403).json({ isLoggedIn: false });
  }
  return res.status(200).json({ isLoggedIn: true });

};


