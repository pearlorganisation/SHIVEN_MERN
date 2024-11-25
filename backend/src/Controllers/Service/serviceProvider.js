// ---------------------------------------------Imports--------------------------------------------------------
import { asyncErrorHandler } from "../../Utils/Error/asyncErrorHandler.js";
import {
  cloudinary,
  uploaderCloudinary,
} from "../../Configs/Cloudinary/cloudinaryConfig.js";
import serviceProviderModel from "../../Models/Service/serviceProviderModel.js";
import { CustomError } from "../../Utils/Error/CustomError.js";

// ------------------------------------------------------------------------------------------------------------

export const createServiceProvider = asyncErrorHandler(
  async (req, res, next) => {
    const logo = await uploaderCloudinary(req.file?.path);
    const serviceProviderDoc = serviceProviderModel.create({
      ...req.body,
      logo: logo,
      service: JSON.parse(req?.body?.service),
    });

    if (!serviceProviderDoc) {
      return next(new CustomError("Service Provider is not created", 400));
    }

    return res.status(201).json({
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
