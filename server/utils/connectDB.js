const mongoose = require('mongoose');

const connectDB = () => {
  const MONGO_URI = process.env.MONGO_URI;

  mongoose
    .connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => {
      console.log('Error connecting to MongoDB: ', err);
    });
};

module.exports = connectDB;
