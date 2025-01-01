import mongoose from "mongoose";

const customerProfileSchema = new mongoose.Schema(
  {
    customerId:
    { type: mongoose.Types.ObjectId,
      required: [true, "Customer Id is required"]
    },
    fullName: {
      type: String,
      required: [true, "fullName is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
    },
mobile1:{
    type: Number,
    required: [true, "mobile1 is required"],
    trim: true,
},
mobile2:{
    type: Number,
    trim: true,
},
dob:{
  type:Date,
  required: [true, "DOB is required"],
},
anniversary:{
  type:Date
},
address: {
  type: String,
  required: [true, "address is required"],
  trim: true,
},
city: {
  type: String,
  required: [true, "city is required"],
  trim: true,
},
state: {
  type: String,
  required: [true, "state is required"],
  trim: true,
},
pincode: {
  type: Number,
  required: [true, "pincode is required"],
  trim: true,
},
aadhaarNumber: {
  type: Number,
  required: [true, "aadharNumber is required"],
  trim: true,
},
panNumber: {
  type: String,
  trim: true,
},
drivingLicenseNumber: {
  type: String,
  trim: true,
},
passportNumber: {
  type: String,
  trim: true,
},
bankDetails: {
  type: {},
  trim: true,
},
creditCardDetails: {
  type: {},
  trim: true,
},


  },
  { timestamps: true }
);

export default mongoose.model("customerProfile", customerProfileSchema);
