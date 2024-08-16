import express from "express";
import {
  createHomeLoanPlan,
  deleteHomeLoanPlan,
  getAllHomeLoanPlans,
} from "../../../Controllers/Service/HomeLoan/homeLoanController.js";

const router = express.Router();

router.route("/").post(createHomeLoanPlan).get(getAllHomeLoanPlans);
router.route("/:id").delete(deleteHomeLoanPlan);

export default router;
