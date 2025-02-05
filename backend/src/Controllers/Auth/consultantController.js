import Consultant from "../../Models/Auth/consultantModel.js";
import { asyncErrorHandler } from "../../Utils/Error/asyncErrorHandler.js";
import crypto from "crypto";
import bcrypt from "bcrypt"
import { razorpayInstance } from "../../Configs/razorPay.js";
import { sendAccountVerified, sendConsultantAccountCreated } from "../../Utils/Mail/consultant/consultantEmail.js";
import { userModel } from "../../Models/Auth/User/userModel.js";
import mongoose from "mongoose";

export const createConsultant = asyncErrorHandler(async (req, res) => {
  const newConsultant = await Consultant.create(req?.body);

  const options = {
    amount: 100,
    currency: "INR",
  };

  razorpayInstance.orders
    .create(options)
    .then((order) => {
      res.status(200).json({
        success: true,
        order,
        consultantId: newConsultant?._id,
      });
    })
    .catch(async (err) => {
      await Consultant.findByIdAndDelete(newConsultant._id);
      return res.status(400).json({
        status: false,
        message: err?.message || err,
      });
    });
});

export const verifyConsultant = asyncErrorHandler(async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    servicePlan,
  } = await req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;
  if (!isAuthentic) {
    // await Consultant.findByIdAndDelete(req?.params?.id);
    return res.status(400).json({
      status: false,
      message: `Signature Authentication Failed expected ${expectedSignature} but got ${razorpay_signature}`,
    });
  }
  const updateConsultant = await Consultant.findByIdAndUpdate(
    req?.params?.id,
    {
      razorpay_order_id,
      servicePlan,
      razorpay_payment_id,
    },
    {
      new: true,
    }
  );
  if(updateConsultant){
    sendConsultantAccountCreated(updateConsultant?.email);
  }

  res.status(200).json({
    status: true,
    message: "Consultant verified successfully!!",
    data: updateConsultant,
  });
});

export const getConsultants = asyncErrorHandler(async (req, res) => {
  const query = req?.query || null
  
  const consultans = await Consultant.find(query).select(" -password ");
  res.status(200).json({
    status: true,
    message: "Consultants fetched successfully!!",
    data: consultans,
  });
});

export const updateConsultantStatus = asyncErrorHandler(async (req, res) => {
  const { id } = req.params;

  const updateConsultant = await Consultant.findByIdAndUpdate(id, {
    isVerified: true,
    },
  {new:true}).lean();


  if (!updateConsultant) {
    return res.status(400).json({
      status: false,
      message: "Consultant not found!!",
    });
  }  

  const user = await userModel.create({role:"1",...updateConsultant})
  sendAccountVerified(updateConsultant?.email);

  const consultans = await Consultant.find()
  .select(" -password ");

  res.status(200).json({
    status: true,
    message: "Consultant Status Updated successfully!!",
    data: consultans,
  });
});

export const getConsultantWithPopulated= asyncErrorHandler(async(req,res)=>{

  const {id}= req?.params

  const data = await Consultant.findById(id).populate({
    path: "servicePlan",
    populate: [
      { path: "serviceType", model: "service" }, // Populate serviceType inside servicePlan
      { path: "serviceProvider", model: "serviceProvider" }, // Populate serviceProvider inside servicePlan
    ],
  });

  res.status(200).json({status:true,data})
})

export const updateConsultant = asyncErrorHandler(async (req, res) => {
  const { id } = req.params;
  console.log(req?.body)

  const {password} = req?.body

  const salt = await bcrypt.genSalt(10);
  console.log(salt)

  const hashPassword = await bcrypt.hash(password, salt);


  const updateConsultant = await userModel.findByIdAndUpdate(id, {
    ...req?.body,
    password:hashPassword
    },
  {new:true}).lean();


  if (!updateConsultant) {
    return res.status(400).json({
      status: false,
      message: "Consultant not found!!",
    });
  }  

  res.status(200).json({
    status: true,
    message: "Consultant Status Updated successfully!!",
    data: updateConsultant,
  });
});

export const updateConsultantPlans = asyncErrorHandler(async (req, res) => {
  const { id } = req.params;
  const { servicePlan: newServicePlans } = req.body; // Extract new service plans

  const existingServicePlan = await Consultant.findById(id).lean();

  if (!existingServicePlan) {
    return res.status(400).json({
      status: false,
      message: "Consultant not found!!",
    });
  }

  // Extract existing plans
  const existingPlans = existingServicePlan.servicePlan || [];


  // Filter new plans (remove duplicates)
  const uniquePlans = newServicePlans.filter(
    (plan) =>
      !existingPlans.some((existingPlan) =>
        existingPlan.equals(new mongoose.Types.ObjectId(plan))
      )
  );

  if (uniquePlans.length === 0) {
    return res.status(400).json({
      status: false,
      message: "Service plans already added!",
    });
  }

  // Update consultant with unique service plans
  await Consultant.updateOne(
    { _id: id },
    { $push: { servicePlan: { $each: uniquePlans.map(plan => new mongoose.Types.ObjectId(plan)) } } }
  );

  res.status(200).json({
    status: true,
    message: "Consultant Plans Updated successfully!!",
  });
});
