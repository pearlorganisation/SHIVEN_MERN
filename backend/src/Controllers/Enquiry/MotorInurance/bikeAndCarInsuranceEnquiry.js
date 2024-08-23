import BikeAndCarInsuranceEnquiry from "../../../Models/Enquiry/MotorInsuranceEnquiry/bikeAndCarInsuranceEnquiry.js";
import { asyncErrorHandler } from "../../../Utils/Error/asyncErrorHandler.js";
import { CustomError } from "../../../Utils/Error/CustomError.js";

export const createBikeAndCarInsuranceEnquiry = asyncErrorHandler(
  async (req, res, next) => {
    const bikeAndCarInsuranceEnquiry = await BikeAndCarInsuranceEnquiry.create(
      req.body
    );
    if (!bikeAndCarInsuranceEnquiry) {
      return next(new CustomError("Enquiry is not created", 400));
    }
    return res.status(201).json({
      success: true,
      message: "Enquiry is created",
      data: bikeAndCarInsuranceEnquiry,
    });
  }
);
