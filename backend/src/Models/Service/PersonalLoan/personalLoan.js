import mongoose from "mongoose";

const personalLoanSchema = new mongoose.Schema(
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
    processingFee: {
      type: String,
      required: [true, "Processing fee is required"],
    },
    tenure: {
      type: Number, // Maximum tenure in years to repay the loan
      required: [true, "Tenure is required"],
    },
    maxLoanAmount: {
      type: Number,
      required: [true, "Maximum loan amount is required"],
    },
    interestRate: {
      type: Number,
      required: [true, "Interest rate is required"],
      min: [0, "Interest rate cannot be negative"],
    },
    collateralAvailable: {
      type: Boolean,
      required: [true, "Collateral information is required"],
      default: false,
    },
  },
  { timestamps: true }
);

const PersonalLoan = mongoose.model("PersonalLoan", personalLoanSchema);

export default PersonalLoan;
