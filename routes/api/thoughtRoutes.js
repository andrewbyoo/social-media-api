const router = require('express').Router();
const {
  getThoughts,
  createThought,
  getThoughtById,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

// TODO: Add controller component into get and post
router.route('/').get().post();

// TODO: Add controller component into get, put, and delete
router.route('/:thoughtId').get().put().delete();

// TODO: Add controller component into post
router.route('/:thoughtId/reactions').post();

// TODO: Add controller component into delete
router.route('/:thoughtId/reactions/:reactionId');

module.exports = router;
