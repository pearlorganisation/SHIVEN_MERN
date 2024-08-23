import HomeLoanPlan from "../../../Models/Service/HomeLoan/homeLoanModel.js";
import { asyncErrorHandler } from "../../../Utils/Error/asyncErrorHandler.js";
import { CustomError } from "../../../Utils/Error/CustomError.js";

export const createHomeLoanPlan = asyncErrorHandler(async (req, res, next) => {
  const homeLoanPlan = await HomeLoanPlan.create(req.body);
  if (!homeLoanPlan) {
    return next(new CustomError("Home Loan plan is not created", 400));
  }
  return res.status(201).json({
    success: true,
    message: "Home Loan plan is created",
    data: homeLoanPlan,
  });
});

export const getAllHomeLoanPlans = asyncErrorHandler(async (req, res, next) => {
  const homeLoanPlans = await HomeLoanPlan.find().populate("serviceType");
  if (!homeLoanPlans) {
    return next(new CustomError("Home loan plan is not found", 404));
  }
  return res.status(200).json({
    success: true,
    message: "All home loan plans found successfully",
    data: homeLoanPlans,
  });
});

export const deleteHomeLoanPlan = asyncErrorHandler(async (req, res, next) => {
  const homeLoanPlan = await HomeLoanPlan.findByIdAndDelete(req.params?.id);
  if (!homeLoanPlan) {
    return next(new CustomError("Home loan plan is not deleted", 404));
  }
  return res.status(200).json({
    success: true,
    message: "Home loan plan deleted successfully",
  });
});
