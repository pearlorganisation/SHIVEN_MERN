import VehicleLoanPlan from "../../../Models/Service/VehicleLoan/vehicleLoan.js";
import { asyncErrorHandler } from "../../../Utils/Error/asyncErrorHandler.js";

export const createVehicleLoanPlan = asyncErrorHandler(
  async (req, res, next) => {
    const vehicleLoanPlan = await VehicleLoanPlan.create(req.body);
    if (!vehicleLoanPlan) {
      return next(new CustomError("Vehicle Loan plan is not created", 400));
    }
    return res.status(201).json({
      success: true,
      message: "Vehicle Loan plan is created",
      data: vehicleLoanPlan,
    });
  }
);

export const getAllVehicleLoanPlans = asyncErrorHandler(
  async (req, res, next) => {
    const vehicleLoanPlans = await VehicleLoanPlan.find().populate(
      "serviceType"
    );
    if (!vehicleLoanPlans) {
      return next(new CustomError("Vehicle loan plan is not found", 404));
    }
    return res.status(200).json({
      success: true,
      message: "All vehicle loan plans found successfully",
      data: vehicleLoanPlans,
    });
  }
);
