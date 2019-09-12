const mongoose = require('mongoose');

const userShema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true
  },
  email: {
    type: String,
    required: [true, 'A User must have a user email']
  }
});

const User = mongoose.model('User', userShema);

module.exports = User;
