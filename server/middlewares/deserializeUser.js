const { decode } = require('../utils/jwt.utils');

const deserializeUser = async (req, res, next) => {
  // get token from auth header
  let token = req.headers.authorization || req.headers.Authorization;
  token = token?.replace('Bearer ', '');

  if (!token) return next();

  const { valid, expired, decoded } = decode(token);

  if (!valid) {
    return next();
  }

  if (expired) {
    return next();
  }

  req.user = decoded;

  next();
};

module.exports = deserializeUser;
