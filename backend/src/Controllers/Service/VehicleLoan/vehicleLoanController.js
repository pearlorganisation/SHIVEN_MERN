import VehicleLoanPlan from "../../../Models/Service/VehicleLoan/vehicleLoan.js";
import { asyncErrorHandler } from "../../../Utils/Error/asyncErrorHandler.js";
import { CustomError } from "../../../Utils/Error/CustomError.js";

export const createVehicleLoanPlan = asyncErrorHandler(
  async (req, res, next) => {
    const {
      serviceProvider,
      planName,
      serviceType,
      interestRate,
      processingFee,
      tenure,
      upTo,
      vehicleType,
    } = req.body;

    // Check if any required field is empty or missing
    if (
      [
        serviceProvider,
        planName,
        serviceType,
        interestRate,
        processingFee,
        tenure,
        upTo,
        vehicleType,
      ].some(
        (field) =>
          field === undefined ||
          field === null ||
          field?.toString().trim() === ""
      )
    ) {
      return next(new CustomError("All fields are required", 400));
    }

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
    const vehicleLoanPlans = await VehicleLoanPlan.find()
      .populate([{ path: "serviceType" }, { path: "serviceProvider" }])
      .exec();
    if (!vehicleLoanPlans) {
      return next(new CustomError("Vehicle loan plan is not found", 404));
    }
    return res.status(200).json({
      success: true,
      message: "All Vehicle loan plans fetched successfully",
      data: vehicleLoanPlans,
    });
  }
);
