// -------------------------------------------Imports------------------------------------------------------
import { mediaUpload } from "../../Configs/Multer/multerConfig.js";
import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
// import { v2 as cloudinary } from "cloudinary";
import { cloudinaryConfig } from "../../Configs/Cloudinary/cloudinaryConfig.js";
import { CustomError } from "../../Utils/Error/CustomError.js";
// --------------------------------------------------------------------------------------------------------
const __dirname = dirname(fileURLToPath(import.meta.url));
let localUploadDirPath = path.join(__dirname, "../../Uploads");
// --------------------------------------------------------------------------------------------------------

// multerLocalUpload -- function to upload the media file to the local system
export const multerLocalUpload = (req, res, next) => {
  try {
    mediaUpload.single("mediaFile")(req, res, (error) => {
      if (error) {
        return next(
          new CustomError(`Error Uploading File! ${error.message}`, 400)
        );
      }

      let originalName = req?.file.originalname;
      let newFileName = `${Date.now() + "-" + originalName}`;
      let fileBuffer = req?.file?.buffer;
      req.newFileName = newFileName;
      localUploadDirPath = path.join(localUploadDirPath, newFileName);

      fs.writeFile(localUploadDirPath, fileBuffer, (err) => {
        if (err) {
          return next(
            new CustomError(`Error Uploading File! ${err.message}`, 400)
          );
        }
        next();
      });
    });
  } catch (error) {
    return next(
      new CustomError(`Internal Server Error! ${error.message}`, 500)
    );
  }
};

// multerCloudinaryUpload -- function to upload the media file directly to the cloudinary storage
export const multerCloudinaryUpload = (req, res, next) => {
  try {
    let cloudinary = cloudinaryConfig();
    mediaUpload.single("mediaFile")(req, res, (error) => {
      if (error) {
        return next(
          new CustomError(`Error Uploading File! ${error.message}`, 400)
        );
      }

      if (req?.file) {
        let originalName = req?.file.originalname;
        let newFileName = `${Date.now() + "-" + originalName}`;
        let fileBuffer = req?.file?.buffer;
        req.newFileName = newFileName;

        cloudinary?.uploader
          ?.upload_stream(
            { folder: "SHIVEN_MEDIA", unique_filename: true },
            (error, result) => {
              if (error) {
                console.log("error", error.message);
                return new CustomError(
                  `Error Uploading File! ${error.message}`,
                  400
                );
              } else {
                console.log("File Uploaded Successfully");
                req.uploadedMediaFile = result;
                return next();
              }
            }
          )
          .end(fileBuffer);
      } else {
        req.uploadedMediaFile = null;
        return next();
      }
    });
  } catch (error) {
    console.log(error.message);
    return next(
      new CustomError(`Internal Server Error! ${error.message}`, 500)
    );
  }
};
