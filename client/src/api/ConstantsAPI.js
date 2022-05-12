import BaseRoutes from './BaseRoutes';

class ConstantsAPI extends BaseRoutes {
  constructor() {
    super('/constants');
  }

  getCurrencies = async () => {
    const res = await this._get('/currencies');
    return res;
  };

  getExchangeRates = async () => {
    const res = await this._get('/exchange-rates');
    return res;
  };

  getFee = async () => {
    const res = await this._get('/fee');
    return res;
  };

  getVAT = async () => {
    const res = await this._get('/vat');
    return res;
  };

  getAll = async () => {
    const res = await this._get('/all');
    return res;
  };
}

export default new ConstantsAPI();
