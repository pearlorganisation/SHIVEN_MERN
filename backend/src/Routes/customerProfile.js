import { Router } from "express";
import { createCustomerProfile, deleteCustomerProfiles, getParticularCustomerProfiles } from "../Controllers/customerProfile.js";




const router = Router();

router
  .route("/")
  .post(createCustomerProfile);
router
  .route("/:id")
  .get(getParticularCustomerProfiles).delete(deleteCustomerProfiles);
  

export default router;
