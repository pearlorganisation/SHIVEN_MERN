import {Router} from "express";
import { createServicePlan, getAllServicePlan } from "../../Controllers/Service/servicePlan.js";


const router = Router();

router.route("/").get(getAllServicePlan).post(createServicePlan)


export default router;