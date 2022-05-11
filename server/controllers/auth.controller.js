const User = require('../models/user.model');

class AuthController {
  static async login(req, res) {
    try {
      const { email, password, rememberMe } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({
          message: 'User not found',
        });
      }

      const isMatch = await user.comparePassword(password);

      if (!isMatch) {
        return res.status(401).json({
          message: 'Wrong password',
        });
      }

      const token = await user.generateToken({
        rememberMe,
      });

      const userData = user.toJSON();

      return res.status(200).json({
        // message: 'Login successful',
        data: {
          token,
          user: {
            _id: userData._id,
            name: userData.name,
            email: userData.email,
            profileImage: userData.profileImage,
          },
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }
}

module.exports = AuthController;
