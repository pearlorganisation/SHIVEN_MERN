// ---------------------------------------------Imports--------------------------------------------------
import { Router } from "express";
import {
  createUser,
  getUser,
  updateUser,
} from "../../../Controllers/Auth/User/userController.js";
// ------------------------------------------------------------------------------------------------------

export const userRouter = Router();
// -------------------------------------------------------------------------------------------------------

// createUser
userRouter.route("/").post(createUser);

// getUsers
userRouter.route("/").get(getUser);

// updateUser
userRouter.route("/:userId").patch(updateUser);

// deleteUser
userRouter.route("/:userId").delete();

// getIndividualUser
userRouter.route("/:userId").get();
