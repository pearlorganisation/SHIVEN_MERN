import { Router } from "express";

import upload from "../Configs/Multer/multerConfig.js";
import { createOrAddFileToFolder, deleteFile, deleteFolder, getFilesAndFolders, getPublicFilesAndFolders, renameFile, renameFolder, updateFolderPrivacy } from "../Controllers/filesAndFolders.js";




const router = Router();

router
  .route("/")
  .post(upload.single("pdf"), createOrAddFileToFolder);
router
  .route("/:id")
  .get(getFilesAndFolders);
router
  .route("/public/:id")
  .get(getPublicFilesAndFolders);
router
  .route("/rename")
  .patch(renameFolder);
router
  .route("/renameFile")
  .patch(renameFile);
router
  .route("/updatePrivacy")
  .patch(updateFolderPrivacy);
router
  .route("/deleteFolder")
  .patch(deleteFolder);
router
  .route("/deleteFile")
  .patch(deleteFile);
  

export default router;
