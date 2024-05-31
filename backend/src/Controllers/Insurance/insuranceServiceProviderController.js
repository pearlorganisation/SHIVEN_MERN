// ---------------------------------------------Imports--------------------------------------------------------
import { insuranceServiceProviderModel } from "../../Models/Insurance/insuranceServiceProviderModel.js";
import { asyncErrorHandler } from "../../Utils/Error/asyncErrorHandler.js";
import { pick } from "lodash-es";

// ------------------------------------------------------------------------------------------------------------

// @method - POST
// @desc - createInsuranceServiceProvider - controller to create the insurance service provider using the insurance service provider model
// @url -  /insurance/service_provider
export const createInsuranceServiceProvider = asyncErrorHandler(
  async (req, res, next) => {
    let payload = req?.body?.payload;
    payload = JSON.parse(payload);

    if (!payload) {
      return next(new CustomError("Payload is required", 400));
    }

    payload = pick(payload, [
      "insuranceServiceProviderName",
      "insuranceServiceProviderDescription",
      "insurances",
    ]);

    if (req?.uploadedMediaFile) {
      payload = { ...payload, insuranceIcon: req?.uploadedMediaFile?.url };
    }

    const insuranceDoc = new insuranceModel(payload);
    await insuranceDoc.save();

    return res.status(200).json({
      success: true,
      message: "Insurance Created Successfully",
    });
  }
);

// @method - GET
// @desc - getInsuranceServiceProviders - controller to get all the insurance service providers data
// @url -  /insurance/service_provider
export const getInsuranceServiceProviders = asyncErrorHandler(
  async (req, res, next) => {
    const insurances = await insuranceModel.find();

    return res.status(200).json({
      success: true,
      message: "Insurance Data Found Successfully",
      insurances,
    });
  }
);
