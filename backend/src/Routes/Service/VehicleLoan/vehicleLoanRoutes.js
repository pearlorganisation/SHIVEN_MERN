import express from "express";
import { createVehicleLoanPlan, getAllVehicleLoanPlans, } from "../../../Controllers/Service/VehicleLoan/vehicleLoan.js";

const router = express.Router();

router.route("/").post(createVehicleLoanPlan).get(getAllVehicleLoanPlans);

export default router;
