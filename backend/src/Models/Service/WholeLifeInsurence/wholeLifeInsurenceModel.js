import mongoose from "mongoose";

const wholeLifeInsuranceServicePlanSchema = new mongoose.Schema(
  {
    planName: { type: String, required: true, unique: true },
    serviceType: {
      type: mongoose.Types.ObjectId,
      ref: "service",
      required: [true, "Service type is required"],
    },
    lifeCover: { type: Number, required: true },
    premiumAmount: { type: Number, required: true },
    premiumFrequency: {
      type: String,
      enum: ["Monthly", "Quarterly", "Semi-Annual", "Annual"],
      default: "Annual",
    },
    minimumAge: { type: Number },
    maximumAge: { type: Number },
    additionalBenefits: [String],
  },
  { timestamps: true }
);

const WholeLifeInsuranceServicePlan = mongoose.model(
  "WholeLifeInsuranceServicePlan",
  wholeLifeInsuranceServicePlanSchema
);

export default WholeLifeInsuranceServicePlan;
