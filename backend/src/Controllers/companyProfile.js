// -----------------------------------------------Imports------------------------------------------------


import companyProfile from "../Models/companyProfile.js";
import { asyncErrorHandler } from "../Utils/Error/asyncErrorHandler.js";
import { CustomError } from "../Utils/Error/CustomError.js";


export const createAndUpdateCompanyProfile = asyncErrorHandler(async (req, res,next) => {
const {consultantId}= req?.body

    const isExist = await companyProfile.findOneAndUpdate({consultantId},req?.body)

    if(!isExist)
{ 
  const data =  await companyProfile.create(req?.body) 
 if(!data){
   return next( new CustomError("Issue in creating the company profile",400))
 }
 return res.status(201).json({status:true,message:"Company Profile Created Successfully"})
}
    
  res.status(200).json({status:true,message:"Company Profile Updated Successfully"})

});

export const getParticularCompanyProfile = asyncErrorHandler(async (req, res) => {
  const {id} = req?.params
  const data = await companyProfile.findOne({consultantId:id})

  res.status(200).json({status:true,message:"Company Profile Found Successfully",data})

});
