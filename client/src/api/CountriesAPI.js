import BaseRoutes from './BaseRoutes';

class CountriesAPI extends BaseRoutes {
  constructor() {
    super('/countries');
  }

  getAll = async () => {
    const res = await this._get('/');
    return res;
  };
}

export default new CountriesAPI();
