const { Translate } = require('@google-cloud/translate').v2;

// credentials to be able to use cloud translation from google
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

// a new insatance with the crendential
const translate = new Translate({
  credentials: CREDENTIALS,
  projectId: CREDENTIALS.project_id
})

// to detect language
exports.detectLanguage = async (text) => {
  try {
    let response = await translate.detect(text);
    return response[0].language

  } catch (error) {
    console.log(`error at detectLanguage --> ${error}`)
    return 0
  }
}

// to translate language
exports.translateText = async (text, targetLanguage) => {
  try {
    let [response] = await translate.translate(text, targetLanguage);
    return response

  } catch (error) {
    console.log(`error at translateText --> ${error}`)
    return 0
  }
}