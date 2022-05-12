const requireUser =
  ({ self, admin } = {}) =>
  (req, res, next) => {
    const user = req.user;

    if (!user) {
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }

    if (admin && !user.role === 'admin') {
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }

    const selfFields = self?.split('.');
    const selfValue = selfFields?.reduce((acc, field) => acc[field], req);

    if (self && user._id !== selfValue && admin && user.role !== 'admin') {
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }

    next();
  };

module.exports = requireUser;
