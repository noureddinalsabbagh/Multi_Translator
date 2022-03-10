const { translateText } = require('../helpers/translateText');

exports.translateText = async (req, res) => {
  const { text } = req.body;
  const { languages } = req.user

  const wordPromises = languages.map(

    async (lang) => await translateText(text, lang)

  )
  const translations = await Promise.all(wordPromises)
  console.log(translations);



  return res.status(200).json({ translations })


}

