import mongoose from "mongoose";

const vehicleLoanPlanSchema = new mongoose.Schema(
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
    interestRate: {
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
    vehicleType: {
      type: String, // Type of vehicle (e.g., car, bike, etc.)
      required: [true, "Vehicle type is required"],
    },
  },
  { timestamps: true }
);

const VehicleLoanPlan = mongoose.model(
  "VehicleLoanPlan",
  vehicleLoanPlanSchema
);

export default VehicleLoanPlan;
