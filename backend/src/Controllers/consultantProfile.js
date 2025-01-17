// -----------------------------------------------Imports------------------------------------------------


import consultantProfile from "../Models/consultantProfile.js";
import { asyncErrorHandler } from "../Utils/Error/asyncErrorHandler.js";
import { CustomError } from "../Utils/Error/CustomError.js";


export const createAndUpdateConsultantProfile = asyncErrorHandler(async (req, res,next) => {
const {consultantId}= req?.body

    const isExist = await consultantProfile.findOneAndUpdate({consultantId},req?.body)

    if(!isExist)
{ 
  const data =  await consultantProfile.create(req?.body) 
 if(!data){
   return next( new CustomError("Issue in creating the consultant profile",400))
 }
 return res.status(201).json({status:true,message:"Consultant Profile Created Successfully"})
}
    
  res.status(200).json({status:true,message:"Consultant Profile Updated Successfully"})

});

export const getParticularConsultantProfile = asyncErrorHandler(async (req, res) => {
  const {id} = req?.params
  const data = await consultantProfile.findOne({consultantId:id})

  res.status(200).json({status:true,message:"Consultant Profile Found Successfully",data})

});
