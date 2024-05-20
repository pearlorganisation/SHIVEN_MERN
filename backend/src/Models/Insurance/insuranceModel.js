// -------------------------------------------------Imports----------------------------------------------------
import mongoose from "mongoose";
// ------------------------------------------------------------------------------------------------------------

const insuranceSchema = new mongoose.Schema({
  insuranceType: {
    type: String,
    required: [true, "Insurance Type is a required field"],
  },
  insuranceDescription: {
    type: String,
    required: [true, "Insurance Description is a required field"],
  },
  insuranceIcon: {
    type: String,
    required: [true, "Insurance Icon is a required field"],
  },
});

export const insuranceModel = mongoose.model("insurance", insuranceSchema);
