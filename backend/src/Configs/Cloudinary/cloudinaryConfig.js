// ------------------------------------------------Imports-----------------------------------------------------
import { v2 as cloudinary } from "cloudinary";
import { envAccess } from "../../Utils/index.js";
// ------------------------------------------------------------------------------------------------------------

// cloudinary configurations

  cloudinary.config({
    cloud_name: envAccess("CLOUDINARY_CLOUD_NAME"),
    api_key: envAccess("CLOUDINARY_API_KEY"),
    api_secret: envAccess("CLOUDINARY_API_SECRET"),
  });

  export {cloudinary};
