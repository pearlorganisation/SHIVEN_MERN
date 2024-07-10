
import { Router } from "express";
import { createService, getAllServices } from "../../Controllers/Service/service.js";
import upload from "../../Configs/Multer/multerConfig.js";


 const router = Router();

router.route("/").post(upload.single("logo"),createService);

router.route("/").get(getAllServices);


export default router;