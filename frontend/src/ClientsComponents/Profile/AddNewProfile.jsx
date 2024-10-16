import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import defaultPhoto from "/placeholder.jpg";
import { useNavigate } from "react-router-dom";
// import { MdOutlineInsertPhoto } from "react-icons/md";
import { CircleLoader } from "react-spinners";

const AddNewProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [showCreditCard, setShowCreditCard] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  // const [photo, setPhoto] = useState("");

  // const handlePhotoChange = (e) => {
  //   const selectedPhoto = e.target.files[0];

  //   if (selectedPhoto) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(selectedPhoto);
  //     reader.onloadend = () => {
  //       setPhoto(reader.result);
  //     };
  //   }
  // };

  //   useEffect(() => {
  //     if (dipData?.status) {
  //       navigate("/dip");
  //     }
  //   }, [dipData]);

  return (
    <div className="max-w-4xl mx-auto my-5 overflow-hidden rounded-2xl bg-white shadow-lg ">
      <div className="bg-blue-600 px-10 py-4 text-center text-white font-semibold">
        Add New Profile
      </div>
      <form
        className="flex flex-col gap-5 p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-2">
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="text"
              placeholder="Full Name"
              {...register("fullName", {
                required: {
                  value: true,
                  message: "Full Name is a required field",
                },
              })}
            />
            {errors.fullName && (
              <p className="text-red-500 mt-1 text-xs">
                {errors?.fullName?.message || "Full Name is a required field"}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="text"
              placeholder="Mobile No."
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
              {...register("mobile2", {
                required: {
                  value: true,
                  message: "Mobile No. 2 is a required field",
                },
              })}
            />
            {errors.mobile2 && (
              <p className="text-red-500 mt-1 text-xs">
                {errors?.mobile2?.message || "Mobile No. 2 is a required field"}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="email"
              placeholder="Email"
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
            <div className="col-span-1">
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="date"
                  placeholder="DOB"
                  {...register("dob", {
                    required: {
                      value: true,
                      message: "DOB is a required field",
                    },
                  })}
                />
                {errors.dob && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.dob?.message || "DOB is a required field"}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="date"
                  placeholder="Anniversary"
                  {...register("anniversary", {
                    required: {
                      value: true,
                      message: "Anniversary is a required field",
                    },
                  })}
                />
                {errors.anniversary && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.anniversary?.message ||
                      "Anniversary is a required field"}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 col-span-1 h-full">
              <textarea
                className="w-full h-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 resize-none"
                type="text"
                placeholder="Address"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Address is a required field",
                  },
                })}
              />
              {errors.address && (
                <p className="text-red-500 mt-1 text-xs">
                  {errors?.address?.message || "Address is a required field"}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="text"
              placeholder="City"
              {...register("city", {
                required: {
                  value: true,
                  message: "City is a required field",
                },
              })}
            />
            {errors.city && (
              <p className="text-red-500 mt-1 text-xs">
                {errors?.city?.message || "City is a required field"}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="text"
              placeholder="State"
              {...register("state", {
                required: {
                  value: true,
                  message: "State is a required field",
                },
              })}
            />
            {errors.state && (
              <p className="text-red-500 mt-1 text-xs">
                {errors?.state?.message || "State is a required field"}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="text"
              placeholder="PIN Code"
              {...register("pinCode", {
                required: {
                  value: true,
                  message: "PIN Code is a required field",
                },
              })}
            />
            {errors.pinCode && (
              <p className="text-red-500 mt-1 text-xs">
                {errors?.pinCode?.message || "PIN Code is a required field"}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="text"
              placeholder="Adhaar No."
              {...register("adhaarNo", {
                required: {
                  value: true,
                  message: "Adhaar No. is a required field",
                },
              })}
            />
            {errors.adhaarNo && (
              <p className="text-red-500 mt-1 text-xs">
                {errors?.adhaarNo?.message || "Adhaar No. is a required field"}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="text"
              placeholder="PAN No."
              {...register("panNo", {
                required: {
                  value: true,
                  message: "PAN No. is a required field",
                },
              })}
            />
            {errors.panNo && (
              <p className="text-red-500 mt-1 text-xs">
                {errors?.panNo?.message || "PAN No. is a required field"}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="text"
              placeholder="Driving License No."
              {...register("drivingLicenseNo", {
                required: {
                  value: true,
                  message: "Driving License No. is a required field",
                },
              })}
            />
            {errors.drivingLicenseNo && (
              <p className="text-red-500 mt-1 text-xs">
                {errors?.drivingLicenseNo?.message ||
                  "Driving License No. is a required field"}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="text"
              placeholder="Passport No."
              {...register("passportNo", {
                required: {
                  value: true,
                  message: "Passport No. is a required field",
                },
              })}
            />
            {errors.passportNo && (
              <p className="text-red-500 mt-1 text-xs">
                {errors?.passportNo?.message ||
                  "Passport No. is a required field"}
              </p>
            )}
          </div>
        </div>

        <div className="grid gird-cols-2">
          <div class="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              checked={showBankDetails}
              onChange={() => setShowBankDetails(!showBankDetails)}
            />
            <label
              for="default-checkbox"
              class="ms-2 text-base font-medium text-gray-900"
            >
              Add Bank Details
            </label>
          </div>
        </div>
        {showBankDetails && (
          <div className="flex flex-col gap-2">
            <div className="pl-1 text-lg font-semibold">Bank Details:</div>
            <div className="grid grid-cols-2 gap-2">
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
                    {errors?.name?.message || "Name is a required field"}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Bank"
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
                  {...register("nominee", {
                    required: {
                      value: true,
                      message: "Nominee is a required field",
                    },
                  })}
                />
                {errors.nominee && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.nominee?.message || "Nominee is a required field"}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="email"
                  placeholder="E-Mail"
                  {...register("bankEmail", {
                    required: {
                      value: true,
                      message: "E-Mail is a required field",
                    },
                  })}
                />
                {errors.bankEmail && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.bankEmail?.message || "E-Mail is a required field"}
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
        )}
        <div className="">
          <div class="flex items-center mb-4">
            <input
              id="default-checkbox2"
              type="checkbox"
              class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              checked={showCreditCard}
              onChange={() => setShowCreditCard(!showCreditCard)}
            />
            <label
              for="default-checkbox2"
              class="ms-2 text-base font-medium text-gray-900"
            >
              Add Credit Card Details
            </label>
          </div>
        </div>

        {showCreditCard && (
          <div className="flex flex-col gap-2">
            <div className="pl-1 text-lg font-semibold">
              Credit Card Details:
            </div>
            <div className="grid grid-cols-2 gap-2">
              {/* <div className="flex flex-col gap-2">
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
                    {errors?.name?.message || "Name is a required field"}
                  </p>
                )}
              </div> */}

              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Bank"
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
                  placeholder="Credit Card No."
                  {...register("creditCardNo", {
                    required: {
                      value: true,
                      message: "Credit Card No. is a required field",
                    },
                  })}
                />
                {errors.creditCardNo && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.creditCardNo?.message ||
                      "Credit Card No. is a required field"}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Credit Card PIN"
                  {...register("creditCardPin", {
                    required: {
                      value: true,
                      message: "Credit Card PIN is a required field",
                    },
                  })}
                />
                {errors.creditCardPin && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.creditCardPin?.message ||
                      "Credit Card PIN is a required field"}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 gap-2">
                <div className="col-span-1">
                  <div className="flex flex-col gap-2">
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="email"
                      placeholder="E-Mail"
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
                  <div className="flex flex-col gap-2">
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="text"
                      placeholder="Mobile No"
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
                </div>
                <div className="flex flex-col gap-2 col-span-1 h-full">
                  <textarea
                    className="w-full h-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 resize-none"
                    type="text"
                    placeholder="Bank Address"
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
        )}

        <button
          className="mx-auto mt-5 tracking-wide text-lg font-semibold bg-green-400 text-white w-full md:w-1/3 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 flex items-center justify-center focus:shadow-outline focus:outline-none"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? <CircleLoader /> : "Save"}
        </button>

        <p className="mt-6 text-xs text-gray-600 text-center">
          Shiven Consultancy <br />
        </p>
      </form>
    </div>
  );
};

export default AddNewProfile;
