const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * @typedef BankAccount
 * @param {String} routingNumber
 * @param {String} accountNumber
 * @param {String} fullName
 * @param {String} bankName
 * @param {String} status
 * @param {String} user
 * @param {String} createdAt
 * @param {String} updatedAt
 */

const BankAccountSchema = new Schema(
  {
    swiftCode: {
      type: String,
      required: true,
    },

    iban: {
      type: String,
      required: true,
    },

    fullName: {
      type: String,
      required: true,
    },

    bankName: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      required: true,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const BankAccount = mongoose.model('BankAccount', BankAccountSchema);
module.exports = BankAccount;
