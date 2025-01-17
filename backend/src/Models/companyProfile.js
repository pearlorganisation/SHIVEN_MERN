import mongoose from "mongoose";

const companyProfileSchema = new mongoose.Schema(
  { 
    consultantId:
    { type: mongoose.Types.ObjectId,
      required: [true, "consultantId is required"]
    },
    companyName:
    { type: String,
      required: [true, "companyName is required"]
    },
    mobileNumber: {
      type: Number,
      required: [true, "mobileNumber is required"],
      trim: true,
    },
    website: {
      type: String,
      required: [true, "website is required"],
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
    required: [true, "address is required"],
},
gstNumber:{
  type:String,
  required: [true, "gstNumber is required"],
},
companyPan:{
  type:String,
  required: [true, "companyPAN is required"],
},
tan:{
  type:String,
  required: [true, "TAN is required"],
},
coiNumber:{
  type:String,
  required: [true, "COINumber is required"],
},
msme:{
  type:String,
  required: [true, "MSME is required"],
},
ghumasta:{
  type:String,
  required: [true, "ghumasta is required"],
},
bankDetails:{
  type:{}
}

  },
  { timestamps: true }
);

export default mongoose.model("companyProfile", companyProfileSchema);
