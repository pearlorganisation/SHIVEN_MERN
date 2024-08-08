import MutualFundPlan from "../../../Models/Service/MutualFunds/mutualFundPlanModel.js";
import { asyncErrorHandler } from "../../../Utils/Error/asyncErrorHandler.js";
import { CustomError } from "../../../Utils/Error/CustomError.js";

export const createMutualFundServicePlan = asyncErrorHandler(
  async (req, res, next) => {
    const mutualFundPlan = new MutualFundPlan({ ...req.body });
    if (!mutualFundPlan) {
      return next(new CustomError("Mutual fund plan is not created", 400));
    }
    await mutualFundPlan.save();
    return res.status(201).json({
      success: true,
      message: "Mutual fund plan is created",
      data: mutualFundPlan,
    });
  }
);
