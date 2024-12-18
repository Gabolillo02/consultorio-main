const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  age: String,
  gender: String
});

module.exports = mongoose.model('User', userSchema);
