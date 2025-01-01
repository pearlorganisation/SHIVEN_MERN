// -----------------------------------------------Imports------------------------------------------------
import customerModel from "../../Models/Auth/customer.js";
import { userModel } from "../../Models/Auth/User/userModel.js";
import { asyncErrorHandler } from "../../Utils/Error/asyncErrorHandler.js";
import { CustomError } from "../../Utils/Error/CustomError.js";
import { sendCustomerAccountCreated } from "../../Utils/Mail/customer/customerEmail.js";

export const createCustomer = asyncErrorHandler(async (req, res,next) => {
  const {email,password,fullName}=req?.body?.payload

  const existingUser  = await userModel.findOne({ email })  // Checking if consultant or admin were using this email 
  if (existingUser) {
    return next(new CustomError("Email already exists in this website", 400));
  }

  const newCustomer = await customerModel.create({...req?.body?.payload});

  if(!newCustomer){
    return next(new CustomError("Customer is not Created", 400));
  }

  await sendCustomerAccountCreated(email,fullName,password)

  res.status(201).json({status:true,message:"Customer Created Successfully"})

});
export const getAllCustomers = asyncErrorHandler(async (req, res) => {

  const data = await customerModel.find().sort({createdAt:-1});


  res.status(200).json({status:true,message:"Customer Data Found Successfully",data})

});
export const getParticularConsultantCustomers = asyncErrorHandler(async (req, res) => {
  const {id} = req?.params
  console.log(id)
  const data = await customerModel.find({consultantId:id}).sort({createdAt:-1});


  res.status(200).json({status:true,message:"Customer Data Found Successfully",data})

});