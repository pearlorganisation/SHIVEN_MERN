import { Router } from "express";

import upload from "../../Configs/Multer/multerConfig.js";
import {
  createServiceProvider,
  getAllServiceProviders,
} from "../../Controllers/Service/serviceProvider.js";

const router = Router();

router
  .route("/")
  .get(getAllServiceProviders)
  .post(upload.single("logo"), createServiceProvider);
  

export default router;
