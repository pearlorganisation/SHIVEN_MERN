// ---------------------------------------------Imports--------------------------------------------------------
import { asyncErrorHandler } from "../Utils/Error/asyncErrorHandler.js";
import { uploaderCloudinary} from "../Configs/Cloudinary/cloudinaryConfig.js";
import { CustomError } from "../Utils/Error/CustomError.js";
import customisedForm from "../Models/customisedForm.js";


// ------------------------------------------------------------------------------------------------------------

export const createCustomisedForm = asyncErrorHandler(
  async (req, res, next) => {
    let pdf
    if(req.file?.path)
    { pdf = await uploaderCloudinary(req.file?.path);}

    const data =  customisedForm.create({
        ...req?.body,
         pdf: pdf || null,
    });

    return res.status(201).json({
      success: true,
      message: "Customised Form Added Successfully",
    });
  }
);

export const getAllCustomisedForm = asyncErrorHandler(
  async (req, res, next) => {
    const data = await customisedForm.find();

    return res.status(200).json({
      success: true,
      message: "Customised Form Data Found Successfully",
      data,
    });
  }
);


