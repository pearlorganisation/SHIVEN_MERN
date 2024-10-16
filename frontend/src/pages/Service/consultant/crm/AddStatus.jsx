import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CircleLoader } from "react-spinners";

const AddStatus = () => {
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



  return (
    <div className="min-h-screen text-gray-900 flex justify-center">
      <div className="w-full p-4 m-0 sm:m-5 bg-white shadow sm:rounded-lg">
        <div className="w-full flex justify-between">
          <h1 className="font-bold text-blue-600 text-sm sm:text-lg md:text-xl">
            Add Status
          </h1>

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
                  type="date"
                  placeholder="Date"
                  
                  {...register("date", {
                    required: {
                      value: true,
                      message: "Date is a required field",
                    },
                  })}
                />
                {errors.date && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.date?.message ||
                      "Date is a required field"}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Call In / Call Out"
                  
                  {...register("call", {
                    required: {
                      value: true,
                      message: "Call In / Call Out is a required field",
                    },
                  })}
                />
                {errors.call && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.call?.message || "Mobile is a required field"}
                  </p>
                )}
              </div>

           
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="time"
                  placeholder="Start Time"
                  
                  {...register("startTime", {
                    required: {
                      value: true,
                      message:
                        "Start Time is a required field",
                    },
                  })}
                />
                {errors.startTime && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.startTime?.message ||
                      "Service Provider / Product Seller is a required field"}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="time"
                  placeholder="End Time"
                  
                  {...register("endTime", {
                    required: {
                      value: true,
                      message: "End Time is a required field",
                    },
                  })}
                />
                {errors.endTime && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.endTime?.message || "MSME is a required field"}
                  </p>
                )}
              </div>
              
              <div className="flex flex-col text-gray-500 text-center">
                Start Time
              </div>
              <div className="flex flex-col text-gray-500 text-center">
                End Time
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Name"
                  
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is a required field",
                    },
                  })}
                />
                {errors.name && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.name?.message || "MSME is a required field"}
                  </p>
                )}
              </div>
              {/* <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Name of Company"
                  
                  {...register("company", {
                    required: {
                      value: true,
                      message: "Name of Company is a required field",
                    },
                  })}
                />
                {errors.company && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.company?.message || "MSME is a required field"}
                  </p>
                )}
              </div> */}
              {/* <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Phone Number"
                  
                  {...register("phoneNumber", {
                    required: {
                      value: true,
                      message: "Phone Number is a required field",
                    },
                  })}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.phoneNumber?.message ||
                      "MSME is a required field"}
                  </p>
                )}
              </div> */}
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Follow-Up needed? Y/N"
                  
                  {...register("followUp", {
                    required: {
                      value: true,
                      message: "Follow-Up is a required field",
                    },
                  })}
                />
                {errors.followUp && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.followUp?.message || "MSME is a required field"}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <textarea
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Subject"
                  
                  {...register("subject", {
                    required: {
                      value: true,
                      message: "Subject is a required field",
                    },
                  })}
                />
                {errors.subject && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.subject?.message || "Mobile is a required field"}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <textarea
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Notes"
                  
                  {...register("notes", {
                    required: {
                      value: true,
                      message: "Notes is a required field",
                    },
                  })}
                />
                {errors.notes && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.notes?.message || "Mobile is a required field"}
                  </p>
                )}
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
                    <span className="ml-3">Add Status</span>
                  </>
                )}
              </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStatus;
