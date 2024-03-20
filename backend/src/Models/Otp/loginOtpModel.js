// ----------------------------------------------Imports-------------------------------------------------------
import mongoose from "mongoose";
// ------------------------------------------------------------------------------------------------------------

const loginOtpSchema = new mongoose.Schema({
  otp: {
    type: String,
    required: [true, "Otp is a required field"],
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

export const loginOtpModel = mongoose.model("loginOtp", loginOtpSchema);
