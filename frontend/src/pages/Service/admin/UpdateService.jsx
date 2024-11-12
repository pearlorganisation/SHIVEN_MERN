import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux';
import {useLocation, useNavigate} from 'react-router-dom'
import {ClipLoader} from "react-spinners"
import createServiceBg from "../../../assets/Images/CreateServiceBg.webp";
import { updateService } from '../../../features/actions/Service/service';


export const UpdateService = () => {
const dispatch = useDispatch()
const navigate= useNavigate()

  const {state:item}= useLocation()
  const {serviceData,isLoading}= useSelector((state)=>state.service)

  const [photo, setPhoto] = useState(item?.logo?.secure_url);

    const handlePhotoChange = (e) => {
      const selectedPhoto = e.target.files[0];
     
      if (selectedPhoto) {
        
        const reader = new FileReader();
        reader.readAsDataURL(selectedPhoto);
        reader.onloadend = () => {
          setPhoto(reader.result);
        };
      }
    };

  const {
    register,
    handleSubmit,
    formState: { errors }
} = useForm({
  defaultValues:{
    serviceDescription:item?.serviceDescription,
  }
})


const onSubmit = (data) => {

    const formData= new FormData()
    formData.append("serviceDescription",data?.serviceDescription)
    if(data?.logo)
  {  Array.from(data?.logo).forEach((img)=>{
        formData?.append("logo",img)
    })}
    dispatch(updateService({id:item?._id,payload:formData}))
  
}

useEffect(() => {
  if(serviceData?.success){
    navigate("/admin/services")
  }
}, [serviceData]);

  return (
    <div>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-2xl m-0 sm:m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <h1 className="text-center font-bold text-blue-600 text-sm sm:text-lg md:text-xl">
              Update Service
            </h1>
            <div className="mt-12 flex flex-col items-center">
              <div className="w-full flex-1 mt-8">
                <form
                  className="mx-auto "
                  onSubmit={handleSubmit(onSubmit)}
                >
          
                  <textarea
                    className="w-full py-2 h-[200px] rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    placeholder="Service Description"
                    {...register("serviceDescription", {
                      required: {
                        value: true,
                        message: "Service Description is a required field",
                      },
                    })}
                  />
                  {errors.serviceDescription && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors?.serviceDescription?.message ||
                        "Policy Description is a required field"}
                    </p>
                  )}
                  <label htmlFor="fileImage">
                  <div
                    className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none cursor-pointer focus:border-gray-400 focus:bg-white mt-5 max-h-[200px] ${
                      !photo ? "" : "flex justify-center h-[200px]"
                    }`}
                   
                  >
                    {!photo && (
                      <p className="text-gray-500 font-medium">
                        <span className="text-red-500 font-bold">
                          Select :{" "}
                        </span>
                        Service Logo
                      </p>
                    )}
                    {photo && <img src={photo} className=" h-40 w-52" />}
                  </div>
                  </label>
                  <input
                  id='fileImage'
                    {...register('logo', {onChange:(e)=>{handlePhotoChange(e)} })}
                    className="w-full hidden px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="file"
                    placeholder="Service Icon"
                 
                  />
                 
                
                    <button
                      className="mt-5 tracking-wide font-semibold bg-green-600 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      type="submit"
                    >
                       {isLoading ? (<ClipLoader color="#c4c2c2" />) : (<>Update Service</>)}
                    </button>
                 
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    Shiven Consultancy <br />
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-green-100 text-center hidden lg:flex">
            <img src={createServiceBg} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}


