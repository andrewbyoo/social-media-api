const router = require('express').Router();
const {
  // TODO: Add destructured components in controller
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController');

// TODO: Add controller component into get and post
router.route('/').get(getUsers).post(createUser);

// TODO: Add controller component into get, put, and delete
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

// TODO: Add controller component into post
router.route('/:userId/friends').post(addFriend);

// TODO: Add controller component into delete
router.route('/:userId/friends/:friendId').delete(deleteFriend);

module.exports = router;
