// -------------------------------------------------Imports----------------------------------------------------
import mongoose from "mongoose";
// ------------------------------------------------------------------------------------------------------------

const serviceProviderSchema = new mongoose.Schema({
  serviceProviderName: {
    type: String,
    required: [true, "Service Provider Name is a required field"],
  },
  description: {
    type: String,
    // required: [true, "service Provider Description is a required field"],
  },
  logo: {
    type: String,
    required: [true, "Service Provider Icon is a required field"],
  },
  service: {
    type: mongoose.Types.ObjectId,
    ref: "servicePlan",
  },
});

export default mongoose.model("serviceProvider", serviceProviderSchema);
