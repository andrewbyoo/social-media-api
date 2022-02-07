const router = require('express').Router();
const {
  // TODO: Add destructured components in controller
} = require('../../controllers/userController');

// TODO: Add controller component into get and post
router.route('/').get().post();

// TODO: Add controller component into get, put, and delete
router.route('/:userId').get().put().delete();

// TODO: Add controller component into post
router.route('/:userId/friends').post();

// TODO: Add controller component into delete
router.route('/:userId/friends/:friendId').delete();

module.exports = router;
