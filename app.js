const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

connectDB();
const app = express();
const PORT = 5000;

app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', require('./routes/userRoutes'));

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
