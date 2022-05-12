import BaseRoutes from './BaseRoutes';

class UserAPI extends BaseRoutes {
  constructor() {
    super('/users');
  }

  createUser = async ({ name, email, password }) => {
    const res = await this._post('/', { name, email, password });
    return res;
  };

  getUser = async (id) => {
    const res = await this._get(`/${id}`);
    return res;
  };

  getUsers = async ({ page, limit }) => {
    const res = await this._get('/', {
      params: {
        ...(page ? { _page: page } : {}),
        ...(limit ? { _limit: limit } : {}),
      },
    });
    return res;
  };

  updateUser = async (id, data, withImage) => {
    const res = await this._put(`/${data.id}`, data, {
      headers: {
        'Content-Type': withImage ? 'multipart/form-data' : 'application/json',
      },
    });

    return res;
  };

  deleteUser = async (id) => {
    const res = await this._delete(`/${id}`);
    return res;
  };

  getBankAccounts = async ({ page, limit, user, status }) => {
    const res = await this._get('/bank-accounts', {
      params: {
        ...(page ? { _page: page } : {}),
        ...(limit ? { _limit: limit } : {}),
        ...(user ? { user: user } : {}),
        ...(status ? { status: status } : {}),
      },
    });

    return res;
  };

  requestBankAccount = async (data) => {
    const res = await this._post('/bank-accounts', data);
    return res;
  };

  updateBankAccount = async (id, data) => {
    const res = await this._put(`/bank-accounts/${data.id}`, data);
    return res;
  };

  approveBankAccount = async (id, approved) => {
    const res = await this._put(`/bank-accounts/approve/${id}`, { approved });
    return res;
  };
}

export default new UserAPI();
