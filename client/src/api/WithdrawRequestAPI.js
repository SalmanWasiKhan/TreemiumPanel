import BaseRoutes from './BaseRoutes';

class WithdrawRequestAPI extends BaseRoutes {
  constructor() {
    super('/withdraw-requests');
  }

  getWithdrawRequests = async ({ page, limit, status, user }) => {
    const res = await this._get('/', {
      params: {
        ...(page ? { _page: page } : {}),
        ...(limit ? { _limit: limit } : {}),
        ...(status ? { status: status } : {}),
        ...(user ? { user: user } : {}),
      },
    });

    return res;
  };

  createWithdrawRequest = async (data) => {
    const res = await this._post('/', data);
    return res;
  };

  approveWithdrawRequest = async (id, approved) => {
    const res = await this._put(`/${id}`, { approved });
    return res;
  };
}

export default new WithdrawRequestAPI();
