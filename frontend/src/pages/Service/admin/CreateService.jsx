import React from 'react'
import { useForm } from "react-hook-form"
import { useSelector } from 'react-redux';
import {ClipLoader} from "react-spinners"

const CreateService = () => {

  const {serviceData,isLoading} = useSelector((state)=>state.service)

  const {
    register,
    handleSubmit,
    formState: { errors }
} = useForm()

const onSubmit = (data) => {
  

    const formData= new FormData()
    // formData.append("dessertName",data?.dessertName)
    // formData.append("price",data?.price)
    // formData.append("category",category?.value)
    // formData.append("filter",filter?.value)
    // Array.from(data?.banner).forEach((img)=>{
    //     formData?.append("banner",img)
    // })
    // dispatch(createDessert(formData))
  
}

  return (
    <div>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <h1 className="text-center font-bold text-blue-600 text-sm sm:text-lg md:text-xl">
              Create Insurance
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
                    placeholder="Insurance Type"
                    {...register("insuranceType", {
                      required: {
                        value: true,
                        message: "Insurance Type is a required field",
                      },
                    })}
                  />
                  {errors.insuranceType && (
                    <p className="text-red-500 mt-1">
                      {errors?.insuranceType?.message ||
                        "Insurance Type is a required field"}
                    </p>
                  )}
                  <textarea
                    className="w-full max-h-[200px] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    placeholder="Insurance Description"
                    {...register("insuranceDescription", {
                      required: {
                        value: true,
                        message: "Insurance Description is a required field",
                      },
                    })}
                  />
                  {errors.insuranceDescription && (
                    <p className="text-red-500 mt-1">
                      {errors?.insuranceDescription?.message ||
                        "Insurance Description is a required field"}
                    </p>
                  )}
                  <input
                    className="w-full hidden px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="file"
                    placeholder="Insurance Icon"
                    {...register("insuranceIcon", {
                      required: {
                        value: false,
                        message: "Insurance Icon is a required field",
                      },
                    })}
                    ref={iconInputRef}
                    onChange={iconChangeHandler}
                  />
                  <div
                    className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none cursor-pointer focus:border-gray-400 focus:bg-white mt-5 max-h-[200px] ${
                      !iconUrl ? "" : "flex justify-center h-[200px]"
                    }`}
                    onClick={() => {
                      iconInputRef?.current?.click();
                    }}
                  >
                    {!iconUrl && (
                      <p className="text-gray-500 font-medium">
                        <span className="text-red-500 font-bold">
                          Select :{" "}
                        </span>
                        Insurance Icon
                      </p>
                    )}
                    {iconUrl && <img src={iconUrl} className=" !h-[100%]" />}
                  </div>
                  {errors?.insuranceIcon && (
                    <p className="text-red-500 mt-1">
                      {errors?.insuranceIcon?.message ||
                        "Insurance Icon is a required field"}
                    </p>
                  )}
                  {isLoading ? (
                    <button
                      className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      type="button"
                    >
                      <ClipLoader color="#c4c2c2" />
                    </button>
                  ) : (
                    <button
                      className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      type="submit"
                    >
                      <span className="ml-">Create Insurance</span>
                    </button>
                  )}
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    Shiven Consultancy <br />
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-green-100 text-center hidden lg:flex">
            <img src={insuranceBg} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateService
