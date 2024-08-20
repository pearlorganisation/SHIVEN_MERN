import BikeInsurancePlan from "../../../../Models/Service/MotorInsurance/BikeInsurance/bikeInsurance.js";
import { asyncErrorHandler } from "../../../../Utils/Error/asyncErrorHandler.js";

export const createBikeInsurancePlan = asyncErrorHandler(
  async (req, res, next) => {
    const bikeInsurancePlan = await BikeInsurancePlan.create(req.body);
    if (!bikeInsurancePlan) {
      return next(new CustomError("Bike insurance plan is not created", 400));
    }
    return res.status(201).json({
      success: true,
      message: "Bike insurance plan is created",
      data: bikeInsurancePlan,
    });
  }
);
