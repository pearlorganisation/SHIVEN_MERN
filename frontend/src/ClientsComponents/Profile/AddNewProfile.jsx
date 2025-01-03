import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import { addCustomerProfile } from "../../features/actions/customerProfile";
import { useEffect } from "react";

const AddNewProfile = () => {
  const { loggedInUserData } = useSelector((state) => state.auth);
  const { customerProfileData, isLoading } = useSelector(
    (state) => state.customerProfile
  );
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
    console.log("Form submitted with data:", data);
  
    let finalData = { ...data }; // Initialize with full form data.
  
    if (showBankDetails && showCreditCard) {
      // Include both details
      console.log("Both bank and credit card details shown:", showBankDetails, showCreditCard);
    } else {
      // Remove unnecessary data based on the flags
      if (!showBankDetails) {
        const { bankDetails, ...rest } = finalData;
        finalData = rest;
      }
      if (!showCreditCard) {
        const { creditCardDetails, ...rest } = finalData;
        finalData = rest;
      }
    }
  
    console.log("Final data to dispatch:", finalData);
  
    dispatch(
      addCustomerProfile({ customerId: loggedInUserData?._id, ...finalData })
    );
  };
  
  useEffect(() => {
    if (customerProfileData?.status) {
      console.log("Profile updated, navigating to /profile...");
      navigate("/profile");
    }
  }, [customerProfileData, navigate]);
  
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
              maxLength={10}
              placeholder="Mobile No."
              {...register("mobile1", {
                required: {
                  value: true,
                  message: "Mobile No. is a required field",
                },
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Must be a number",
                },
              })}
            />
            {errors.mobile1 && (
              <p className="text-red-500 mt-1 text-xs">
                {errors?.mobile1?.message || "Mobile is a required field"}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="text"
              maxLength={10}
              placeholder="Mobile No. 2"
              {...register("mobile2", {
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Must be a number",
                },
              })}
            />
            {errors.mobile2 && (
              <p className="text-red-500 mt-1 text-xs">
                {errors?.mobile2?.message}
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
            <div className="col-span-1 space-y-5">
              <div class="relative">
                <input
                  id="floating_outlined"
                  class="block px-2.5 pb-2.5 pt-4 mt-5 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  type="date"
                  placeholder="DOB"
                  {...register("dob", {
                    required: {
                      value: true,
                      message: "DOB is a required field",
                    },
                  })}
                />

                <label
                  for="floating_outlined"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Date of Birth
                </label>
              </div>

              {errors.dob && (
                <p className="text-red-500 mt-1 text-xs">
                  {errors?.dob?.message || "DOB is a required field"}
                </p>
              )}
              <div class="relative">
                <input
                  id="floating_outlined"
                  class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  type="date"
                  placeholder="Marriage Anniversary"
                  {...register("anniversary")}
                />

                <label
                  for="floating_outlined"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Date of Marriage Anniversary
                </label>
              </div>

              {errors.anniversary && (
                <p className="text-red-500 mt-1 text-xs">
                  {errors?.anniversary?.message || "DOB is a required field"}
                </p>
              )}
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
              maxLength={6}
              {...register("pincode", {
                required: {
                  value: true,
                  message: "PIN Code is a required field",
                },
                pattern: {
                  value: /^[0-9]{6}$/,
                  message: "PIN Code must be a 6-digit number",
                },
              })}
            />
            {errors.pincode && (
              <p className="text-red-500 mt-1 text-xs">
                {errors?.pincode?.message || "PIN Code is a required field"}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="text"
              maxLength={12}
              placeholder="Aadhaar No."
              {...register("aadhaarNumber", {
                required: {
                  value: true,
                  message: "Aadhaar No. is a required field",
                },
                pattern: {
                  value: /^[0-9]{12}$/,
                  message: "Aadhaar No. must be a 12-digit number",
                },
              })}
            />
            {errors.aadhaarNumber && (
              <p className="text-red-500 mt-1 text-xs">
                {errors?.aadhaarNumber?.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="text"
              placeholder="PAN No."
              maxLength={10}
              {...register("panNumber", {
                pattern: {
                  value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                  message: "PAN No. must be in the format: ABCDE1234F",
                },
              })}
              onInput={(e) => {
                e.target.value = e.target.value.toUpperCase();
              }}
            />

            {errors.panNumber && (
              <p className="text-red-500 mt-1 text-xs">
                {errors?.panNumber?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <input
              onInput={(e) => {
                e.target.value = e.target.value.toUpperCase();
              }}
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="text"
              placeholder="Driving License No."
              maxLength={16}
              {...register("drivingLicenseNumber", {
                pattern: {
                  value: /^[A-Z0-9]{16}$/,
                  message:
                    "Driving License No. must be exactly 16 alphanumeric characters",
                },
              })}
            />
            {errors.drivingLicenseNumber && (
              <p className="text-red-500 mt-1 text-xs">
                {errors?.drivingLicenseNumber?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <input
              onInput={(e) => {
                e.target.value = e.target.value.toUpperCase();
              }}
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="text"
              placeholder="Passport No."
              maxLength={9}
              {...register("passportNumber", {
                pattern: {
                  value: /^[A-Z0-9]{8,9}$/,
                  message:
                    "Passport No. must be 8 to 9 alphanumeric uppercase characters",
                },
              })}
            />

            {errors.passportNumber && (
              <p className="text-red-500 mt-1 text-xs">
                {errors?.passportNumber?.message}
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
                  {...register("bankDetails.name")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Bank"
                  {...register("bankDetails.bank")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Savings / Current"
                  {...register("bankDetails.savingsCurrent")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Account Number"
                  {...register("bankDetails.accountNumber")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="URL"
                  {...register("bankDetails.url")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="User ID"
                  {...register("bankDetails.userId")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                  {...register("bankDetails.password")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Transaction Password"
                  {...register("bankDetails.transactionPassword")}
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Debit Card No."
                  {...register("bankDetails.debitCardNo")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Debit Card PIN"
                  {...register("bankDetails.debitCardPin")}
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="IFSC"
                  {...register("bankDetails.ifsc")}
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="CIF"
                  {...register("bankDetails.cif")}
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Nominee"
                  {...register("bankDetails.nominee")}
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="email"
                  placeholder="E-Mail"
                  {...register("bankDetails.bankEmail")}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 gap-2">
                <div className="col-span-1">
                  <div className="flex flex-col gap-2">
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="text"
                      placeholder="Mobile No"
                      {...register("bankDetails.bankMobile")}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="text"
                      placeholder="Debit Card No."
                      {...register("bankDetails.debitCardNo")}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 col-span-1 h-full">
                  <textarea
                    className="w-full h-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 resize-none"
                    type="text"
                    placeholder="Bank Address"
                    {...register("bankDetails.bankAddress")}
                  />
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
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Bank"
                  {...register("creditCardDetails.bank")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Savings / Current"
                  {...register("creditCardDetails.savingsCurrent")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Account Number"
                  {...register("creditCardDetails.accountNumber")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="URL"
                  {...register("creditCardDetails.url")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="User ID"
                  {...register("creditCardDetails.userId")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                  {...register("creditCardDetails.password")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Transaction Password"
                  {...register("creditCardDetails.transactionPassword")}
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Credit Card No."
                  {...register("creditCardDetails.creditCardNo")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Credit Card PIN"
                  {...register("creditCardDetails.creditCardPin")}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 gap-2">
                <div className="col-span-1">
                  <div className="flex flex-col gap-2">
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="email"
                      placeholder="E-Mail"
                      {...register("creditCardDetails.bankEmail")}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="text"
                      placeholder="Mobile No"
                      {...register("creditCardDetails.bankMobile")}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 col-span-1 h-full">
                  <textarea
                    className="w-full h-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 resize-none"
                    type="text"
                    placeholder="Bank Address"
                    {...register("creditCardDetails.bankAddress")}
                  />
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
