import mongoose from "mongoose";

const consultantProfileSchema = new mongoose.Schema(
  {    consultantId:
    { type: mongoose.Types.ObjectId,
      required: [true, "consultantId is required"]
    },
    consultantName:
    { type: String,
      required: [true, "consultantName is required"]
    },
    mobileNumber: {
      type: Number,
      required: [true, "mobileNumber is required"],
      trim: true,
    },
    gender: {
      type: String,
      required: [true, "gender is required"],
      trim: true,
    },
email:{
    type: String,
    required: [true, "email is required"],
    trim: true,
},
address:{
    type: String,
    trim: true,
},
companyId:{
  type:String,
  required: [true, "companyId is required"],
},
companyPan:{
  type:String,
  required: [true, "companyPAN is required"],
}

  },
  { timestamps: true }
);

export default mongoose.model("consultantProfile", consultantProfileSchema);
