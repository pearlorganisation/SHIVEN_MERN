import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CircleLoader } from "react-spinners";

const CompanyProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setFocus,
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true); // Simulate loading
    setTimeout(() => {
      console.log(data);
      setIsLoading(false); // Stop loading after submission
    }, 2000); // Simulate form processing delay
  };

  const handleEditClick = () => {
    setIsDisabled(false); // Enable the input fields
    setTimeout(() => {
      setFocus("companyName"); // Focus on the first field after enabling
    }, 10); // Delay to allow the re-render to complete
  };

  return (
    <div className="min-h-screen text-gray-900 flex justify-center">
      <div className="w-full p-4 m-0 sm:m-5 bg-white shadow sm:rounded-lg">
        <div className="w-full flex justify-between">
          <h1 className="font-bold text-blue-600 text-sm sm:text-lg md:text-xl">
            Consultant Profile
          </h1>
          {isDisabled && (
            <button
              className="text-white text-lg bg-blue-500 hover:bg-blue-700 p-1 px-4 rounded-md transition duration-300"
              onClick={handleEditClick}
            >
              Edit
            </button>
          )}
        </div>

        <div className="w-full flex-1 mt-8">
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Consultant Name"
                  disabled={isDisabled}
                  {...register("companyName", {
                    required: {
                      value: true,
                      message: "Consultant Name is a required field",
                    },
                  })}
                />
                {errors.companyName && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.companyName?.message ||
                      "Consultant Name is a required field"}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Mobile No."
                  disabled={isDisabled}
                  {...register("mobile", {
                    required: {
                      value: true,
                      message: "Mobile No. is a required field",
                    },
                  })}
                />
                {errors.mobile && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.mobile?.message || "Mobile is a required field"}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Gender"
                  disabled={isDisabled}
                  {...register("website", {
                    required: {
                      value: true,
                      message: "Gender is a required field",
                    },
                  })}
                />
                {errors.website && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.website?.message || "Gender is a required field"}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="email"
                  placeholder="Email"
                  disabled={isDisabled}
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is a required field",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.email?.message || "Email is a required field"}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 gap-2">
                <div className="flex flex-col gap-2 col-span-1 h-full">
                  <textarea
                    className="w-full h-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 resize-none"
                    type="text"
                    placeholder="Address"
                    disabled={isDisabled}
                    {...register("address", {
                      required: {
                        value: true,
                        message: "Address is a required field",
                      },
                    })}
                  />
                  {errors.address && (
                    <p className="text-red-500 mt-1 text-xs">
                      {errors?.address?.message ||
                        "Address is a required field"}
                    </p>
                  )}
                </div>

                <div className="col-span-1">
                  <div className="flex flex-col gap-2">
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="text"
                      placeholder="Company ID"
                      disabled={isDisabled}
                      {...register("gstNo", {
                        required: {
                          value: true,
                          message: "GST No is a required field",
                        },
                      })}
                    />
                    {errors.gstNo && (
                      <p className="text-red-500 mt-1 text-xs">
                        {errors?.gstNo?.message || "GST No is a required field"}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="text"
                      placeholder="Company PAN"
                      disabled={isDisabled}
                      {...register("companyPan", {
                        required: {
                          value: true,
                          message: "Company PAN is a required field",
                        },
                      })}
                    />
                    {errors.companyPan && (
                      <p className="text-red-500 mt-1 text-xs">
                        {errors?.companyPan?.message ||
                          "Company PAN is a required field"}
                      </p>
                    )}
                  </div>
                </div>
              </div>


        
            </div>
     

            <button
              className="mt-5 tracking-wide text-base font-semibold bg-green-400 text-white w-full md:w-[200px] py-3 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <CircleLoader />
              ) : (
                <>
                  <span className="ml-3">Save</span>
                </>
              )}
            </button>

            <p className="mt-6 text-xs text-gray-600 text-center">
              Shiven Consultancy <br />
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
