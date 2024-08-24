import mongoose from "mongoose";
import Enquiry from "../enquiry.js";

const healthInsuranceEnquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
  },
  mobileNumber: {
    type: String,
    required: [true, "Mobile number is required"],
  },
});

healthInsuranceEnquirySchema.index(
  { name: 1, age: 1, mobileNumber: 1 },
  { unique: true, message: "Enquiry with the same details already exists" }
);

const HealthInsuranceEnquiry = Enquiry.discriminator(
  "HealthInsuranceEnquiry",
  healthInsuranceEnquirySchema
);

export default HealthInsuranceEnquiry;
