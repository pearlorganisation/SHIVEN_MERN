import mongoose from "mongoose";

const mutualFundServicePlanSchema = new mongoose.Schema(
  {
    fundLogo: {
      type: mongoose.Types.ObjectId,
      ref: "serviceProvider",
      required: [true, "Fund logo is required"],
    },
    fundName: {
      type: String,
      required: [true, "Fund name is required"],
      unique: true,
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
      validate: {
        validator: function (value) {
          return value >= 0 && value <= 100;
        },
        message: "Expense ratio must be between 0 and 100",
      },
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

const MutualFundServicePlan = mongoose.model(
  "MutualFundServicePlan",
  mutualFundServicePlanSchema
);

export default MutualFundServicePlan;
