// ----------------------------------------------Imports-----------------------------------------------------
import { Router } from "express";
import { createInsurance } from "../../Controllers/Insurance/insuranceController.js";
import { multerCloudinaryUpload, multerLocalUpload } from "../../Middlewares/Multer/multerUpload.js";
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
export const insuranceRouter = Router();
// ----------------------------------------------------------------------------------------------------------

// createInsurance
insuranceRouter.route("/").post(multerCloudinaryUpload, createInsurance);
