import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CircleLoader } from "react-spinners";
import { addCustomisedForm } from "../../../features/actions/customisedForm";
import { useDispatch, useSelector } from "react-redux";

const AddCustomisedForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.customisedForm);
  const [isDisabled, setIsDisabled] = useState(false);
  const [inputType, setInputType] = useState("url"); // State to track input type
  const [pdfFile, setPdfFile] = useState(null); // State to store PDF file

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("name", data.name);

    if (inputType === "url") {
      formData.append("url", data.url);
    } else if (inputType === "file" && pdfFile) {
      formData.append("pdf", pdfFile);
    }

    dispatch(addCustomisedForm(formData));
  };

  // Handle file input change
  const handlePdf = (event) => {
    const { files } = event.target;
    if (files && files[0]) {
      setPdfFile(files[0]);
    }
  };

  // Handle radio button changes
  const handleInputTypeChange = (event) => {
    setInputType(event.target.value);
    setPdfFile(null); // Clear previous PDF file when switching input type
  };

  return (
    <div className="min-h-screen text-gray-900 flex justify-center">
      <div className="w-full p-4 m-0 sm:m-5 bg-white shadow sm:rounded-lg">
        <div className="w-full flex justify-between">
          <h1 className="font-bold text-blue-600 text-sm sm:text-lg md:text-xl">
            Add Customised Form
          </h1>
        </div>

        <div className="w-full flex-1 mt-8">
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-1 gap-2">
              {/* Form Name Input */}
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

              {/* Radio Buttons for Input Type */}
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
                    <label>Upload a File</label>
                  </div>
                </div>
              </div>

              {/* URL Input */}
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

              {/* File Input */}
              {inputType === "file" && (
                <div className="flex flex-col gap-2">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="file"
                    accept=".pdf"
                    disabled={isDisabled}
                    onChange={handlePdf}
                  />
                  {errors.pdf && (
                    <p className="text-red-500 mt-1 text-xs">
                      {errors?.pdf?.message || "PDF File is a required field"}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              className="mt-5 tracking-wide text-base font-semibold bg-green-400 text-white w-full md:w-[200px] py-3 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <CircleLoader size={20} color="#fff" />
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

export default AddCustomisedForm;
