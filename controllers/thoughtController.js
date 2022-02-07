const { User, Thought } = require('../models');

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.status(200).json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  createThought(req, res) {},
  getThoughtById(req, res) {},
  updateThought(req, res) {},
  deleteThought(req, res) {},
  addReaction(req, res) {},
  deleteReaction(req, res) {},
};
