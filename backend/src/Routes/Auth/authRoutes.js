// ---------------------------------------------Imports--------------------------------------------------
import { Router } from "express";
import {
  login,
  verifyLoginOtp,
} from "../../Controllers/Auth/authController.js";

// ------------------------------------------------------------------------------------------------------

export const authRouter = Router();
// -------------------------------------------------------------------------------------------------------

// login
authRouter.route("/login").post(login);

// verifyLoginOtp
authRouter.route("/login/verify").post(verifyLoginOtp);
