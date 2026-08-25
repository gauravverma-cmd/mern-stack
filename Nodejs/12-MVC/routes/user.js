const express = require("express");
const router = express.Router();

const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handledeleteUserById,
  handleCreateNewUser,
} = require("../controllers/user");
// TO show users in api formate and make new user
router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);
// TO show, edit and delete only user by a id.
router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handledeleteUserById);

module.exports = router;
