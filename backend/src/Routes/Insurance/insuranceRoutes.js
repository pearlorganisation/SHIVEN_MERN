// ----------------------------------------------Imports-----------------------------------------------------
import { Router } from "express";
import {
  createInsurance,
  getInsurances,
} from "../../Controllers/Insurance/insuranceController.js";
import {
  multerCloudinaryUpload,
  multerLocalUpload,
} from "../../Middlewares/Multer/multerUpload.js";
import {
  createInsuranceServiceProvider,
  getInsuranceServiceProviders,
} from "../../Controllers/Insurance/insuranceServiceProviderController.js";
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
export const insuranceRouter = Router();
// ----------------------------------------------------------------------------------------------------------

// createInsurance
insuranceRouter.route("/").post(multerCloudinaryUpload, createInsurance);

// getInsurances
insuranceRouter.route("/").get(getInsurances);

// ---------------------------------Insurance Service Provider Routes----------------------------------------

// createInsurance
insuranceRouter
  .route("/service_provider")
  .post(multerCloudinaryUpload, createInsuranceServiceProvider);

// getInsurances
insuranceRouter.route("/service_provider").get(getInsuranceServiceProviders);
