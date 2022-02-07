const { User } = require('../models');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.status(200).json(users))
      .catch((err) => res.status(500).json(err));
  },
  createUser(req, res) {},
  getUserById(req, res) {},
  updateUser(req, res) {},
  deleteUser(req, res) {},
  addFriend(req, res) {},
  deleteFriend(req, res) {},
};
