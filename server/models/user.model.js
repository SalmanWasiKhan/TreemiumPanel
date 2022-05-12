const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { sign } = require('../utils/jwt.utils');

const Schema = mongoose.Schema;

/**
 * @typedef User Schema
 * @param {String} name
 * @param {String} email
 * @param {String} password
 * @param {String} role
 * @param {Number} balance
 * @param {String} profilePic
 * @param {String} phoneNumber
 * @param {String} presentAddress
 * @param {String} permanentAddress
 * @param {String} city
 * @param {ObjectId} country
 * @param {String} postalCode
 * @param {Date} dateOfBirth
 * @param {Date} lastLog
 * @param {Date} createdAt
 * @param {Date} updatedAt
 */

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 255,
    },
    role: {
      type: String,
      required: true,
      enum: ['user', 'admin'],
      default: 'user',
    },
    balance: {
      type: Number,
      default: 0,
    },
    profilePic: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    presentAddress: {
      type: String,
    },
    permanentAddress: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: Schema.Types.ObjectId,
      ref: 'Country',
    },
    postalCode: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    lastLog: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// password hashing middleware
UserSchema.pre('save', async function (next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // const saltRounds = config.get<number>('saltRounds');
  const saltRounds = parseInt(process.env.SALT_ROUNDS) || 10;

  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(user.password, salt);

  user.password = hash;

  next();
});

// compare password method
UserSchema.methods.comparePassword = function (candidatePassword) {
  const user = this;

  return bcrypt.compareSync(candidatePassword, user.password);
};

// generate token method
UserSchema.methods.generateToken = function ({ rememberMe }) {
  const user = this;

  let expiresIn =
    user.role === 'admin'
      ? process.env.ADMIN_JWT_EXPIRES_IN
      : rememberMe
      ? process.env.USER_JWT_EXPIRES_IN_REMEMBER
      : process.env.USER_JWT_EXPIRES_IN;

  if (!expiresIn) expiresIn = '1d';

  const token = sign(
    {
      _id: user._id,
      email: user.email,
      role: user.role,
      name: user.name,
    },
    {
      expiresIn,
    }
  );
  return token;
};

// get user without password and profilePic with base url
UserSchema.methods.toJSON = function () {
  const user = this;

  const userObject = user.toObject();

  delete userObject.password;

  if (userObject.profilePic) {
    userObject.profilePic = process.env.SERVER_URL + user.profilePic;
  }

  return userObject;
};

const User = mongoose.model('User', UserSchema);
module.exports = User;
