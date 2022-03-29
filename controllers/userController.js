const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');

const { User } = require('../models/User');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' }); //expires in 30 days
};

const registerUser = asyncHandler(async (req, res) => {
  const { username, password, email } = req.body.user;

  const userExists = await User.findOne({ username });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  //const salt = await bcrypt.genSalt(10);
  //const hashedPassword = await bcrypt.hash(password, salt);
  //console.log(hashedPassword);

  const user = new User({
    username: username,
    password: password,
    email: email,
  });
  const newUser = await user.save();

  //generate a token then pass it when a new user creates and login
  const token = generateToken(newUser._id);

  // if (newUser) {
  //   res.status(201).send({
  //     // _id: newUser.id,
  //     // username: username,
  //     token: generateToken(newUser._id),
  //   }); //ok
  // } else {
  //   res.status(400);
  //   throw new Error('Invalid user data');
  // }
  res.json({
    user: {
      username: newUser.username,
      password: newUser.password,
      email: newUser.email,
      token: token,
    },
  });
  //res.json({ message: 'Register User' }); //set up for initialize for test
});

module.exports = { registerUser };
