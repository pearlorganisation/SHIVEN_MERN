import mongoose from "mongoose";

const customisedFormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    url: {
      type: String,
      trim: true,
    },
    pdf: {
      type: {},
    },

  },
  { timestamps: true }
);

export default mongoose.model("customisedForm", customisedFormSchema);
