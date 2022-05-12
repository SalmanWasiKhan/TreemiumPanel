const WithdrawRequest = require('../models/withdrawRequest.model');

class WithdrawRequestController {
  // create a new withdraw request
  static async createWithdrawRequest(req, res) {
    try {
      const { amount, paymentMethod, currency, exchangeRate, fee, vat } =
        req.body;
      const user = req.user._id;

      const totalAmount = amount * (1 / exchangeRate) - fee - vat;

      const withdrawRequest = await WithdrawRequest.create({
        user,
        amount,
        paymentMethod,
        currency,
        exchangeRate,
        fee,
        vat,
        totalAmount,
      });

      return res.status(201).json({
        message: 'Withdraw request created successfully',
        data: {
          withdrawRequest: withdrawRequest.toJSON(),
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  // get all withdraw requests, paginated, sorted by date, status
  static async getWithdrawRequests(req, res) {
    try {
      const { _page, _limit, status, user } = req.query;

      const page = parseInt(_page, 10) || 1;
      const limit = parseInt(_limit, 10) || 10;

      const withdrawRequests = await WithdrawRequest.find({
        ...(status ? { status } : {}),
        ...(user ? { user } : {}),
      })
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .populate('user')
        .populate('paymentMethod');

      const total = await WithdrawRequest.countDocuments({
        ...(status ? { status } : {}),
        ...(user ? { user } : {}),
      });
      const totalPages = Math.ceil(total / limit);

      return res.status(200).json({
        data: {
          withdrawRequests,
          total,
          totalPages,
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  // approve a withdraw request
  static async approveWithdrawRequest(req, res) {
    try {
      const { id } = req.params;
      const { approved } = req.body;

      const withdrawRequest = await WithdrawRequest.findById(id);

      if (!withdrawRequest) {
        return res.status(404).json({
          message: 'Withdraw request not found',
        });
      }

      if (withdrawRequest.status !== 'pending') {
        return res.status(400).json({
          message: 'Withdraw request is not pending',
        });
      }

      const updatedWithdrawRequest = await WithdrawRequest.findByIdAndUpdate(
        id,
        {
          status: approved ? 'approved' : 'rejected',
        },
        {
          new: true,
        }
      );

      return res.status(200).json({
        message: approved
          ? 'Withdraw request approved!'
          : 'Withdraw request rejected!',
        data: updatedWithdrawRequest,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }
}

module.exports = WithdrawRequestController;
