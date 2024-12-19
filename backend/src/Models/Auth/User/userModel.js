// -----------------------------------------------Imports-------------------------------------------------------
import mongoose from "mongoose";
import bcrypt from "bcrypt";
// -------------------------------------------------------------------------------------------------------------

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is a required field"],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is a required field"],
    trim: true,
  },
  role: {
    type: String,
    enum: ["0","1", "2", "3"],
    default: "2",
  },
  servicePlan:{
    type:[mongoose.Types.ObjectId],
    ref:"servicePlan"
  },
  isVerified:{
    type: Boolean
  }
},{
  timestamps:true
});


export const userModel = mongoose.model("user", userSchema);
