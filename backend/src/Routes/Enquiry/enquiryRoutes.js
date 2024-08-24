// ----------------------------------------------Imports-----------------------------------------------------
import { enquiryMail } from "../../Controllers/Enquiry/enquiryController.js";
import { Router } from "express";
import { createBikeAndCarInsuranceEnquiry } from "../../Controllers/Enquiry/MotorInurance/bikeAndCarInsuranceEnquiry.js";
import { createHealthInsuranceEnquiry } from "../../Controllers/Enquiry/HealthInsurance/healthInsuranceEnquiry.js";
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
export const enquiryRouter = Router();
// ----------------------------------------------------------------------------------------------------------

//enquiryMail
enquiryRouter.route("/").post(enquiryMail);

//MOTOR INSURANCE ENQUIRY
enquiryRouter
  .route("/motor-insurance/bike-car")
  .post(createBikeAndCarInsuranceEnquiry);

// HEALTH INSURANCE ENQUIRY
enquiryRouter.route("/healthInsurance").post(createHealthInsuranceEnquiry);
