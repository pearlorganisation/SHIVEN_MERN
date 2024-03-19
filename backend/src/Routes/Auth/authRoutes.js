// ---------------------------------------------Imports--------------------------------------------------
import { Router } from "express";
import { login } from "../../Controllers/Auth/authController.js";

// ------------------------------------------------------------------------------------------------------

export const authRouter = Router();
// -------------------------------------------------------------------------------------------------------

// login
authRouter.route("/").post(login);
