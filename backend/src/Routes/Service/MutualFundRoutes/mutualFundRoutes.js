import express from "express";
import {
  createMutualFundServicePlan,
  getAllMutualFundServicePlans,
} from "../../../Controllers/Service/MutualFundController/mutualFundController.js";

const router = express.Router();

router
  .route("/")
  .post(createMutualFundServicePlan)
  .get(getAllMutualFundServicePlans);

export default router;
