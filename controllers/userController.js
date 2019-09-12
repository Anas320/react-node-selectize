const User = require('./../models/userModel');

const users = [
  {
    name: 'anas',
    email: 'ansarshad5@gmail.com'
  },
  {
    name: 'uzair',
    email: 'uzairzahid@gmail.com'
  },
  {
    name: 'faizan',
    email: 'faizanahmed@gmail.com'
  }
];

exports.getAllUsers = async (req, res) => {
  try {
    console.log(req.params.inputValue);
    const users = await User.find(req.params.inputValue);
    console.log(users);

    return res.status(200).json([
      {
        name: 'anas',
        email: 'ansarshad5@gmail.com'
      },
      {
        name: 'uzair',
        email: 'uzairzahid@gmail.com'
      },
      {
        name: 'faizan',
        email: 'faizanahmed@gmail.com'
      }
    ]);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
exports.getUser = (req, res) => {
  res.status(200).json({
    status: 'error',
    message: 'This route is not yet defined'
  });
};
exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined'
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined'
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined'
  });
};
