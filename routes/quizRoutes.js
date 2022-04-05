const { quizController } = require('../controllers/quizControllers');
const cookieValidator = require('../middleware/cookieValidator');

const router = require('express').Router();

router.get("/", cookieValidator, quizController)

module.exports = router