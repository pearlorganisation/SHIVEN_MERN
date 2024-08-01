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
import jsonwebtoken from "jsonwebtoken";
import { saveAccessTokenToCookie } from "../../Utils/index.js";
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

  let otp = ""; // creating a 4 digit otp

  for (let i = 0; i < 4; i++) {
    otp += Math.floor(Math.random() * 10);
  }

  let currentDate = moment(); // hold current date
  let expiresAt = currentDate.add(10, "m").toISOString(); //  adding one minute to the current otp creation date
  console.log(expiresAt);
  const otpDoc = new loginOtpModel({ otp, email, expiresAt });

  await otpDoc.save();
  await sendLoginOtp(email, otp);

  return res.status(200).json({
    success: true,
    message: "Otp for mail verification sent successfully",
  });
});

// @desc - login otp verification
//@method- POST
// @url - auth/login/verify
export const verifyLoginOtp = asyncErrorHandler(async (req, res, next) => {
  const { email, otp } = req?.body?.payload;

  if (!email || !otp) {
    const error = new CustomError(
      "Please Provide Email/Otp for logging in",
      400
    );
    return next(error);
  }

  const otpDoc = await loginOtpModel.findOne({ email });

  if (!otpDoc) {
    const error = new CustomError("No such Email exists");
    next(error);
  }

  let currentDate = moment();
  let expiresAt = moment(otpDoc.expiresAt);
  console.log(`Current date: ${currentDate.toISOString()}`);
  console.log(`OTP expires at: ${expiresAt.toISOString()}`);

  if (currentDate.isBefore(expiresAt)) {
    // response -- generic response for the login success or failure
    let response = (statusCode, succ, msg) => {
      return res.status(statusCode).json({
        success: succ,
        message: msg,
      });
    };

    // comparing the otp with the stored otp
    if (otp === otpDoc.otp) {
      const jwt = jsonwebtoken;

      const userDoc = await userModel.findOne({ email });

      const token = jwt.sign(
        {
          userId: userDoc?._id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.ACCESS_TOKEN_VALIDITY,
        }
      );

      saveAccessTokenToCookie(res, token);

      response(200, true, "Login Successful");
    } else {
      response(400, false, "Invalid Otp");
    }
  } else {
    const error = new CustomError("Otp Expired! Resend Otp");
    next(error);
  }
});

// @desc - logout
//@method- POST
// @url - auth/logout
export const logout = asyncErrorHandler(async (req, res, next) => {
  res.clearCookie("SHIVEN_ACCESS_TOKEN");

  return res.status(200).json({
    success: true,
    message: "Logged Out Successfully",
  });
});

// @desc - logout
//@method- POST
// @url - auth/refreshToken
export const refreshToken = asyncErrorHandler(async (req, res, next) => {
  console.log(req?.userId);
  return res.status(200).json({
    success: true,
    message: "Logged Out Successfully",
  });
});
