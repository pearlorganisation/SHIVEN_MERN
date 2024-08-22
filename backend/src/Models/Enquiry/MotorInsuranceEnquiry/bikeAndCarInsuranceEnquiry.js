import mongoose from "mongoose";
import Enquiry from "../enquiry.js";

const bikeAndCarInsuranceEnquirySchema = new mongoose.Schema({
  mobileNumber: {
    type: String,
    required: [true, "Mobile number is required"],
  },
  vehicleNumber: {
    type: String,
    required: [true, "Vehicle number is required"],
  },
  vehicleType: {
    type: String,
    enum: ["Car", "Bike"],
    required: [true, "Vehicle type is required"],
  },
});

// Create a compound index to ensure uniqueness across mobileNumber, vehicleNumber, and vehicleType
bikeAndCarInsuranceEnquirySchema.index(
  { mobileNumber: 1, vehicleNumber: 1, vehicleType: 1 },
  { unique: true, message: "Enquiry with the same details already exists" }
);

const BikeAndCarInsuranceEnquiry = Enquiry.discriminator(
  "BikeAndCarInsuranceEnquiry", // == __t in db
  bikeAndCarInsuranceEnquirySchema
);

export default BikeAndCarInsuranceEnquiry;
