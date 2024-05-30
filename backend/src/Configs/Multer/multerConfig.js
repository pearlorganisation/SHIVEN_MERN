// ----------------------------------------------Imports--------------------------------------------------------
import multer from "multer";
// -------------------------------------------------------------------------------------------------------------

const storage = multer.memoryStorage();

export const mediaUpload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // only 5 mb of file is allowed
  },
  fileFilter: (req, file, cb) => {
    // filtering it to only allow below mentioned files
    let allowedMimeTypes = ["image/svg", "image/png"];
    if (allowedMimeTypes.includes(file?.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid File Type", false));
    }
  },
});
