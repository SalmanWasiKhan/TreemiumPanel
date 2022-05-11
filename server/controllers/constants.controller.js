const { currencies, exchangeRates, fee } = require('../constants');

class ConstantsController {
  // get currencies
  static getCurrencies(req, res) {
    res.status(200).json(currencies);
  }

  // get exchange rates
  static getExchangeRates(req, res) {
    res.status(200).json(exchangeRates);
  }

  // get fee
  static getFee(req, res) {
    res.status(200).json(fee);
  }

  // get all constants
  static getAll(req, res) {
    res.status(200).json({
      currencies,
      exchangeRates,
      fee,
    });
  }
}

module.exports = ConstantsController;
