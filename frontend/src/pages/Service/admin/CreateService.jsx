import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {ClipLoader} from "react-spinners"
import createServiceBg from "../../../assets/Images/CreateServiceBg.webp";
import { createService } from '../../../features/actions/Service/service';

const CreateService = () => {
const dispatch = useDispatch()
const navigate= useNavigate()

  const {serviceData,isLoading} = useSelector((state)=>state.service)

console.log(serviceData)
  const [photo, setPhoto] = useState("");

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
} = useForm()


const onSubmit = (data) => {
  console.log(data)

    const formData= new FormData()
    formData.append("serviceType",data?.serviceType)
    formData.append("serviceDescription",data?.serviceDescription)
    Array.from(data?.logo).forEach((img)=>{
        formData?.append("logo",img)
    })
    dispatch(createService(formData))
  
}

useEffect(() => {
  if(serviceData?.success){
    navigate("/service")
  }
}, [serviceData]);

  return (
    <div>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <h1 className="text-center font-bold text-blue-600 text-sm sm:text-lg md:text-xl">
              Create New Service
            </h1>
            <div className="mt-12 flex flex-col items-center">
              <div className="w-full flex-1 mt-8">
                <form
                  className="mx-auto max-w-xs"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Service Type"
                    {...register("serviceType", {
                      required: {
                        value: true,
                        message: "Service Type is a required field",
                      },
                    })}
                  />
                  {errors.serviceType && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors?.serviceType?.message ||
                        "Service Type is a required field"}
                    </p>
                  )}
                  <textarea
                    className="w-full max-h-[200px] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
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
                        "Insurance Description is a required field"}
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
                    {...register('logo', { required: true, onChange:(e)=>{handlePhotoChange(e)} })}
                    className="w-full hidden px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="file"
                    placeholder="Service Icon"
                 
                  />
                 
                  {errors?.logo && (
                    <p className="text-red-500 text-xs mt-1">
                      
                        Service Logo is a required field
                    </p>
                  )}
                
                    <button
                      className="mt-5 tracking-wide font-semibold bg-green-600 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      type="submit"
                    >
                       {isLoading ? (<ClipLoader color="#c4c2c2" />) : (<>Create Service</>)}
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

export default CreateService
