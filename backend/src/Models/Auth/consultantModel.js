// -----------------------------------------------Imports-------------------------------------------------------
import mongoose from "mongoose";
// -------------------------------------------------------------------------------------------------------------

const consultantSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    specialty: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
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
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  });

const consultantModel = mongoose.model("consultant", consultantSchema);
export default consultantModel;