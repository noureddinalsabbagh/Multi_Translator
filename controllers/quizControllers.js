const Translation = require('../models/translationModel')

exports.quizController = async (req, res) => {

  const user = req.user;
  const translations = await Translation.find({ userId: user._id }).lean();

  res.status(200).json({ userHistory: translations });

}