// ---------------------------------------------Imports--------------------------------------------------------
import { insuranceModel } from "../../Models/Insurance/insuranceModel.js";
import { asyncErrorHandler } from "../../Utils/Error/asyncErrorHandler.js";
import { pick } from "lodash-es";

// ------------------------------------------------------------------------------------------------------------

// @method - POST
// @desc - createInsurance - controller to create the insurance using the insurance model
// @url -  /insurance
export const createInsurance = asyncErrorHandler(async (req, res, next) => {
  let payload = req?.body?.payload;
  payload = JSON.parse(payload);

  if (!payload) {
    return next(new CustomError("Payload is required", 400));
  }

  payload = pick(payload, ["insuranceType", "insuranceDescription"]);

  if (req?.uploadedMediaFile) {
    payload = { ...payload, insuranceIcon: req?.uploadedMediaFile?.url };
  }

  const insuranceDoc = new insuranceModel(payload);
  await insuranceDoc.save();

  return res.status(200).json({
    success: true,
    message: "Insurance Created Successfully",
  });
});
