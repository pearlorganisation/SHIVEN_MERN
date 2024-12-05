import mongoose from "mongoose";

const customisedServicePlanSchema = new mongoose.Schema(

  {
    serviceProvider: {
      type: [String],
      required: [true, "Service Provider is required"],
    },
    servicePlan: {
      type: [mongoose.Types.ObjectId],
      ref: "servicePlan",
      required: [true, "Service Plan is required"],
    },
    planName: {
      type: String,
      required: [true, "Plan name is required"],
      unique: true,
    },
    serviceType: {
      type: [String],
      required: [true, "Service type is required"],
    }
 
  },
  { timestamps: true }
);

export default mongoose.model("customisedServicePlan", customisedServicePlanSchema);
