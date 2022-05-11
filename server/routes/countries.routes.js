const express = require('express');
const CountriesController = require('../controllers/countries.controller');
const router = express.Router();

router.use('/', CountriesController.getAllCountries);

module.exports = router;
