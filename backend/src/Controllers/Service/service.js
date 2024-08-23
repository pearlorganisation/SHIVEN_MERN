// ---------------------------------------------Imports--------------------------------------------------------
import { serviceModel } from "../../Models/Service/serviceModel.js";
import { asyncErrorHandler } from "../../Utils/Error/asyncErrorHandler.js";
import { cloudinary } from "../../Configs/Cloudinary/cloudinaryConfig.js";
// ------------------------------------------------------------------------------------------------------------

export const createService = asyncErrorHandler(async (req, res, next) => {
  const logo = req?.file;
  const logoResult = await cloudinary.uploader.upload(logo.path); // Upload files to Cloudinary

  const data = new serviceModel({ ...req?.body, logo: logoResult?.secure_url });
  await data.save();
  return res.status(200).json({
    success: true,
    message: "Service Created Successfully",
  });
});

export const getAllServices = asyncErrorHandler(async (req, res, next) => {
  const data = await serviceModel.find();

  return res.status(200).json({
    success: true,
    message: "Insurance Data Found Successfully",
    data,
  });
});
