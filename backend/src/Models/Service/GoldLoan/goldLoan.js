import mongoose from "mongoose";

const goldLoanSchema = new mongoose.Schema(
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
    minLoanAmount: {
      type: Number, // Minimum loan amount
      required: [true, "Minimum loan amount is required"],
    },
    maxLoanAmount: {
      type: Number, // Maximum loan amount
      required: [true, "Maximum loan amount is required"],
    },
  },
  { timestamps: true }
);

const GoldLoan = mongoose.model("BusinessLoan", goldLoanSchema);

export default GoldLoan;
