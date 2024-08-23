import express from "express";
import {
  createWholeLifeInsurenceServicePlan,
  deleteWholeLifeInsurenceServicePlan,
  getAllWholeLifeInsurenceServicePlans,
} from "../../../Controllers/Service/WholeLifeInsurence/wholeLifeInsurenceController.js";

const router = express.Router();

router
  .route("/")
  .post(createWholeLifeInsurenceServicePlan)
  .get(getAllWholeLifeInsurenceServicePlans);

router.route("/:id").delete(deleteWholeLifeInsurenceServicePlan);
export default router;
