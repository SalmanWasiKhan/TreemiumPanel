const express = require('express');
const authRouter = require('./auth.routes');
const countriesRouter = require('./countries.routes');

const router = express.Router();

router.get('/health-check', (req, res) => {
  res.send('OK');
});
router.use('/auth', authRouter);
router.use('/countries', countriesRouter);

module.exports = router;