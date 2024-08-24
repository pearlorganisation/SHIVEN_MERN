import HealthInsuranceEnquiry from "../../../Models/Enquiry/HealthInsuranceEnquiry/healthInsuranceEnquiry.js";
import { asyncErrorHandler } from "../../../Utils/Error/asyncErrorHandler.js";

export const createHealthInsuranceEnquiry = asyncErrorHandler(
  async (req, res, next) => {
    const healthInsuranceEnuiry = await HealthInsuranceEnquiry.create(req.body);
    if (!healthInsuranceEnuiry) {
      return next(new CustomError("Enquiry is not created", 400));
    }
    return res.status(201).json({
      success: true,
      message: "Enquiry is created",
      data: healthInsuranceEnuiry,
    });
  }
);
