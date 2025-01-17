import { Router } from "express";
import { createAndUpdateConsultantProfile, getParticularConsultantProfile } from "../Controllers/consultantProfile.js";

const router = Router();

router
  .route("/")
  .post(createAndUpdateConsultantProfile);
router
  .route("/:id")
  .get(getParticularConsultantProfile)
  

export default router;
