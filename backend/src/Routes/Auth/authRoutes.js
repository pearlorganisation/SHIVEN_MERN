// ---------------------------------------------Imports--------------------------------------------------
import { Router } from "express";
import {
  changePassword,
  forgotPassword,
  login,
  logout,
  verifyForgotPasswordOtp,
  verifyLoginOtp,
} from "../../Controllers/Auth/authController.js";
import { verifyTokenMiddleware } from "../../Middlewares/Token/verifyTokenMiddleware.js";

// ------------------------------------------------------------------------------------------------------

export const authRouter = Router();
// -------------------------------------------------------------------------------------------------------

// login
authRouter.route("/login").post(login);
authRouter.route("/forgotPassword").post(forgotPassword);
authRouter.route("/verifyForgotPassword").post(verifyForgotPasswordOtp);
authRouter.route("/changePassword").post(changePassword);

// verifyLoginOtp
authRouter.route("/login/verify").post(verifyLoginOtp);

// logout
authRouter.route("/logout").post(logout);
