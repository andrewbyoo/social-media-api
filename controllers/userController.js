const { User } = require('../models');

module.exports = {
  getUsers(req, res) {
    User.find()
      .lean()
      .populate('thoughts', '-username')
      .populate('friends', '_id username')
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
      .lean()
      .populate('thoughts', '-username')
      .populate('friends', '_id username')
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
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((deletedUser) =>
        !deletedUser
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.status(200).json(deletedUser)
      )
      .catch((err) => res.status(500).json(err));
  },
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.body._id } },
      { new: true }
    )
      .then((newFriend) =>
        !newFriend
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.status(200).json(newFriend)
      )
      .catch((err) => res.status(500).json(err));

    User.findOneAndUpdate(
      { _id: req.body._id },
      { $addToSet: { friends: req.params.userId } }
    )
  },
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((deletedFriend) =>
        !deletedFriend
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.status(200).json(deletedFriend)
      )
      .catch((err) => res.status(500).json(err));

    User.findOneAndUpdate(
      { _id: req.params.friendId },
      { $pull: { friends: req.params.userId } }
    )
      .catch(
        // Errors already handled through the other findOneAndUpdate request
      )
  },
};
