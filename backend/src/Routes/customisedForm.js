import { Router } from "express";

import upload from "../Configs/Multer/multerConfig.js";
import { createCustomisedForm, getAllCustomisedForm } from "../Controllers/customisedForm.js";



const router = Router();

router
  .route("/")
  .get(getAllCustomisedForm)
  .post(upload.single("pdf"), createCustomisedForm);
  

export default router;
