const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const connectDB = require('./utils/connectDB');
const path = require('path');
require('dotenv').config();
const deserializeUser = require('./middlewares/deserializeUser');

const routes = require('./routes');

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(deserializeUser);

// static
app.use('/public', express.static('public'));
app.use(express.static('build'));

// logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// routes
app.use('/api', routes);

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);

  connectDB();
});
