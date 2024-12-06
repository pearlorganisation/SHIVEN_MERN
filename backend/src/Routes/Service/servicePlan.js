import { Router } from "express";
import {
  createCustomisedPlan,
  createServicePlan,
  getAllServicePlan,
} from "../../Controllers/Service/servicePlan.js";

const router = Router();

router.route("/").get(getAllServicePlan).post(createServicePlan);

router.route("/customised").post(createCustomisedPlan)

export default router;