// ----------------------------------------------Imports-------------------------------------------------------
import mongoose from "mongoose";
// ------------------------------------------------------------------------------------------------------------

const otpSchema = new mongoose.Schema({
  otp: {
    type: String,
    required: [true, "Otp is a required field"],
  },
  type: {
    type: String,
    default: "LOGIN",
    enum: ["LOGIN", "FORGOTPASSWORD"],
  },
  email: {
    type: String,
    required: [true, "Email is a required field"],
  },
  expiresAt: {
    type: Date,
    required: [true, "Otp Expiry Time is a required field"],
  },
});

export const otpModel = mongoose.model("loginOtp", otpSchema);
