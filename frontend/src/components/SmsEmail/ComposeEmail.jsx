import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CircleLoader } from "react-spinners";

const ComposeEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [inputType, setInputType] = useState("url"); // State to track input type

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
      setFocus("name"); // Focus on the first field after enabling
    }, 10); // Delay to allow the re-render to complete
  };

  const handleInputTypeChange = (event) => {
    setInputType(event.target.value); // Update the input type
  };

  return (
    <div className="min-h-screen text-gray-900 flex justify-center">
      <div className="w-full p-4 m-0 sm:m-5 bg-white shadow sm:rounded-lg flex flex-col items-center">
        <div className="w-full flex justify-between">
          <h1 className="font-bold text-blue-600 text-sm sm:text-lg md:text-xl">
            Compose E-Mail
          </h1>
        </div>

        <div className="w-full md:w-1/2 flex-1 mt-8">
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-1 gap-2">
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="email"
                  placeholder="From"
                  disabled={isDisabled}
                  {...register("mailFrom", {
                    required: {
                      value: true,
                      message: "From is a required field",
                    },
                  })}
                />
                {errors.mailFrom && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.mailFrom?.message || "Mail From is a required field"}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="email"
                  placeholder="To"
                  disabled={isDisabled}
                  {...register("mailTo", {
                    required: {
                      value: true,
                      message: "E-Mail To is a required field",
                    },
                  })}
                />
                {errors.mailTo && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.mailTo?.message || "Mail From is a required field"}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Subject"
                  disabled={isDisabled}
                  {...register("subject", {
                    required: {
                      value: true,
                      message: "Subject is a required field",
                    },
                  })}
                />
                {errors.subject && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.subject?.message || "Subject is a required field"}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <textarea
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  placeholder="Content"
                  disabled={isDisabled}
                  {...register("content", {
                    required: {
                      value: true,
                      message: "Content is a required field",
                    },
                  })}
                />
                {errors.content && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.content?.message || "Subject is a required field"}
                  </p>
                )}
              </div>

            </div>

            <button
              className="mt-5 mx-auto tracking-wide text-base font-semibold bg-green-400 text-white w-full md:w-[200px] py-3 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <CircleLoader />
              ) : (
                <span className="ml-3">Save</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComposeEmail;
