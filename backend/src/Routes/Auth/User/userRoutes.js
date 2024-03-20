// ---------------------------------------------Imports--------------------------------------------------
import { Router } from "express";
import {
  createUser,
  deleteUser,
  getIndividualUser,
  getUsers,
  updateUser,
} from "../../../Controllers/Auth/User/userController.js";
// ------------------------------------------------------------------------------------------------------

export const userRouter = Router();
// -------------------------------------------------------------------------------------------------------

// createUser
userRouter.route("/").post(createUser);

// getUsers
userRouter.route("/").get(getUsers);

// updateUser
userRouter.route("/:userId").patch(updateUser);

// deleteUser
userRouter.route("/:userId").delete(deleteUser);

// getIndividualUser
userRouter.route("/:userId").get(getIndividualUser);
