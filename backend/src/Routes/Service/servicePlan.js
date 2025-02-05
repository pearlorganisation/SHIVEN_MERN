import { Router } from "express";
import {
  createCustomisedPlan,
  createServicePlan,
  getAllServicePlan,
  getServicePlanByServiceType,
} from "../../Controllers/Service/servicePlan.js";

const router = Router();

router.route("/").get(getAllServicePlan).post(createServicePlan);

router.route("/customised").post(createCustomisedPlan)
router.route("/:id").get(getServicePlanByServiceType)

export default router;