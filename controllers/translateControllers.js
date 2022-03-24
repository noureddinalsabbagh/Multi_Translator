const Translation = require('../models/translationModel');
const { translateText } = require('../helpers/translateText');
const { convertToObj } = require('../helpers/helperFunctions');

exports.translateText = async (req, res) => {
  try {
    // get the text from the body and user from req object
    const { text } = req.body;
    const { languages } = req.user;
    // map through the languages of the user and call translate
    const wordPromises = languages.map(
      async (lang) => await translateText(text, lang)
    );
    // wait for all promises from the map to be resolved
    const translations = await Promise.all(wordPromises);

    const translationObj = {
      text: text,
      translations: convertToObj(languages, translations),
      userId: req.user.id,
    };
    const translation = await Translation.create(translationObj);

    return res.status(200).json(translation);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// get translations for quiz

exports.getTranslations = async (req, res) => {
  try {
    const user = req.user;
    const translations = await Translation.find({ userId: user._id });

    res.status(200).json({ userHistory: translations });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
