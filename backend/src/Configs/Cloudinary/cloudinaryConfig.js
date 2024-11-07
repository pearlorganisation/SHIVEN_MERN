// ------------------------------------------------Imports-----------------------------------------------------
import { v2 as cloudinary } from "cloudinary";
import { envAccess } from "../../Utils/index.js";
// ------------------------------------------------------------------------------------------------------------

// cloudinary avnish configurations

  cloudinary.config({
    cloud_name: envAccess("CLOUDINARY_CLOUD_NAME"),
    api_key: envAccess("CLOUDINARY_API_KEY"),
    api_secret: envAccess("CLOUDINARY_API_SECRET"),
  });

  const uploaderCloudinary= async(filePath)=>{
 try{
  const result = await cloudinary.uploader.upload(filePath, {
    folder: "Shiven Consultancy",
    quality:"70"
  });
  return {public_id:result.public_id,
    secure_url:result.secure_url
  }
 }
 catch(error){
  console.error("Upload error:", error);
  throw new Error("Cloudinary upload failed");
 }
  }



  export {cloudinary,uploaderCloudinary};
