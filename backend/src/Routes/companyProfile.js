import { Router } from "express";
import { createAndUpdateCompanyProfile, getParticularCompanyProfile } from "../Controllers/companyProfile.js";


const router = Router();

router
  .route("/")
  .post(createAndUpdateCompanyProfile);
router
  .route("/:id")
  .get(getParticularCompanyProfile)
  

export default router;
