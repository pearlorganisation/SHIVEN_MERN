import express from "express";
import { createBikeInsurancePlan } from "../../../../Controllers/Service/MotorInsurance/BikeInsurance/bikeInsuranceController.js";

const router = express.Router();

router.route("/bike-insurance").post(createBikeInsurancePlan);

export default router;
