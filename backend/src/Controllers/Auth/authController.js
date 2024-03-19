// -----------------------------------------------Imports------------------------------------------------
import { pick } from "lodash-es";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { asyncErrorHandler } from "../../Utils/Error/asyncErrorHandler.js";
import { userModel } from "../../Models/Auth/User/userModel.js";
import { CustomError } from "../../Utils/Error/CustomError.js";
// ------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

// @desc - login
//@method- POST
// @url - auth/login
export const login = asyncErrorHandler(async (req, res, next) => {
  const { email, password } = req?.body?.payload;

  if (!email || !password) {
    const error = new CustomError(
      "Please Provide Email/Password for logging in",
      400
    );
    return next(error);
  }

  const user = await userModel.findOne({ email });

  if (!user) {
    const error = new CustomError("No Such Account Exists", 400);
    return next(error);
  }

  const comparison = await bcrypt.compare(password, user?.password);

  if (!comparison) {
    const error = new CustomError("Invalid Email/Password", 400);
    return next(error);
  }

  console.log(comparison);
});
