import express from "express";
import { createvehicleLoanPlan } from "../../../Controllers/Service/VehicleLoan/vehicleLoan.js";

const router = express.Router();

router.route("/").post(createvehicleLoanPlan);

export default router;
