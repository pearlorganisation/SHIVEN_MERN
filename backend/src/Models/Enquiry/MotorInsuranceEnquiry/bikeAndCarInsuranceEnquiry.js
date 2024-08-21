import Enquiry from "../enquiry";

const BikeAndCarInsuranceEnquiry = Enquiry.discriminator(
  "BikeAndCarInsuranceEnquiry",
  new mongoose.Schema({
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
  })
);

export default BikeAndCarInsuranceEnquiry;
