const express = require('express');
const UserController = require('../controllers/user.controller');
const router = express.Router();
const requireUser = require('../middlewares/requireUser');

router.post('/', requireUser({ admin: true }), UserController.createUser);
router.get(
  '/:id',
  requireUser({ self: 'params.id', admin: true }),
  UserController.getUser
);
router.get('/', requireUser({ admin: true }), UserController.getUsers);
router.put(
  '/:id',
  requireUser({ self: 'params.id', admin: true }),
  UserController.updateUser
);
router.delete('/:id', requireUser({ admin: true }), UserController.deleteUser);
router.get(
  '/bank-accounts',
  requireUser({ self: 'params.user', admin: true }),
  UserController.getBankAccounts
);
router.post('/bank-accounts', requireUser(), UserController.requestBankAccount);
router.put(
  '/bank-accounts/:id',
  requireUser(),
  UserController.updateBankAccount
);
router.put(
  '/bank-accounts/approve/:id',
  requireUser({ admin: true }),
  UserController.approveBankAccount
);

module.exports = router;
