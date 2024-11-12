// -------------------------------------------------Imports----------------------------------------------------
import mongoose from "mongoose";
// ------------------------------------------------------------------------------------------------------------

const serviceSchema = new mongoose.Schema({
  serviceType: {
    type: String,
    required: [true, "service Type is a required field"],
    unique: true,
  },
  serviceDescription: {
    type: String,
    required: [true, "service Description is a required field"],
  },
  logo: {
    type: {},
    required:[true,"logo is required"],
  },
});

export const serviceModel = mongoose.model("service", serviceSchema);
