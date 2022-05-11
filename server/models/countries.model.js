const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * @typedef Countries Schema
 * @param {String} country
 */

const CountriesSchema = new Schema({
  country: {
    type: String,
    required: true,
    trim: true,
  },
});

const Countries = mongoose.model('Countries', CountriesSchema);
module.exports = Countries;
