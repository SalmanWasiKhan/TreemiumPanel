const Countries = require('../models/countries.model');

class CountriesController {
  static async getAllCountries(req, res) {
    try {
      const countries = await await Countries.find()
        .select('country')
        .sort('country');
      return res.status(200).json({
        data: countries,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }
}

module.exports = CountriesController;
