import mongoose from "mongoose";

const mutualFundPlanSchema = new mongoose.Schema(
  {
    fundName: {
      type: String,
      required: [true, "Fund name is required"],
    },
    serviceType: {
      type: mongoose.Types.ObjectId,
      ref: "service",
      required: [true, "Service type is required"],
    },
    fundSize: {
      type: String,
    },
    category: {
      type: String,
    },
    minSIPAmount: {
      type: Number,
      required: [true, "Minimum SIP amount is required"],
    },
    expenseRatio: {
      type: Number,
    },
    fiveYearsAnnualisedReturns: {
      type: Number,
    },
    oneYearsAnnualisedReturns: {
      type: Number,
    },
    riskFactor: {
      type: String,
    },
  },
  { timestamps: true }
);

const MutualFundPlan = mongoose.model("MutualFund", mutualFundPlanSchema);

export default MutualFundPlan;
