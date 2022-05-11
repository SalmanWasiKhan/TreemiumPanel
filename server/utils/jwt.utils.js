const jwt = require('jsonwebtoken');

const key = process.env.JWT_KEY;

exports.sign = (object, options) => {
  if (!key) return '';

  return jwt.sign(object, key, {
    ...(options && options),
  });
};

exports.decode = (token) => {
  try {
    if (!key) return { valid: false, expired: false, decoded: null };

    const decoded = jwt.verify(token, key);

    return { valid: true, expired: false, decoded };
  } catch (error) {
    return {
      valid: false,
      expired: error.message === 'jwt expired',
      decoded: jwt.decode(token),
    };
  }
};
