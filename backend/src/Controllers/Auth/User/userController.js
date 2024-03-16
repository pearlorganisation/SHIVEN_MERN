// -----------------------------------------------Imports------------------------------------------------
import { userModel } from "../../../Models/Auth/User/userModel";
import { CustomError } from "../../../Utils/Error/CustomError";
import { asyncErrorHandler } from "../../../Utils/Error/asyncErrorHandler";
import { pick } from "lodash-es";
// ------------------------------------------------------------------------------------------------------

// @desc - createUser
//@method- POST
// @url - /user

export const createUser = asyncErrorHandler(async (req, res, next) => {
  const { name, email, password } = req?.body?.payload;

  if (!name || !email || !password || !role) {
    const error = new CustomError("Please Fill Complete Details", 400);
    return next(error);
  }

  const payload = pick(req?.body?.payload, ["name", "email", "password"]);

  const userDoc = new userModel(payload);

  await userDoc.save();

  return res.status(200).json({
    success: true,
    message: "User Created Successfully",
  });
});
