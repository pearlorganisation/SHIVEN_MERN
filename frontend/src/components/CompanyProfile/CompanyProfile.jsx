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
            Company Profile
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
                  placeholder="Company Name"
                  disabled={isDisabled}
                  {...register("companyName", {
                    required: {
                      value: true,
                      message: "Company Name is a required field",
                    },
                  })}
                />
                {errors.companyName && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.companyName?.message ||
                      "Company Name is a required field"}
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
              </div>

              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="TAN"
                  disabled={isDisabled}
                  {...register("tan", {
                    required: {
                      value: true,
                      message: "TAN is a required field",
                    },
                  })}
                />
                {errors.tan && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.tan?.message || "TAN is a required field"}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="COI No"
                  disabled={isDisabled}
                  {...register("coiNo", {
                    required: {
                      value: true,
                      message: "COI No is a required field",
                    },
                  })}
                />
                {errors.coiNo && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.coiNo?.message || "COI No is a required field"}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="MSME"
                  disabled={isDisabled}
                  {...register("msme", {
                    required: {
                      value: true,
                      message: "MSME is a required field",
                    },
                  })}
                />
                {errors.msme && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.msme?.message || "MSME is a required field"}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Ghumasta"
                  disabled={isDisabled}
                  {...register("ghumasta", {
                    required: {
                      value: true,
                      message: "Ghumasta is a required field",
                    },
                  })}
                />
                {errors.ghumasta && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.ghumasta?.message ||
                      "Ghumasta is a required field"}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="pl-1 text-lg font-semibold">Bank Details:</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-2">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    placeholder="Name"
                    disabled={isDisabled}
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is a required field",
                      },
                    })}
                  />
                  {errors.name && (
                    <p className="text-red-500 mt-1 text-xs">
                      {errors?.name?.message || "Name is a required field"}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    placeholder="Bank"
                    disabled={isDisabled}
                    {...register("bank", {
                      required: {
                        value: true,
                        message: "Bank is a required field",
                      },
                    })}
                  />
                  {errors.bank && (
                    <p className="text-red-500 mt-1 text-xs">
                      {errors?.bank?.message || "Bank is a required field"}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    placeholder="Savings / Current"
                    disabled={isDisabled}
                    {...register("savingsCurrent", {
                      required: {
                        value: true,
                        message: "Savings / Current is a required field",
                      },
                    })}
                  />
                  {errors.savingsCurrent && (
                    <p className="text-red-500 mt-1 text-xs">
                      {errors?.savingsCurrent?.message ||
                        "Savings / Current is a required field"}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    placeholder="Account Number"
                    disabled={isDisabled}
                    {...register("accountNumber", {
                      required: {
                        value: true,
                        message: "Account Number is a required field",
                      },
                    })}
                  />
                  {errors.accountNumber && (
                    <p className="text-red-500 mt-1 text-xs">
                      {errors?.accountNumber?.message ||
                        "Account Number is a required field"}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    placeholder="URL"
                    disabled={isDisabled}
                    {...register("url", {
                      required: {
                        value: true,
                        message: "URL is a required field",
                      },
                    })}
                  />
                  {errors.url && (
                    <p className="text-red-500 mt-1 text-xs">
                      {errors?.url?.message || "URL is a required field"}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    placeholder="User ID"
                    disabled={isDisabled}
                    {...register("userId", {
                      required: {
                        value: true,
                        message: "User ID is a required field",
                      },
                    })}
                  />
                  {errors.userId && (
                    <p className="text-red-500 mt-1 text-xs">
                      {errors?.userId?.message || "User ID is a required field"}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    disabled={isDisabled}
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is a required field",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-500 mt-1 text-xs">
                      {errors?.password?.message ||
                        "Password is a required field"}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Transaction Password"
                    disabled={isDisabled}
                    {...register("transactionPassword", {
                      required: {
                        value: true,
                        message: "Transaction Password is a required field",
                      },
                    })}
                  />
                  {errors.transactionPassword && (
                    <p className="text-red-500 mt-1 text-xs">
                      {errors?.transactionPassword?.message ||
                        "Transaction Password is a required field"}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    placeholder="Debit Card No."
                    disabled={isDisabled}
                    {...register("debitCardNo", {
                      required: {
                        value: true,
                        message: "Debit Card No. is a required field",
                      },
                    })}
                  />
                  {errors.debitCardNo && (
                    <p className="text-red-500 mt-1 text-xs">
                      {errors?.debitCardNo?.message ||
                        "Debit Card No. is a required field"}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    placeholder="Debit Card PIN"
                    disabled={isDisabled}
                    {...register("debitCardPin", {
                      required: {
                        value: true,
                        message: "Debit Card PIN is a required field",
                      },
                    })}
                  />
                  {errors.debitCardPin && (
                    <p className="text-red-500 mt-1 text-xs">
                      {errors?.debitCardPin?.message ||
                        "Debit Card PIN is a required field"}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    placeholder="IFSC"
                    disabled={isDisabled}
                    {...register("ifsc", {
                      required: {
                        value: true,
                        message: "IFSC is a required field",
                      },
                    })}
                  />
                  {errors.ifsc && (
                    <p className="text-red-500 mt-1 text-xs">
                      {errors?.ifsc?.message || "IFSC is a required field"}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    placeholder="CIF"
                    disabled={isDisabled}
                    {...register("cif", {
                      required: {
                        value: true,
                        message: "CIF is a required field",
                      },
                    })}
                  />
                  {errors.cif && (
                    <p className="text-red-500 mt-1 text-xs">
                      {errors?.cif?.message || "CIF is a required field"}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    placeholder="Nominee"
                    disabled={isDisabled}
                    {...register("nominee", {
                      required: {
                        value: true,
                        message: "Nominee is a required field",
                      },
                    })}
                  />
                  {errors.nominee && (
                    <p className="text-red-500 mt-1 text-xs">
                      {errors?.nominee?.message ||
                        "Nominee is a required field"}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="email"
                    placeholder="E-Mail"
                    disabled={isDisabled}
                    {...register("bankEmail", {
                      required: {
                        value: true,
                        message: "E-Mail is a required field",
                      },
                    })}
                  />
                  {errors.bankEmail && (
                    <p className="text-red-500 mt-1 text-xs">
                      {errors?.bankEmail?.message ||
                        "E-Mail is a required field"}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 gap-2">
                  <div className="col-span-1">
                    <div className="flex flex-col gap-2">
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="text"
                        placeholder="Mobile No"
                        disabled={isDisabled}
                        {...register("bankMobile", {
                          required: {
                            value: true,
                            message: "Mobile No is a required field",
                          },
                        })}
                      />
                      {errors.bankMobile && (
                        <p className="text-red-500 mt-1 text-xs">
                          {errors?.bankMobile?.message ||
                            "Mobile No is a required field"}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="text"
                        placeholder="Debit Card No."
                        disabled={isDisabled}
                        {...register("debitCardNo", {
                          required: {
                            value: true,
                            message: "Debit Card No. is a required field",
                          },
                        })}
                      />
                      {errors.debitCardNo && (
                        <p className="text-red-500 mt-1 text-xs">
                          {errors?.debitCardNo?.message ||
                            "Debit Card No. is a required field"}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 col-span-1 h-full">
                    <textarea
                      className="w-full h-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 resize-none"
                      type="text"
                      placeholder="Bank Address"
                      disabled={isDisabled}
                      {...register("bankAddress", {
                        required: {
                          value: true,
                          message: "Bank Address is a required field",
                        },
                      })}
                    />
                    {errors.bankAddress && (
                      <p className="text-red-500 mt-1 text-xs">
                        {errors?.bankAddress?.message ||
                          "Bank Address is a required field"}
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
