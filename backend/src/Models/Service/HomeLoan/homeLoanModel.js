import mongoose from "mongoose";

const homeLoanPlanSchema = new mongoose.Schema(
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
    bestRate: {
      type: Number, // Interest rate percentage
      required: [true, "Best rate is required"],
    },
    processingFee: {
      type: String,
      required: [true, "Processing fee is required"],
    },
    tenure: {
      type: Number, // Maximum tenure in years to repay the loan
      required: [true, "Tenure is required"],
    },
    upTo: {
      type: Number, // The upper limit for the loan amount
      required: [true, "Loan upper limit is required"],
    },
    yearRange: {
      minYear: {
        type: String,
        required: [true, "Minimum year is required"],
      },
      maxYear: {
        type: String,
        required: [true, "Maximum year is required"],
      },
    },
  },
  { timestamps: true }
);

const HomeLoanPlan = mongoose.model("HomeLoanPlan", homeLoanPlanSchema);

export default HomeLoanPlan;
