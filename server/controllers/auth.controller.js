const User = require('../models/user.model');

class AuthController {
  static async login(req, res) {
    try {
      const { email, password, rememberMe } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({
          message: 'Invalid credentials',
        });
      }

      const isMatch = await user.comparePassword(password);

      if (!isMatch) {
        return res.status(400).json({
          message: 'Invalid credentials',
        });
      }

      const token = await user.generateToken({
        rememberMe,
      });

      user.lastLog = new Date();
      await user.save();

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
            role: userData.role,
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
