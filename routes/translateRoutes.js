const router = require('express').Router();

const { translateText } = require('../controllers/translateControllers');
const cookieValidator = require('../middleware/cookieValidator');


router.post("/translation", cookieValidator, translateText)
module.exports = router;
