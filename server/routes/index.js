const express = require('express');
const authRouter = require('./auth.routes');
const countriesRouter = require('./countries.routes');
const userRouter = require('./user.routes');
const withdrawRequestsRouter = require('./withdrawRequest.routes');
const constantsRouter = require('./constants.routes');

const router = express.Router();

router.get('/health-check', (req, res) => {
  res.send('OK');
});
router.use('/auth', authRouter);
router.use('/countries', countriesRouter);
router.use('/users', userRouter);
router.use('/withdraw-requests', withdrawRequestsRouter);
router.use('/constants', constantsRouter);

module.exports = router;
