// -----------------------------------------------Imports------------------------------------------------


import { asyncErrorHandler } from "../Utils/Error/asyncErrorHandler.js";
import customerProfile from "../Models/customerProfile.js";


export const createCustomerProfile = asyncErrorHandler(async (req, res,next) => {

 await customerProfile.create(req?.body)

  res.status(201).json({status:true,message:"Customer Profile Created Successfully"})

});

export const getParticularCustomerProfiles = asyncErrorHandler(async (req, res) => {
  const {id} = req?.params
  console.log(id)
  const data = await customerProfile.find({customerId:id}).sort({createdAt:-1});


  res.status(200).json({status:true,message:"Customer Profiles Found Successfully",data})

});

export const deleteCustomerProfiles = asyncErrorHandler(async (req, res) => {
  const {id} = req?.params
  const data = await customerProfile.findByIdAndDelete(id)
  res.status(200).json({status:true,message:"Customer Profiles Deleted Successfully",data})

});