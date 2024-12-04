import { Router } from "express";

import upload from "../../Configs/Multer/multerConfig.js";
import {
  createServiceProvider,
  getAllServiceProviders,
  getAllServiceProvidersForDropdown,
} from "../../Controllers/Service/serviceProvider.js";

const router = Router();

router
  .route("/")
  .get(getAllServiceProviders)
  .post(upload.single("logo"), createServiceProvider);

router.route("/dropdown/:id").get(getAllServiceProvidersForDropdown);
  

export default router;
