const express = require('express');
const UserController = require('../controllers/user.controller');
const router = express.Router();
const requireUser = require('../middlewares/requireUser');

router.post('/', requireUser({ admin: true }), UserController.createUser);
router.get('/', requireUser({ admin: true }), UserController.getUsers);
router.get(
  '/bank-accounts',
  requireUser({ self: 'query.user', admin: true }),
  UserController.getBankAccounts
);
router.get('/bank-accounts/:id', requireUser(), UserController.getBankAccount);
router.get(
  '/:id',
  requireUser({ self: 'params.id', admin: true }),
  UserController.getUser
);
router.put(
  '/bank-accounts/approve/:id',
  requireUser({ admin: true }),
  UserController.approveBankAccount
);
router.put(
  '/bank-accounts/:id',
  requireUser(),
  UserController.updateBankAccount
);
router.put(
  '/:id',
  requireUser({ self: 'params.id', admin: true }),
  UserController.updateUser
);
router.delete(
  '/bank-accounts/:id',
  requireUser(),
  UserController.deleteBankAccount
);
router.delete('/:id', requireUser({ admin: true }), UserController.deleteUser);
router.post('/bank-accounts', requireUser(), UserController.requestBankAccount);

module.exports = router;
