import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CircleLoader } from "react-spinners";

const UpdateCustomisedForm = () => {
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
      <div className="w-full p-4 m-0 sm:m-5 bg-white shadow sm:rounded-lg">
        <div className="w-full flex justify-between">
          <h1 className="font-bold text-blue-600 text-sm sm:text-lg md:text-xl">
            Update Customised form
          </h1>
        </div>

        <div className="w-full flex-1 mt-8">
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-1 gap-2">
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Form Name"
                  disabled={isDisabled}
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Form Name is a required field",
                    },
                  })}
                />
                {errors.name && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.name?.message || "Form Name is a required field"}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-medium">Select Input Type:</label>
                <div className="flex gap-4">
                  <div className="flex gap-2 items-center justify-center">
                    <input
                      type="radio"
                      value="url"
                      checked={inputType === "url"}
                      onChange={handleInputTypeChange}
                    />
                    <label>Add a URL</label>
                  </div>

                  <div className="flex gap-2 items-center justify-center">
                    <input
                      type="radio"
                      value="file"
                      checked={inputType === "file"}
                      onChange={handleInputTypeChange}
                    />
                    <label>Upload a file</label>
                  </div>
                </div>
              </div>

              {inputType === "url" && (
                <div className="flex flex-col gap-2">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    placeholder="Url"
                    disabled={isDisabled}
                    {...register("url", {
                      required: {
                        value: true,
                        message: "Url is a required field",
                      },
                    })}
                  />
                  {errors.url && (
                    <p className="text-red-500 mt-1 text-xs">
                      {errors?.url?.message || "Url is a required field"}
                    </p>
                  )}
                </div>
              )}

              {inputType === "file" && (
                <div className="flex flex-col gap-2">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="file"
                    placeholder="Upload File"
                    disabled={isDisabled}
                    {...register("file", {
                      required: {
                        value: true,
                        message: "File is a required field",
                      },
                    })}
                  />
                  {errors.file && (
                    <p className="text-red-500 mt-1 text-xs">
                      {errors?.file?.message || "File is a required field"}
                    </p>
                  )}
                </div>
              )}
            </div>

            <button
              className="mt-5 tracking-wide text-base font-semibold bg-green-400 text-white w-full md:w-[200px] py-3 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <CircleLoader />
              ) : (
                <span className="ml-3">Update</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCustomisedForm;
