// -----------------------------------------------Imports------------------------------------------------
import { userModel } from "../../../Models/Auth/User/userModel.js";
import { CustomError } from "../../../Utils/Error/CustomError.js";
import { asyncErrorHandler } from "../../../Utils/Error/asyncErrorHandler.js";
import { pick } from "lodash-es";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
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

  const payload = pick(req?.body?.payload, [
    "userName",
    "fullName",
    "email",
    "password",
    "role",
  ]);

  console.log(payload);

  const userDoc = new userModel(payload);

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
