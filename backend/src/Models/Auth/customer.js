// -----------------------------------------------Imports-------------------------------------------------------
import mongoose from "mongoose";
import bcrypt from "bcrypt";
// -------------------------------------------------------------------------------------------------------------

const customerSchema = new mongoose.Schema(
  { consultantId:{
    type:mongoose.Types.ObjectId
      },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role:{
      type:String,
      default:"2"
    }
  },
  {
    timestamps: true,
  }
);

customerSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);

  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const customerModel = mongoose.model("customer", customerSchema);
export default customerModel;
