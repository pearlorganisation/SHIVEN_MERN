// -------------------------------------------------Imports----------------------------------------------------
import mongoose from "mongoose";
// ------------------------------------------------------------------------------------------------------------

const insuranceSchema = new mongoose.Schema({
  insuranceType: {
    type: String,
    required: [true, "Insurance Type is a required field"],
    unique: true,
  },
  insuranceDescription: {
    type: String,
    required: [true, "Insurance Description is a required field"],
  },
  insuranceIcon: {
    type: String,
    default: "",
  },
});

export const insuranceModel = mongoose.model("insurance", insuranceSchema);
