import mongoose from "mongoose";

const servicePlanSchema = new mongoose.Schema(
  // global Fields
  {
    serviceProvider: {
      type: mongoose.Types.ObjectId,
      ref: "serviceProvider",
      required: [true, "Service Provider is required"],
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

    // whole life insurance fields ---------------------------------------------------------------------
    lifeCover: { type: Number },
    premiumAmount: { type: Number },
    premiumFrequency: {
      type: String,
      enum: ["Monthly", "Quarterly", "Semi-Annual", "Annual"],
    },
    minimumAge: { type: Number },
    maximumAge: { type: Number },
    additionalBenefits: [String],

    // home loan fields -----------------------------------------------------------------------------
    bestRate: {
      type: Number,
    },
    processingFee: {
      // multi
      type: String,
    },
    tenure: {
      type: Number, // multi
    },
    upTo: {
      type: Number, // multi
    },
    yearRange: {
      minYear: {
        type: String,
      },
      maxYear: {
        type: String,
      },
    },

    // mutual funds fields ----------------------------------------------------------------------------
    fundSize: {
      type: String,
    },
    category: {
      type: String,
    },
    minSIPAmount: {
      type: Number,
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

    // Vehicle loan fields -----------------------------------------------------------------------------
    interestRate: {
      type: Number,
    },
    vehicleType: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("servicePlan", servicePlanSchema);
