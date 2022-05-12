import BaseRoutes from './BaseRoutes';

class AuthAPI extends BaseRoutes {
  constructor() {
    super('/auth');
  }

  login = async ({ email, password, rememberMe }) => {
    const res = await this._post('/login', { email, password, rememberMe });
    return res;
  };
}

export default new AuthAPI();
