import HomeLoanPlan from "../../../Models/Service/HomeLoan/homeLoanModel.js";
import { asyncErrorHandler } from "../../../Utils/Error/asyncErrorHandler.js";
import { CustomError } from "../../../Utils/Error/CustomError.js";

export const createHomeLoanPlan = asyncErrorHandler(async (req, res, next) => {
  const homeLoanPlan = HomeLoanPlan.create(req.body);
  if (!homeLoanPlan) {
    return next(new CustomError("Home Loan plan is not created", 400));
  }
  return res.status(201).json({
    success: true,
    message: "Home Loan is created",
    data: homeLoanPlan,
  });
});
