import express from "express";
import { createMutualFundServicePlan } from "../../../Controllers/Service/MutualFundController/mutualFundController.js";

const router = express.Router();

router.route("/").post(createMutualFundServicePlan);

export default router;
