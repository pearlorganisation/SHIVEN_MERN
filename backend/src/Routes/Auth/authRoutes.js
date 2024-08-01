// ---------------------------------------------Imports--------------------------------------------------
import { Router } from "express";
import {
  login,
  logout,
  verifyLoginOtp,
} from "../../Controllers/Auth/authController.js";
import { verifyTokenMiddleware } from "../../Middlewares/Token/verifyTokenMiddleware.js";

// ------------------------------------------------------------------------------------------------------

export const authRouter = Router();
// -------------------------------------------------------------------------------------------------------

// login
authRouter.route("/login").post(login);

// verifyLoginOtp
authRouter.route("/login/verify").post(verifyLoginOtp);

// logout
authRouter.route("/logout").post(logout);
