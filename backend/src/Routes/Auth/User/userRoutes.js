// ---------------------------------------------Imports--------------------------------------------------
import { Router } from "express";
// ------------------------------------------------------------------------------------------------------

export const userRouter = Router();
// -------------------------------------------------------------------------------------------------------

// createUser
userRouter.route("/").post();

// getUsers
userRouter.route("/").get();

// updateUser
userRouter.route("/:userId").patch();

// deleteUser
userRouter.route("/:userId").delete();

// getIndividualUser
userRouter.route("/:userId").get();
