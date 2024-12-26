// ---------------------------------------------Imports--------------------------------------------------------
import { asyncErrorHandler } from "../Utils/Error/asyncErrorHandler.js";
import {
  uploaderCloudinary,
} from "../Configs/Cloudinary/cloudinaryConfig.js";
import { CustomError } from "../Utils/Error/CustomError.js";
import brochure from "../Models/brochure.js";

// ------------------------------------------------------------------------------------------------------------

export const createTemplate = asyncErrorHandler(
  async (req, res, next) => {
    const template = await uploaderCloudinary(req.file?.path);
    const data = brochure.create({
         template: template
    });

    if (!data) {
      return next(new CustomError("Template is not added", 400));
    }

    return res.status(201).json({
      success: true,
      message: "Template Added Successfully",
    });
  }
);

export const getAllTemplate = asyncErrorHandler(
  async (req, res, next) => {
    const data = await brochure.find();

    return res.status(200).json({
      success: true,
      message: "Template Data Found Successfully",
      data,
    });
  }
);


