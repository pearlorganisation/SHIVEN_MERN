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
    type: String,
    default: "",
  },
});

export const serviceModel = mongoose.model("service", serviceSchema);
