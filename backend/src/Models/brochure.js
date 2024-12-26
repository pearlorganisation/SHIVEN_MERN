import mongoose from "mongoose";

const brochureSchema = new mongoose.Schema(
  {
    template: {
      type: {},
      required: [true, "Template is required"],
    }
  },
  { timestamps: true }
);

export default mongoose.model("brochure", brochureSchema);
