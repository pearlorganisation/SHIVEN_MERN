// -------------------------------------------------Imports----------------------------------------------------
import mongoose from "mongoose";
// ------------------------------------------------------------------------------------------------------------

const insuranceSchema = new mongoose.Schema({
  insuranceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "insurance",
  },
  insuranceCategories: [
    {
      categoryName: {
        type: String,
        required: [true, "Insurance Category Name is a required field"],
      },
      categoryIcon: {
        type: String,
        required: [true, "Insurance Icon is a required field"],
      },
    },
  ],
});

const insuranceServiceProviderSchema = new mongoose.Schema({
  insuranceServiceProviderName: {
    type: String,
    required: [true, "Insurance Provider Name is a required field"],
  },
  insuranceServiceProviderDescription: {
    type: String,
    required: [true, "Insurance Provider Description is a required field"],
  },
  insuranceServiceProviderIcon: {
    type: String,
    required: [true, "Insurance Service Provider Icon is a required field"],
  },
  insurances: [insuranceSchema],
});

export const insuranceServiceProviderModel = mongoose.model(
  "insuranceServiceProvider",
  insuranceServiceProviderSchema
);
