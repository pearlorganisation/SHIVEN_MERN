// ---------------------------------------------Imports--------------------------------------------------
import { Router } from "express";
import { createConsultant, verifyConsultant } from "../../Controllers/Auth/consultantController.js";


// ------------------------------------------------------------------------------------------------------

const router = Router();
// -------------------------------------------------------------------------------------------------------

router.route('/').post(createConsultant);

router.route('/verify').post(verifyConsultant);

export default router;
