import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    serviceType: {
      type: String,
      enum: ["HealthInsurance", "MotorInsurance", "Loan"],
      required: true,
    },
    serviceProvider: {
      type: mongoose.Types.ObjectId,
      ref: "ServiceProvider",
      required: true,
    },
  },
  { timestamps: true }
);

const Enquiry = mongoose.model("Enquiry", enquirySchema);
export default Enquiry;
