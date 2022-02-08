const { User, Thought } = require('../models');

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.status(200).json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  createThought(req, res) {
    Thought.create(req.body)
      .then((newThought) => res.status(200).json(newThought))
      .catch((err) => res.status(500).json(err));
  },
  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(400).json({ message: 'No thought with that ID' })
          : res.status(200).json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
    )
  },
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((deletedThought) =>
        !deletedThought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.status(200).json(deletedThought)
      )
      .catch((err) => res.status(500).json(err));
  },
  addReaction(req, res) {},
  deleteReaction(req, res) {},
};
