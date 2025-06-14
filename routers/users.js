const express = require("express");
const usersController = require("../controllers/users");
const joiValidator = require("../middlewares/joiValidator");
const createUserSchema = require("../schemas/createUserSchema");
const logInSchema = require("../schemas/logInSchema");
const auth = require("../middlewares/auth");
const restricTo = require("../middlewares/restrictTo");

const router = express.Router();

router.post("/signup", joiValidator(createUserSchema), usersController.signUp);
router.post("/login", joiValidator(logInSchema), usersController.logIn);
// get all users
router.get(
  "/",
  auth,
  restricTo(["admin", "user"]),
  usersController.getAllUsers
);
// get user by id
router.get("/:id", usersController.getUserById);
// patch => update part of user data
router.patch("/:id", usersController.updateUserById);
// delete user
router.delete("/:id", usersController.deleteUserById);

module.exports = router;
