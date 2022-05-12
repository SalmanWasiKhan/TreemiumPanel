const express = require('express');
const ConstantsController = require('../controllers/constants.controller');
const router = express.Router();

router.get('/currencies', ConstantsController.getCurrencies);
router.get('/exchange-rates', ConstantsController.getExchangeRates);
router.get('/fee', ConstantsController.getFee);
router.get('/vat', ConstantsController.getVAT);
router.get('/all', ConstantsController.getAll);

module.exports = router;
