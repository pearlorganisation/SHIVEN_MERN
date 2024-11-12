// ---------------------------------------------Imports--------------------------------------------------------
import { serviceModel } from "../../Models/Service/serviceModel.js";
import { asyncErrorHandler } from "../../Utils/Error/asyncErrorHandler.js";
import { uploaderCloudinary } from "../../Configs/Cloudinary/cloudinaryConfig.js";
import { CustomError } from "../../Utils/Error/CustomError.js";
// ------------------------------------------------------------------------------------------------------------

export const updateService = asyncErrorHandler(async (req, res, next) => {
  const {id} = req?.params
  let logoResult = ""
  if(req?.file)
{ logoResult = await uploaderCloudinary(req.file?.path)}
  const existingData = serviceModel.findById(id)
if(!existingData){
  return next(new CustomError("Id is not valid",404))
}

  await serviceModel.findByIdAndUpdate(id,{
    ...req.body,
    logo: logoResult || existingData?.logo
  });

  return res.status(200).json({
    success: true,
    message: "Service Updated Successfully",
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
