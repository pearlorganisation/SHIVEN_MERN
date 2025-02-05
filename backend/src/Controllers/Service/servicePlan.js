import customisedPlan from "../../Models/Service/customisedPlan.js";
import servicePlan from "../../Models/Service/servicePlan.js";
import { asyncErrorHandler } from "../../Utils/Error/asyncErrorHandler.js";

export const createServicePlan = asyncErrorHandler(async (req, res, next) => {
  const data = new servicePlan(req?.body);
  

  await data.save();

  return res.status(200).json({
    success: true,
    message: "Service Plan Created Successfully",
  });
});

export const getAllServicePlan = asyncErrorHandler(async (req, res, next) => {
  const data = await servicePlan
    .find()
    .sort(req.query?.sort)
    .populate("serviceProvider")
    .populate("serviceType");

  return res.status(200).json({
    success: true,
    message: "All Service Plans Found Successfully",
    data,
  });
});
export const getServicePlanByServiceType = asyncErrorHandler(async (req, res, next) => {
  const data = await servicePlan
    .find({serviceType:req?.params?.id})
    .populate("serviceProvider")
    .populate("serviceType");

  return res.status(200).json({
    success: true,
    message: "All Service Plans Found Successfully for this service type",
    data,
  });
});

export const createCustomisedPlan = asyncErrorHandler(async (req, res, next) => {
  const data = new customisedPlan(req?.body);
  

  await data.save();

  return res.status(200).json({
    success: true,
    message: "Customised Service Plan Created Successfully",
  });
});
