const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const cookieValidator = async (req, res, next) => {
  const token = req.cookies.token_cookie;
  if (!token) {
    return res.status(403).json('Session expired, please login!');
  }

  const decodedUser = jwt.verify(token, process.env.COOKIE_SECRET);
  const id = decodedUser.id;
  const user = await User.findById(id);

  if (!user) {
    return res.status(401).json({ msg: 'user is not found' });
  }
  req.user = user;
  next();
};
module.exports = cookieValidator;
