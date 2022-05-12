const User = require('../models/user.model');
const BankAccount = require('../models/bankAccount.model');
const uploadFiles = require('../utils/uploadFiles');
const removeFiles = require('../utils/removeFiles');

class UserController {
  // create a new user
  static async createUser(req, res) {
    try {
      const { name, email, password } = req.body;

      const user = await User.create({
        name,
        email,
        password,
      });

      return res.status(201).json({
        message: 'User created successfully',
        data: {
          user: user.toJSON(),
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  // get a single user
  static async getUser(req, res) {
    try {
      const user = await User.findById(req.params.id);

      if (!user) {
        return res.status(404).json({
          message: 'User not found',
        });
      }

      const userData = user.toJSON();

      const bankAccounts = await BankAccount.find({ user: user._id });

      return res.status(200).json({
        data: {
          ...userData,
          bankAccounts,
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  // get all users, paginated
  static async getUsers(req, res) {
    try {
      const { _page, _limit } = req.query;

      const page = parseInt(_page, 10) || 1;
      const limit = parseInt(_limit, 10) || 100;

      const users = await User.find({
        role: {
          $ne: 'admin',
        },
      })
        .skip((page - 1) * limit)
        .limit(limit);

      const total = await User.countDocuments();
      const totalPages = Math.ceil(total / limit);

      return res.status(200).json({
        data: {
          users,
          total,
          totalPages,
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  // update a user
  static async updateUser(req, res) {
    try {
      const user = await User.findById(req.params.id);

      if (!user) {
        return res.status(404).json({
          message: 'User not found',
        });
      }

      const update = req.body;

      const profilePic = req.files?.profilePic;

      if (profilePic) {
        const profilePicPath = uploadFiles(profilePic, 'users');
        update.profilePic = profilePicPath;
      }

      Object.keys(update).forEach((key) => {
        user[key] = update[key];
      });

      await user.save();

      return res.status(200).json({
        message: 'Profile updated!',
        data: {
          ...user.toJSON(),
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  // delete a user
  static async deleteUser(req, res) {
    try {
      const user = await User.findById(req.params.id);

      if (!user) {
        return res.status(404).json({
          message: 'User not found',
        });
      }

      const profilePic = user.profilePic;

      if (profilePic) {
        removeFiles(profilePic);
      }

      await User.findByIdAndDelete(req.params.id);

      return res.status(200).json({
        message: 'User deleted!',
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  // request to add a bank account
  static async requestBankAccount(req, res) {
    try {
      const { swiftCode, iban, fullName, bankName } = req.body;
      const user = req.user._id;

      const bankAccount = await BankAccount.create({
        swiftCode,
        iban,
        fullName,
        bankName,
        user,
      });

      return res.status(201).json({
        message: 'Bank account requested!',
        data: bankAccount,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  // get all bank accounts, paginated, filtered and also for specific user
  static async getBankAccounts(req, res) {
    try {
      const { _page, _limit, status, user } = req.query;

      const page = parseInt(_page, 10) || 1;
      const limit = parseInt(_limit, 10) || 100;

      const bankAccounts = await BankAccount.find({
        ...(user ? { user } : {}),
        ...(status ? { status } : {}),
      })
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ createdAt: -1 })
        .populate('user');

      const total = await BankAccount.countDocuments({
        ...(user ? { user } : {}),
        ...(status ? { status } : {}),
      });
      const totalPages = Math.ceil(total / limit);

      return res.status(200).json({
        data: {
          bankAccounts,
          total,
          totalPages,
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  // get a single bank account
  static async getBankAccount(req, res) {
    try {
      const bankAccount = await BankAccount.findById(req.params.id);

      if (!bankAccount) {
        return res.status(404).json({
          message: 'Bank account not found',
        });
      }

      return res.status(200).json({
        data: bankAccount,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  // update a bank account
  static async updateBankAccount(req, res) {
    try {
      const bankAccount = await BankAccount.findById(req.params.id);

      if (!bankAccount) {
        return res.status(404).json({
          message: 'Bank account not found',
        });
      }

      const update = req.body;
      update.status = 'pending';

      const updatedBankAccount = await BankAccount.findByIdAndUpdate(
        req.params.id,
        update,
        {
          new: true,
        }
      );

      return res.status(200).json({
        message: 'Bank account update requested!',
        data: {
          ...updatedBankAccount.toJSON(),
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  // approve or reject a bank account request
  static async approveBankAccount(req, res) {
    try {
      const bankAccount = await BankAccount.findById(req.params.id);

      if (!bankAccount) {
        return res.status(404).json({
          message: 'Bank account not found',
        });
      }

      const updatedBankAccount = await BankAccount.findByIdAndUpdate(
        req.params.id,
        {
          status: req.body.approved ? 'approved' : 'rejected',
        },
        {
          new: true,
        }
      );

      return res.status(200).json({
        message: req.body.approved
          ? 'Bank Account approved!'
          : 'Bank Account rejected',
        data: updatedBankAccount,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  // delete a bank account
  static async deleteBankAccount(req, res) {
    try {
      const bankAccount = await BankAccount.findById(req.params.id);

      if (!bankAccount) {
        return res.status(404).json({
          message: 'Bank account not found',
        });
      }

      await BankAccount.findByIdAndDelete(req.params.id);

      return res.status(200).json({
        message: 'Bank account deleted!',
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }
}

module.exports = UserController;
