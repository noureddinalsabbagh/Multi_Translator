const { Schema, model } = require('mongoose');

const translationSchema = new Schema({
  text: { type: String },
  translations: [],
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Translation = model('Translation', translationSchema);

module.exports = Translation;
