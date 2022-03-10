const User = require('../models/userModel');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendEmail = require('../helpers/sendEmail');

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



    const emailSent = await sendEmail(userName, email, token)
    res.status(201).json({ msg: 'User was registered successfully! Please check your email', emailSent });
   
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

exports.verifyUser = async (req, res) => {
  try {
    const foundUser = await User.findOne({ confirmationCode: req.params.code })
    if (!foundUser) {
      return res.status(404).send({ msg: "User Not found." });
    }
    foundUser.status = "active"
    foundUser.save((err) => {
      if (err) {
        res.status(500).send({ message: err });
        return
      }
    })
    return res.status(200).send("you can login right now!")



  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}