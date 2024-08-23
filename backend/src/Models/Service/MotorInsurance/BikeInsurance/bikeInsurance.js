import mongoose from "mongoose";

const bikeInsurancePlanSchema = new mongoose.Schema(
  {
    planLogo: {
      type: mongoose.Types.ObjectId,
      ref: "serviceProvider",
      required: [true, "Plan logo is required"],
    },
    planName: {
      type: String,
      required: [true, "Plan name is required"],
      unique: true,
    },
    serviceType: {
      type: mongoose.Types.ObjectId,
      ref: "service",
      required: [true, "Service type is required"],
    },
    premiumAmount: {
      type: Number,
      required: [true, "Premium amount is required"],
    },
    idv: { type: String, required: [true, "IDV is required"] },
    claimsSettled: {
      type: Number, // Percentage of claims settled
      required: [true, "Claims settled is required"],
      min: [0, "Claims settled percentage cannot be less than 0%"],
      max: [100, "Claims settled percentage cannot exceed 100%"],
    },
    zeroDepreciation: {
      type: Boolean, // Indicates if zero depreciation coverage is included
      //       required: [true, "Zero depreciation information is required"],
      default: false,
    },
  },
  { timestamps: true }
);

const BikeInsurancePlan = mongoose.model(
  "BikeInsurancePlan",
  bikeInsurancePlanSchema
);

export default BikeInsurancePlan;
