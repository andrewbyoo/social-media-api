const { User, Thought } = require('../models');

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .select('-__v')
      .then((thoughts) => res.status(200).json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  createThought(req, res) {
    Thought.create(req.body)
      .then((newThought) => {
        User.findOneAndUpdate(
          { username: req.body.username },
          { $addToSet: { thoughts: newThought._id } },
          { new: true }
        )
          .then((newThought) => res.status(200).json(newThought))
          .catch((err) => res.status(500).json(err));
      })
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
      { runValidators: true, new: true }
    )
      .then((updatedThought) =>
        !updatedThought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.status(200).json(updatedThought)
      )
      .catch((err) => res.status(500).json(err));
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
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((newReaction) =>
        !newReaction
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.status(200).json(newReaction)
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    )
      .then((deletedReaction) =>
        !deletedReaction
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.status(200).json(deletedReaction)
      )
      .catch((err) => res.status(500).json(err));
  },
};
