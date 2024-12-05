// ---------------------------------------------Imports--------------------------------------------------
import { Router } from "express";
import {
  createConsultant,
  verifyConsultant,
  getConsultants,
  updateConsultantStatus,
  getConsultantWithPopulated,
  updateConsultant,
} from "../../Controllers/Auth/consultantController.js";
import { verifyTokenMiddleware } from "../../Middlewares/Token/verifyTokenMiddleware.js";

// ------------------------------------------------------------------------------------------------------

const router = Router();
// ------------------------------------------------------------------------------------------------------

router.route("/").post(createConsultant).get(getConsultants);

router
  .route("/verify/:id")
  .post(verifyConsultant)
  .patch(updateConsultantStatus);

  router.route("/:id").get(getConsultantWithPopulated).patch(updateConsultant)

export default router;
