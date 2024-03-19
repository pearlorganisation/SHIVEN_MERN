// -----------------------------------------------Imports------------------------------------------------
import { userModel } from "../../../Models/Auth/User/userModel.js";
import { CustomError } from "../../../Utils/Error/CustomError.js";
import { asyncErrorHandler } from "../../../Utils/Error/asyncErrorHandler.js";
import { pick } from "lodash-es";
import mongoose from "mongoose";
// ------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------
const { ObjectId } = mongoose.Types;
// ------------------------------------------------------------------------------------------------------

// @desc - createUser
//@method- POST
// @url - auth/user
export const createUser = asyncErrorHandler(async (req, res, next) => {
  const { name, email, password, role } = req?.body?.payload;

  if (!name || !email || !password || !role) {
    const error = new CustomError("Please Fill Complete Details", 400);
    return next(error);
  }

  const payload = pick(req?.body?.payload, [
    "name",
    "email",
    "password",
    "role",
  ]);

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
export const getUser = asyncErrorHandler(async (req, res, next) => {
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

  const payload = req?.body?.payload || {};

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
