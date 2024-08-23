// ---------------------------------------------Imports--------------------------------------------------
import { Router } from "express";
import {
  createUser,
  deleteUser,
  getIndividualUser,
  getUsers,
  updateUser,
  resendOTP,
  forgotPassword,
  resetPassword,
} from "../../../Controllers/Auth/User/userController.js";
// ------------------------------------------------------------------------------------------------------

export const userRouter = Router();
// -------------------------------------------------------------------------------------------------------

// createUser
userRouter.route("/").post(createUser);

// getUsers
userRouter.route("/").get(getUsers);

// updateUser
userRouter.route("/:userId").patch(updateUser);

// deleteUser
userRouter.route("/:userId").delete(deleteUser);

// getIndividualUser
userRouter.route("/:userId").get(getIndividualUser);

userRouter.route("/resend-otp").post(resendOTP);

userRouter.route("/forgot-password").post(forgotPassword);
userRouter.route("/reset-password").post(resetPassword);
