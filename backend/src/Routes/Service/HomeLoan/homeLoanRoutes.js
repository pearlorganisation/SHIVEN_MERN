import express from "express";
import { createHomeLoanPlan } from "../../../Controllers/Service/HomeLoan/homeLoanController.js";

const router = express.Router();

router.route("/").post(createHomeLoanPlan).get();

export default router;
