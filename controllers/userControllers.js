const User = require('../models/userModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = () => { };

exports.logIn = async (req, res) => {
  const { email, password } = req.body

  try {
    // check if the user exists
    const foundUser = await User.findOne({ email: email }).lean();
    if (!foundUser) {
      return res
        .status(404)
        .json({ errMsg: 'User not found, please register!' })
    }
    // compare the passwords
    const passwordIsValid = await bcrypt.compare(password, foundUser.password);
    if (!passwordIsValid) {
      return res.status(400).json({ errMsg: 'invalid password!' });
    }

    // send a token with cookies
    const payload = { id: foundUser._id, email: foundUser.email };
    const token = jwt.sign(payload, process.env.COOKIE_SECRET, { expiresIn: "1h" });
    res
      .status(200)
      .cookie("token_cookie", token, { httpOnly: true, secure: false })
      .json({ msg: "you successfully logged in!" });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }


};
