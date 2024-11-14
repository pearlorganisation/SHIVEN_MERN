// -----------------------------------------------Imports-------------------------------------------------------
import mongoose from "mongoose";
// -------------------------------------------------------------------------------------------------------------

const consultantSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    servicePlan: [
      {
        type: mongoose.Types.ObjectId,
        ref: "servicePlan",
      },
    ],
    isVerified: {
      type: Boolean,
      default: false,
    },
    razorpay_consultant_id: {
      type: String,
    },
    razorpay_consultant_signature: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const consultantModel = mongoose.model("consultant", consultantSchema);
export default consultantModel;
