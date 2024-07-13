// ---------------------------------------------Imports--------------------------------------------------------
import { asyncErrorHandler } from "../../Utils/Error/asyncErrorHandler.js";
import {cloudinary} from "../../Configs/Cloudinary/cloudinaryConfig.js";
import serviceProviderModel from "../../Models/Service/serviceProviderModel.js";

// ------------------------------------------------------------------------------------------------------------

export const createServiceProvider = asyncErrorHandler(
  async (req, res, next) => {
    
    const logo= req?.file
  
  const logoResult = await cloudinary.uploader.upload(logo.path);     // Upload files to Cloudinary
  
  
 const data = new serviceProviderModel({...req?.body,
  logo: logoResult?.secure_url
 })

 await data.save();

    return res.status(200).json({
      success: true,
      message: "Service Provider Created Successfully",
    });
  }
);

export const getAllServiceProviders = asyncErrorHandler(
  async (req, res, next) => {
    const data = await serviceProviderModel.find();

    return res.status(200).json({
      success: true,
      message: "Service Provider Data Found Successfully",
      data,
    });
  }
);
