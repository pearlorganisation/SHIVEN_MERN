import express from "express";
import { createWholeLifeInsurenceServicePlan } from "../../../Controllers/Service/WholeLifeInsurence/wholeLifeInsurenceController.js";

const router = express.Router();

router.route("/").post(createWholeLifeInsurenceServicePlan);
//   .get(getAllWholeLifeInsurenceServicePlans);

export default router;
