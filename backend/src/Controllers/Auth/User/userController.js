// -----------------------------------------------Imports------------------------------------------------
import { userModel } from "../../../Models/Auth/User/userModel.js";
import { otpModel } from "../../../Models/Otp/otpModel.js";
import { CustomError } from "../../../Utils/Error/CustomError.js";
import { asyncErrorHandler } from "../../../Utils/Error/asyncErrorHandler.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { sendOtp } from "../../../Utils/Mail/Otp/sendOtp.js";
import { generateOTP } from "../../../Utils/Mail/Otp/generateOTP.js";
import moment from "moment";
// ------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

// @desc - createUser
// @method- POST
// @url - auth/user
export const createUser = asyncErrorHandler(async (req, res, next) => {
  const { userName, fullName, email, password, role } = req?.body?.payload;

  if (!userName && !fullName && !email && !password && !role) {
    const error = new CustomError("Please Fill Complete Details", 400);
    return next(error);
  }

  const userDoc = new userModel({
    userName,
    fullName,
    email,
    password,
    role,
  });

  await userDoc.save();

  return res.status(200).json({
    success: true,
    message: "User Created Successfully",
  });
});

// @desc - getUser
// @method- GET
// @url - auth/user
export const getUsers = asyncErrorHandler(async (req, res, next) => {
  const users = await userModel.find();

  return res.status(200).json({
    success: true,
    message: "Users Found Successfully",
    users,
  });
});

// @desc - updateUser
// @method - PATCH
// @url - auth/user/:userId
export const updateUser = asyncErrorHandler(async (req, res, next) => {
  const { userId } = req?.params;

  if (!userId) {
    const error = new CustomError("User Id must be provided", 400);
    return next(error);
  }

  let payload = req?.body?.payload || {};

  if (payload && payload?.password) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(payload?.password, salt);
    payload.password = hash;
  }

  const user = await userModel.findOneAndUpdate(
    { _id: userId },
    { $set: payload },
    { new: true }
  );

  if (!user) {
    const error = new CustomError("Invalid User Id", 400);
    return next(error);
  }

  return res.status(200).json({
    success: true,
    message: "User Found Successfully",
    user,
  });
});

// @desc - deleteUser
// @method - DELETE
// @url - auth/user/:userId
export const deleteUser = asyncErrorHandler(async (req, res, next) => {
  const { userId } = req?.params;

  if (!userId) {
    const error = new CustomError("User Id must be provided", 400);
    return next(error);
  }

  const user = await userModel.findOneAndDelete({ _id: userId }, { new: true });

  return res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
  });
});

// @desc - getIndividualUser
// @method - DELETE
// @url - auth/user/:userId
export const getIndividualUser = asyncErrorHandler(async (req, res, next) => {
  const { userId } = req?.params;

  if (!userId) {
    const error = new CustomError("User Id must be provided", 400);
    return next(error);
  }

  let pipeline = [
    {
      $match: {
        _id: mongoose.Types.ObjectId.createFromHexString(userId),
      },
    },
  ];

  const [user] = await userModel.aggregate(pipeline);

  return res.status(200).json({
    success: true,
    message: "User Found Successfully",
    user,
  });
});

//Controller to resend OTP
export const resendOTP = asyncErrorHandler(async (req, res, next) => {
  const { email, type } = req.body;
  const existingUser = await userModel.findOne({ email });
  if (!existingUser) {
    const error = new CustomError("User not found!", 401);
    return next(error);
  }
  const otp = generateOTP();
  const otpDoc = await otpModel.findOneAndUpdate(
    { email, type },
    { otp, expiresAt: new Date(Date.now() + 600000) },
    { $new: true }
  );

  if (!otpDoc) {
    let doc = new otpModel({
      email,
      type,
      otp,
      expiresAt: new Date(Date.now() + 600000), //10min
    });
    await doc.save();
  }
  await sendOtp(email, otp, type);
  return res.status(200).json({ success: true, message: "OTP sent again." });
});

//Controller for forgot password
export const forgotPassword = asyncErrorHandler(async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    const error = new CustomError("Email is required", 401);
    return next(error);
  }

  const existingUser = await userModel.findOne({ email });
  if (!existingUser) {
    const error = new CustomError("User not found!", 401);
    return next(error);
  }

  const currentDate = new Date();
  const otp = generateOTP();
  const otpDoc = await otpModel.findOneAndUpdate(
    { email, type: "FORGOTPASSWORD" },
    { otp, expiresAt: new Date(Date.now() + 600000) }, //10min
    { $new: true }
  );

  if (!otpDoc) {
    let doc = new otpModel({
      email,
      type: "FORGOTPASSWORD",
      otp,
      expiresAt: new Date(Date.now() + 600000), //expiry time of otp 10mins in milliseconds
    });
    await doc.save();
  }
  await sendOtp(email, otp, "FORGOTPASSWORD");
  return res
    .status(200)
    .json({ success: true, message: "OTP sent to email for password reset." });
});

//Reset Password Controller
export const resetPassword = asyncErrorHandler(async (req, res, next) => {
  const { email, newPassword, confirmNewPassword, otp } = req.body;
  if (!email) {
    const error = new CustomError("Email is required", 401);
    return next(error);
  }
  if (!otp) {
    return next(new CustomError("OTP is required", 401));
  }

  const existingUser = await userModel.findOne({ email });
  if (!existingUser) {
    const error = new CustomError("User not found!", 401);
    return next(error);
  }

  //Verify OTP
  const otpDoc = await otpModel.findOne({ email, type: "FORGOTPASSWORD" });
  if (!otpDoc) {
    return next(new CustomError("OTP not found or expired", 401));
  }

  if (otpDoc.otp !== otp) {
    return next(new CustomError("Invalid OTP", 401));
  }
  if (new Date() > otpDoc.expiresAt) {
    await otpDoc.deleteOne();
    return next(new CustomError("OTP has expired", 401));
  }
  if (newPassword !== confirmNewPassword) {
    const error = new CustomError("Password does not match.", 401);
    return next(error);
  }

  existingUser.password = newPassword;
  await existingUser.save();
  await otpDoc.deleteOne();
  return res
    .status(200)
    .json({ success: true, message: "Password reset successfully." });
});
