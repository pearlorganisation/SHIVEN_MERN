// -----------------------------------------------Imports-------------------------------------------------------
import mongoose from "mongoose";
import bcrypt from "bcrypt";
// -------------------------------------------------------------------------------------------------------------

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "User Name is a required field"],
    trim: true,
  },
  fullName: {
    type: String,
    required: [true, "Name is a required field"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Name is a required field"],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Name is a required field"],
    trim: true,
  },
  role: {
    type: String,
    enum: ["1", "2", "3"],
    default: "2",
  },
});

userSchema.pre("save", async function (next) {
  //salt -- generating the salt for extra security while hashing
  const salt = await bcrypt.genSalt(10);

  //hash -- hashing the password while also adding the salt to it
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export const userModel = mongoose.model("user", userSchema);
