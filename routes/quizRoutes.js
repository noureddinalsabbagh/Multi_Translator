const { quizController } = require('../controllers/quizControllers');
const cookieValidator = require('../middleware/cookieValidator');
const { tryForErrors } = require('../middleware/errorHandler');

const router = require('express').Router();

router.get("/", cookieValidator, tryForErrors(quizController))

module.exports = router