// -----------------------------------------------Imports------------------------------------------------
import { pick } from "lodash-es";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { asyncErrorHandler } from "../../Utils/Error/asyncErrorHandler.js";
import { userModel } from "../../Models/Auth/User/userModel.js";
import { CustomError } from "../../Utils/Error/CustomError.js";
import { sendOtp } from "../../Utils/Mail/Otp/sendOtp.js";
import { otpModel } from "../../Models/Otp/otpModel.js";
import moment from "moment";
import jsonwebtoken from "jsonwebtoken";
import { saveAccessTokenToCookie } from "../../Utils/index.js";
import { generateOTP } from "../../Utils/Mail/Otp/generateOTP.js";
// ------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

// @desc - login
// @method- POST
// @url - auth/login
export const login = asyncErrorHandler(async (req, res, next) => {
  const { email, password } = req?.body;
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
  const otp = generateOTP();
  const otpDoc = await otpModel.findOneAndUpdate(
    { email, type: "LOGIN" },
    { otp, expiresAt: new Date(Date.now() + 600000) },
    { $new: true }
  );

  if (!otpDoc) {
    let doc = new otpModel({
      email,
      type: "LOGIN",
      otp,
      expiresAt: new Date(Date.now() + 600000), //10min
    });
    await doc.save();
  }
  await sendOtp(email, otp, "LOGIN");
  await otpDoc.save();

  return res.status(200).json({
    status: true,
    message: "Otp for mail verification sent successfully",
  });
});

// @desc - login otp verification
// @method- POST
// @url - auth/login/verify
export const verifyLoginOtp = asyncErrorHandler(async (req, res, next) => {
  const { email, otp } = req?.body;

  if (!email || !otp) {
    const error = new CustomError(
      "Please Provide Email/Otp for logging in",
      400
    );
    return next(error);
  }

  const otpDoc = await otpModel.findOne({ email });

  if (!otpDoc) {
    const error = new CustomError("No such Email exists");
    next(error);
  }

  let currentDate = moment();
  let expiresAt = moment(otpDoc.expiresAt);

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
// @method- POST
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
