import MutualFundServicePlan from "../../../Models/Service/MutualFunds/mutualFundPlanModel.js";
import { asyncErrorHandler } from "../../../Utils/Error/asyncErrorHandler.js";
import { CustomError } from "../../../Utils/Error/CustomError.js";

export const createMutualFundServicePlan = asyncErrorHandler(
  async (req, res, next) => {
    const mutualFundPlan = new MutualFundServicePlan({ ...req.body });
    if (!mutualFundPlan) {
      return next(
        new CustomError("Mutual fund service plan is not created", 400)
      );
    }
    await mutualFundPlan.save();
    return res.status(201).json({
      success: true,
      message: "Mutual fund plan is created",
      data: mutualFundPlan,
    });
  }
);

export const getAllMutualFundServicePlans = asyncErrorHandler(
  async (req, res, next) => {
    const mutualFundServicePlans = await MutualFundServicePlan.find().populate(
      "serviceType"
    );
    if (!mutualFundServicePlans) {
      return next(new CustomError("Mutual fund service plan not found", 204));
    }
    return res.status(200).json({
      success: true,
      message: "All mutual fund service plans found successfully",
      data: mutualFundServicePlans,
    });
  }
);

export const deleteMutualFundServicePlan = asyncErrorHandler(
  async (req, res, next) => {
    const mutualFundServicePlan = await MutualFundServicePlan.findByIdAndDelete(
      req.params?.id
    );
    if (!mutualFundServicePlan) {
      return next(new CustomError("Mutual fund service plan not deleted", 404));
    }
    return res.status(200).json({
      success: true,
      message: "Mutual fund service plan deleted successfully",
    });
  }
);
