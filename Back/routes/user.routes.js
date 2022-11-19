const express = require("express");

const {
  getUserById,
  createUsers,
  loginUser
} = require("../controllers/user.controllers");

const {
  userValidator,
  validationResult
} = require("../middlewares/validators.middleware");

const { validateSession } = require("../middlewares/auth.middleware");

const router = express.Router();

router.route("/").post(userValidator, validationResult, createUsers);

router.route("/login").post(loginUser);

router.use(validateSession);

router.route("/:id").get(getUserById);

module.exports = { userRouter: router };