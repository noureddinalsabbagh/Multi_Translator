const router = require('express').Router();

const {
  translateText,
  getTranslations,
} = require('../controllers/translateControllers');
const cookieValidator = require('../middleware/cookieValidator');

router.post('/', cookieValidator, translateText);
router.get('/history', cookieValidator, getTranslations);

module.exports = router;
