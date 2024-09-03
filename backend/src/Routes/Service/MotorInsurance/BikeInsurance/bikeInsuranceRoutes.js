import express from "express";
import {
  createBikeInsurancePlan,
  deleteBikeInsurancePlan,
  getAllBikeInsurancePlan,
} from "../../../../Controllers/Service/MotorInsurance/BikeInsurance/bikeInsuranceController.js";

const router = express.Router();

router
  .route("/bike-insurance")
  .post(createBikeInsurancePlan)
  .get(getAllBikeInsurancePlan);

router.route("/:id").delete(deleteBikeInsurancePlan);

export default router;
