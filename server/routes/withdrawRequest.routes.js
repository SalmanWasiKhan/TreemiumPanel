const express = require('express');
const WithdrawRequestController = require('../controllers/withdrawRequest.controller');
const requireUser = require('../middlewares/requireUser');
const router = express.Router();

router.post(
  '/',
  requireUser(),
  WithdrawRequestController.createWithdrawRequest
);
router.get(
  '/',
  requireUser({ self: 'query.user', admin: true }),
  WithdrawRequestController.getWithdrawRequests
);
router.put(
  '/:id',
  requireUser({ admin: true }),
  WithdrawRequestController.approveWithdrawRequest
);

module.exports = router;
