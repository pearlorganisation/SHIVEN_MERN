import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CircleLoader } from "react-spinners";

const UpdateQuotationInvoice = () => {
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
            View/Edit - Quotation / Invoice
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
                  placeholder="Name of person"
                  disabled={isDisabled}
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name of person is a required field",
                    },
                  })}
                />
                {errors.name && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.name?.message ||
                      "Company Name is a required field"}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Reference"
                  disabled={isDisabled}
                  {...register("reference", {
                    required: {
                      value: true,
                      message: "Reference is a required field",
                    },
                  })}
                />
                {errors.reference && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.reference?.message || "Mobile is a required field"}
                  </p>
                )}
              </div>

              {/* <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 gap-2">
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
                      placeholder="GST No."
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
              </div> */}

              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Service Provider / Product Seller"
                  disabled={isDisabled}
                  {...register("serviceProviderProductSeller", {
                    required: {
                      value: true,
                      message:
                        "Service Provider / Product Seller is a required field",
                    },
                  })}
                />
                {errors.serviceProviderProductSeller && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.serviceProviderProductSeller?.message ||
                      "Service Provider / Product Seller is a required field"}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Profession"
                  disabled={isDisabled}
                  {...register("profession", {
                    required: {
                      value: true,
                      message: "Profession is a required field",
                    },
                  })}
                />
                {errors.profession && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.profession?.message || "MSME is a required field"}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Industry"
                  disabled={isDisabled}
                  {...register("industry", {
                    required: {
                      value: true,
                      message: "Industry is a required field",
                    },
                  })}
                />
                {errors.industry && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.industry?.message || "MSME is a required field"}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Category"
                  disabled={isDisabled}
                  {...register("category", {
                    required: {
                      value: true,
                      message: "Category is a required field",
                    },
                  })}
                />
                {errors.category && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.category?.message || "MSME is a required field"}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Primary Products"
                  disabled={isDisabled}
                  {...register("primaryProducts", {
                    required: {
                      value: true,
                      message: "Primary Products is a required field",
                    },
                  })}
                />
                {errors.primaryProducts && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.primaryProducts?.message ||
                      "MSME is a required field"}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Name of Company"
                  disabled={isDisabled}
                  {...register("companyName", {
                    required: {
                      value: true,
                      message: "Name of Company is a required field",
                    },
                  })}
                />
                {errors.companyName && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.companyName?.message || "MSME is a required field"}
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
                  placeholder="Mobile No. 2"
                  disabled={isDisabled}
                  {...register("mobile2", {
                    required: {
                      value: false,
                      message: "Mobile No. 2 is a required field",
                    },
                  })}
                />
                {errors.mobile2 && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.mobile2?.message || "Mobile is a required field"}
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
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Website"
                  disabled={isDisabled}
                  {...register("website", {
                    required: {
                      value: true,
                      message: "Website is a required field",
                    },
                  })}
                />
                {errors.website && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.website?.message || "Website is a required field"}
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
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Website"
                  disabled={isDisabled}
                  {...register("website", {
                    required: {
                      value: true,
                      message: "Website is a required field",
                    },
                  })}
                />
                {errors.website && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.website?.message || "Website is a required field"}
                  </p>
                )}
              </div>
            </div>

            {!isDisabled && (
              <button
               className="mt-5 tracking-wide text-base font-semibold bg-green-400 text-white w-full md:w-[200px] py-3 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"

                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <CircleLoader />
                ) : (
                  <>
                    <span className="ml-3">Update</span>
                  </>
                )}
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateQuotationInvoice;
