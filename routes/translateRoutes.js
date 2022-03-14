const router = require('express').Router();

const {
  translateText,
  getTranslations,
} = require('../controllers/translateControllers');
const cookieValidator = require('../middleware/cookieValidator');

router.post('/translation', cookieValidator, translateText);
router.get('/quiz', cookieValidator, getTranslations);

module.exports = router;
