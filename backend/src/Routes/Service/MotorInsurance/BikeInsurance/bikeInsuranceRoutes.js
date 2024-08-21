import express from "express";
import {
  createBikeInsurancePlan,
  getAllBikeInsurancePlan,
} from "../../../../Controllers/Service/MotorInsurance/BikeInsurance/bikeInsuranceController.js";

const router = express.Router();

router
  .route("/bike-insurance")
  .post(createBikeInsurancePlan)
  .get(getAllBikeInsurancePlan);

export default router;
