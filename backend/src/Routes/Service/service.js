
import { Router } from "express";
import { getAllServices, updateService } from "../../Controllers/Service/service.js";
import upload from "../../Configs/Multer/multerConfig.js";


 const router = Router();

router.route("/:id").patch(upload.single("logo"),updateService);

router.route("/").get(getAllServices);


export default router;