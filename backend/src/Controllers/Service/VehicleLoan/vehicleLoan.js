import VehicleLoanPlan from "../../../Models/Service/VehicleLoan/vehicleLoan.js";
import { asyncErrorHandler } from "../../../Utils/Error/asyncErrorHandler.js";

export const createvehicleLoanPlan = asyncErrorHandler(
  async (req, res, next) => {
    const vehicleLoanPlan = await VehicleLoanPlan.create(req.body);
    if (!vehicleLoanPlan) {
      return next(new CustomError("Vehicle Loan plan is not created", 400));
    }
    return res.status(201).json({
      success: true,
      message: "Vehicle Loan plan is created",
      data: homeLoanPlan,
    });
  }
);
