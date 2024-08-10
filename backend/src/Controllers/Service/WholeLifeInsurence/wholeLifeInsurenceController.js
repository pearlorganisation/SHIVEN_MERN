import WholeLifeInsuranceServicePlan from "../../../Models/Service/WholeLifeInsurence/wholeLifeInsurenceModel.js";
import { asyncErrorHandler } from "../../../Utils/Error/asyncErrorHandler.js";

export const createWholeLifeInsurenceServicePlan = asyncErrorHandler(
  async (req, res, next) => {
    const wholeLifeInsurancePlan = WholeLifeInsuranceServicePlan({
      ...req.body,
    });
    if (!wholeLifeInsurancePlan) {
      return next(
        new CustomError("Whole life insurence service plan is not created", 400)
      );
    }
    await wholeLifeInsurancePlan.save();
    return res.status(201).json({
      success: true,
      message: "Whole life insurence service is created",
      data: wholeLifeInsurancePlan,
    });
  }
);
