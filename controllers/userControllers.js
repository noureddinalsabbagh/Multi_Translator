const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const user = await User.findOne({ email: email }).lean();
    if (user) res.status(403).json({ errMsg: 'email is already in use' });

    const hashedPass = await bcrypt.hash(password, 10);

    const token = jwt.sign({ email }, process.env.COOKIE_SECRET);

    const newUser = await User.create({
      userName,
      email: email,
      password: hashedPass,
      confirmationCode: token,
    });

    res.status(201).json({ msg: 'registered successfully' });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.logIn = () => {};
