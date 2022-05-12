const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * @typedef WithdrawRequest
 * @param {String} user
 * @param {String} amount
 * @param {String} paymentMethod
 * @param {String} currency
 * @param {Number} exchangeRate
 * @param {Number} fee
 * @param {Number} vat
 * @param {Number} totalAmount
 * @param {String} status
 */

const WithdrawRequestSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: Schema.Types.ObjectId,
      ref: 'BankAccount',
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    exchangeRate: {
      type: Number,
      required: true,
    },
    fee: {
      type: Number,
      required: true,
    },
    vat: {
      type: Number,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

const WithdrawRequest = mongoose.model(
  'WithdrawRequest',
  WithdrawRequestSchema
);
module.exports = WithdrawRequest;
