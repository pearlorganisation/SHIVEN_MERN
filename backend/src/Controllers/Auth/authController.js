// -----------------------------------------------Imports------------------------------------------------
import { pick } from "lodash-es";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { asyncErrorHandler } from "../../Utils/Error/asyncErrorHandler.js";
import { userModel } from "../../Models/Auth/User/userModel.js";
import { CustomError } from "../../Utils/Error/CustomError.js";
import { sendLoginOtp } from "../../Utils/Mail/Otp/sendLoginOtp.js";
import { loginOtpModel } from "../../Models/Otp/loginOtpModel.js";
import moment from "moment";
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

  const mailExistence = await loginOtpModel.findOneAndDelete({ email }); // replacing the previous otp

  let otp = ""; // creating a 6 digit otp

  for (let i = 0; i < 6; i++) {
    otp += Math.floor(Math.random() * 10);
  }

  let currentDate = moment(); // hold current date
  let expiresAt = currentDate.add(1, "m").toISOString(); //  adding one minute to the current otp creation date

  const otpDoc = new loginOtpModel({ otp, email, expiresAt });

  await otpDoc.save();
  await sendLoginOtp(email, otp);

  return res.status(200).json({
    success: true,
    message: "Otp for mail verification sent successfully",
  });
});
