const isEmail = require('validator/lib/isEmail');
const bcrypt = require('bcrypt');

const validateChangeCreds = async (req, res, next) => {
  try {
    const { username, email, password, newPassword, languages } = req.body;

    // check username length
    if (username && username.length < 6) {
      return res.status(403).json({ errMsg: 'Username is too short' });
    }
    if (username === "") {
      return res.status(403).json({ errMsg: 'Username is too short' });
    }

    // check email
    if (email && !isEmail(email)) {
      return res.status(403).json({ errMsg: 'invalid email' });
    }

    if (password) {
      const isPasswordTrue = await bcrypt.compare(password, req.user.password);
      if (!isPasswordTrue) {
        return res.status(403).json({ errMsg: 'your password is incorrect' });
      } else if (isPasswordTrue && newPassword === '' || newPassword === undefined) {
        return res.status(403).json({ errMsg: 'you should add new password' });
      }
    }


    // check password length
    if (password && newPassword) {
      if (newPassword.length < 8) {
        return res.status(403).json({ errMsg: 'Password is too short' });
      }
    }
    if (password === "" && newPassword) {
      return res.status(403).json({ errMsg: 'please type your old password' });

    }

    //check if at least one language is chosen
    if (languages && languages.length < 1) {
      return res
        .status(403)
        .json({ errMsg: 'At least one language is required' });
    }

    // if (languages && languages.length > 5) {
    //   return res
    //     .status(403)
    //     .json({ errMsg: 'You can only choose five languages' });
    // }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

module.exports = validateChangeCreds;
