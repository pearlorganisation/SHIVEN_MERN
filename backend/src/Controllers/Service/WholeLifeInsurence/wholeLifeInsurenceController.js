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

export const getAllWholeLifeInsurenceServicePlans = asyncErrorHandler(
  async (req, res, next) => {
    const wholeLifeInsurancePlans =
      await WholeLifeInsuranceServicePlan.find().populate("serviceType");
    if (!wholeLifeInsurancePlans) {
      return next(
        new CustomError("Whole life insurence service plan not found", 204)
      );
    }
    return res.status(200).json({
      success: true,
      message: "All whole life insurence service plan found successfully",
      data: wholeLifeInsurancePlans,
    });
  }
);

export const deleteWholeLifeInsurenceServicePlan = asyncErrorHandler(
  async (req, res, next) => {
    const wholeLifeInsurencePlan =
      await WholeLifeInsuranceServicePlan.findByIdAndDelete(req.params?.id);
    if (!wholeLifeInsurencePlan) {
      return next(
        new CustomError("Whole life insurence service plan not deleted", 404)
      );
    }
    return res.status(200).json({
      success: true,
      message: "Whole life insurence service plan deleted successfully",
    });
  }
);
