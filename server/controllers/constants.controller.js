const { currencies, exchangeRates, fee, vat } = require('../constants');

class ConstantsController {
  // get currencies
  static getCurrencies(req, res) {
    res.status(200).json({
      data: currencies,
    });
  }

  // get exchange rates
  static getExchangeRates(req, res) {
    res.status(200).json({
      data: exchangeRates,
    });
  }

  // get fee
  static getFee(req, res) {
    res.status(200).json({ data: fee });
  }

  // get vat
  static getVAT(req, res) {
    res.status(200).json({ data: vat });
  }

  // get all constants
  static getAll(req, res) {
    res.status(200).json({
      data: {
        currencies,
        exchangeRates,
        fee,
        vat,
      },
    });
  }
}

module.exports = ConstantsController;
