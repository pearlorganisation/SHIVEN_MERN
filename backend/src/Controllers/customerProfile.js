// -----------------------------------------------Imports------------------------------------------------


import { asyncErrorHandler } from "../Utils/Error/asyncErrorHandler.js";
import customerProfile from "../Models/customerProfile.js";
import { CustomError } from "../Utils/Error/CustomError.js";
import filesAndFolders from "../Models/filesAndFolders.js";
import { cloudinary } from "../Configs/Cloudinary/cloudinaryConfig.js";


export const createCustomerProfile = asyncErrorHandler(async (req, res,next) => {

 await customerProfile.create(req?.body)

  res.status(201).json({status:true,message:"Customer Profile Created Successfully"})

});

export const getParticularCustomerProfiles = asyncErrorHandler(async (req, res) => {
  const {id} = req?.params
  const data = await customerProfile.find({customerId:id}).sort({createdAt:-1});


  res.status(200).json({status:true,message:"Customer Profiles Found Successfully",data})

});

export const deleteCustomerProfiles = asyncErrorHandler(async (req, res) => {
  const {id} = req?.params
  const data = await customerProfile.findByIdAndDelete(id)
  if(!data){
    return next(new CustomError("Invalid Id",400))
  }
  const filesData = await filesAndFolders.findOneAndDelete({userId:id})

  const publicIds = filesData?.folders.flatMap((folder) =>
    folder.files.map((file) => file.file.public_id)
  );

  cloudinary.api.delete_resources([...publicIds]).then(({ deleted }) => console.log(deleted))
  
  res.status(200).json({status:true,message:"Customer Profiles Deleted Successfully"})

});