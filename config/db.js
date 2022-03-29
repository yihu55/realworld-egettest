const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(MONGODB_URI);

    console.log(`MongoDB Connected at ${connect}`);
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
