// ----------------------------------------------Imports--------------------------------------------------------
import multer from "multer";
// -------------------------------------------------------------------------------------------------------------

const storage = multer.memoryStorage();

export const mediaUpload = multer({
  storage,
  limits: {
    fileSize: 1 * 1024 * 1024, // file of size till 1 mb is allowed
  },
  fileFilter: (req, file, cb) => {
    // filtering it to only allow below mentioned files
    let allowedMimeTypes = ["image/svg", "image/png","image/jpg","image/webp"];
    if (allowedMimeTypes.includes(file?.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid File Type", false));
    }
  },
});
