import express from "express";
import {
  createMutualFundServicePlan,
  deleteMutualFundServicePlan,
  getAllMutualFundServicePlans,
} from "../../../Controllers/Service/MutualFund/mutualFundController.js";

const router = express.Router();

router
  .route("/")
  .post(createMutualFundServicePlan)
  .get(getAllMutualFundServicePlans);

router.route("/:id").delete(deleteMutualFundServicePlan);

export default router;
