const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  status: { type: String, enum: ['active', 'pending'], default: 'pending' },
  confirmationCode: { type: String, unique: true },
  languages: { type: [String] },
  firstTimer: { type: Boolean, default: false },
});

const User = model('User', userSchema);

module.exports = User;
