// -----------------------------------------------Imports-------------------------------------------------------
import mongoose from "mongoose";
import bcrypt from "bcrypt";
// -------------------------------------------------------------------------------------------------------------

const consultantSchema = new mongoose.Schema(
  {
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
    razorpay_order_id: {
      type: String,
    },
    razorpay_payment_id: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

consultantSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);

  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const consultantModel = mongoose.model("consultant", consultantSchema);
export default consultantModel;
