import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);

//first goes through the isAuthenticated middleware,
//which checks if the user is logged in (authenticated).
//If the user is authenticated, the updateProfile function
//runs to handle updating the user’s profile.
router.route("/profile/update").post(isAuthenticated, updateProfile);

export default router;
