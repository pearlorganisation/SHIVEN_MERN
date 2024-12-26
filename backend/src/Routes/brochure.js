import { Router } from "express";

import upload from "../Configs/Multer/multerConfig.js";
import { createTemplate, getAllTemplate } from "../Controllers/brochure.js";


const router = Router();

router
  .route("/")
  .get(getAllTemplate)
  .post(upload.single("template"), createTemplate);
  

export default router;
