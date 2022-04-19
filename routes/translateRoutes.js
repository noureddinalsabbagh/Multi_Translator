const router = require('express').Router();

const {
  translateText,
  getTranslations,
} = require('../controllers/translateControllers');
const cookieValidator = require('../middleware/cookieValidator');
const { tryForErrors } = require('../middleware/errorHandler');

router.post('/', cookieValidator, tryForErrors(translateText));
router.get('/history', cookieValidator, tryForErrors(getTranslations));

module.exports = router;
