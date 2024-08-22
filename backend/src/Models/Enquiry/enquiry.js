import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    serviceType: {
      type: mongoose.Types.ObjectId,
      ref: "service",
      required: [true, "Service type is required"],
    },
    serviceProvider: {
      type: mongoose.Types.ObjectId,
      ref: "ServiceProvider",
      required: [true, "Service provider is required"],
    },
  },
  { timestamps: true }
);

const Enquiry = mongoose.model("Enquiry", enquirySchema);
export default Enquiry;
