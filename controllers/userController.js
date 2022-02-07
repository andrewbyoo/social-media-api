const { User } = require('../models');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.status(200).json(users))
      .catch((err) => res.status(500).json(err));
  },
  createUser(req, res) {
    User.create(req.body)
      .then((newUser) => res.status(200).json(newUser))
      .catch((err) => res.status(500).json(err));
  },
  getUserById(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(400).json({ message: 'No user with that ID' })
          : res.status(200).json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: reg.body },
      { runValidators: true, new: true }
    )
      .then((updatedUser) =>
        !updatedUser
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.status(200).json(updatedUser)
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteUser(req, res) {},
  addFriend(req, res) {},
  deleteFriend(req, res) {},
};
