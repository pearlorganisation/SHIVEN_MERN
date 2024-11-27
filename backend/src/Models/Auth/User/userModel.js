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
    enum: ["1", "2", "3"],
    default: "2",
  },
  servicePlan:{
    type:[mongoose.Types.ObjectId]
  },
  isVerified:{
    type: Boolean
  }
});

// userSchema.pre("save", async function (next) {
//   //salt -- generating the salt for extra security while hashing
//   const salt = await bcrypt.genSalt(10);

//   //hash -- hashing the password while also adding the salt to it
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

export const userModel = mongoose.model("user", userSchema);
