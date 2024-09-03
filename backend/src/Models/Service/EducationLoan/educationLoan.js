import mongoose from "mongoose";

const educationLoanSchema = new mongoose.Schema(
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
    tenure: {
      type: Number, // Maximum tenure in years to repay the loan
      required: [true, "Tenure is required"],
    },
    loanAmount: {
      type: Number,
      required: [true, "Maximum loan amount is required"],
    },
    interestRate: {
      type: Number,
    },
  },
  { timestamps: true }
);

const EducationLoan = mongoose.model("BusinessLoan", educationLoanSchema);

export default EducationLoan;
