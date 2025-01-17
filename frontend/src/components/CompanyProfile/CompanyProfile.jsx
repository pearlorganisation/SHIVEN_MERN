import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { CircleLoader } from "react-spinners";
import { createOrUpdateCompanyProfile, getParticularCompanyProfile } from "../../features/actions/companyProfile";

const CompanyProfile = () => {

  const { companyProfileData, isCreated ,isLoading} = useSelector((state) => state.companyProfile);
  const [isDisabled, setIsDisabled] = useState(true);
  const { loggedInUserData } = useSelector((state) => state.auth);

  const dispatch =useDispatch()

  const {
    register,
    formState: { errors },
    handleSubmit,
    setFocus,
  } = useForm({
    defaultValues:companyProfileData
  });

  const onSubmit = (data) => {

    const newData= {...data,consultantId:loggedInUserData?._id}
dispatch(createOrUpdateCompanyProfile(newData))

  };

  const handleEditClick = () => {
    setIsDisabled(false); // Enable the input fields
    setTimeout(() => {
      setFocus("companyName"); // Focus on the first field after enabling
    }, 10); // Delay to allow the re-render to complete
  };

  useEffect(()=>{
    if(isCreated)
      dispatch(getParticularCompanyProfile(loggedInUserData?._id))
    setIsDisabled(true);
  },[isCreated])

  useEffect(()=>{
dispatch(getParticularCompanyProfile(loggedInUserData?._id))
  },[])

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
            <div className="grid grid-cols-2 gap-4">
            <div className="relative border-t-2 border-x-2 rounded-xl">
                <input
                id="floating_outlined"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  disabled={isDisabled}
                  {...register("companyName", {
                    required: {
                      value: true
                    },
                  })}
                />
                     <label
                  for="floating_outlined"
                  class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Company Name
                </label>
                {errors.companyName && (
                  <p className="text-red-500 mt-1 text-xs">
              Company Name is a required field
                  </p>
                )}
                </div>
                <div className="relative border-t-2 border-x-2 rounded-xl">
                <input
                id="floating_outlined"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="number"
                  disabled={isDisabled}
                  {...register("mobileNumber", {
                    required: {
                      value: true
                    },
                  })}
                />
                     <label
                  for="floating_outlined"
                  class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Mobile Number
                </label>
                {errors.mobileNumber && (
                  <p className="text-red-500 mt-1 text-xs">
Mobile Number is a required field
                  </p>
                )}
                </div>
                <div className="relative border-t-2 border-x-2 rounded-xl">
                <input
                id="floating_outlined"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  disabled={isDisabled}
                  {...register("website", {
                    required: {
                      value: true
                    },
                  })}
                />
                     <label
                  for="floating_outlined"
                  class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Website
                </label>
                {errors.website && (
                  <p className="text-red-500 mt-1 text-xs">
Website is a required field
                  </p>
                )}
                </div>
                <div className="relative border-t-2 border-x-2 rounded-xl">
                <input
                id="floating_outlined"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="email"
                  disabled={isDisabled}
                  {...register("email", {
                    required: {
                      value: true
                    },
                  })}
                />
                     <label
                  for="floating_outlined"
                  class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Email
                </label>
                {errors.email && (
                  <p className="text-red-500 mt-1 text-xs">
     Email is a required field
                  </p>
                )}
                </div>
              <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 gap-2">
              <div className="relative  border-t-2 border-x-2 rounded-xl">
                <textarea
                id="floating_outlined"
                  className="w-full h-[90%] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  disabled={isDisabled}
                  {...register("address")}
                />
                     <label
                  for="floating_outlined"
                  class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Address
                </label>

                </div>

                <div className="col-span-1 space-y-4">
                <div className="relative border-t-2 border-x-2 rounded-xl">
                <input
                id="floating_outlined"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  disabled={isDisabled}
                  {...register("gstNumber", {
                    required: {
                      value: true
                    },
                  })}
                />
                     <label
                  for="floating_outlined"
                  class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  GST Number
                </label>
                {errors.gstNumber && (
                  <p className="text-red-500 mt-1 text-xs">
GST Number is a required field
                  </p>
                )}
                </div>
                <div className="relative border-t-2 border-x-2 rounded-xl">
                <input
                id="floating_outlined"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  disabled={isDisabled}
                  {...register("companyPan", {
                    required: {
                      value: true
                    },
                  })}
                />
                     <label
                  for="floating_outlined"
                  class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Company PAN
                </label>
                {errors.companyPan && (
                  <p className="text-red-500 mt-1 text-xs">
Company PAN is a required field
                  </p>
                )}
                </div>
                </div>
              </div>

              <div className="relative border-t-2 border-x-2 rounded-xl">
                <input
                id="floating_outlined"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  disabled={isDisabled}
                  {...register("tan", {
                    required: {
                      value: true
                    },
                  })}
                />
                     <label
                  for="floating_outlined"
                  class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  TAN
                </label>
                {errors.tan && (
                  <p className="text-red-500 mt-1 text-xs">
Consultant Name is a required field
                  </p>
                )}
                </div>
                <div className="relative border-t-2 border-x-2 rounded-xl">
                <input
                id="floating_outlined"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  disabled={isDisabled}
                  {...register("coiNumber", {
                    required: {
                      value: true
                    },
                  })}
                />
                     <label
                  for="floating_outlined"
                  class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  COI Number
                </label>
                {errors.coiNumber && (
                  <p className="text-red-500 mt-1 text-xs">
COI Number is a required field
                  </p>
                )}
                </div>
                <div className="relative border-t-2 border-x-2 rounded-xl">
                <input
                id="floating_outlined"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  disabled={isDisabled}
                  {...register("msme", {
                    required: {
                      value: true
                    },
                  })}
                />
                     <label
                  for="floating_outlined"
                  class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  MSME
                </label>
                {errors.msme && (
                  <p className="text-red-500 mt-1 text-xs">
MSME is a required field
                  </p>
                )}
                </div>
                <div className="relative border-t-2 border-x-2 rounded-xl">
                <input
                id="floating_outlined"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  disabled={isDisabled}
                  {...register("ghumasta", {
                    required: {
                      value: true
                    },
                  })}
                />
                     <label
                  for="floating_outlined"
                  class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Ghumasta
                </label>
                {errors.ghumasta && (
                  <p className="text-red-500 mt-1 text-xs">
  Ghumasta is a required field
                  </p>
                )}
                </div>
            </div>
            <div className="flex flex-col gap-4">
  <div className="pl-1 text-lg font-semibold">Bank Details:</div>
  <div className="grid grid-cols-2 gap-4">
  <div className="relative border-t-2 border-x-2 rounded-xl">
                <input
                id="floating_outlined"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  disabled={isDisabled}
                  {...register("bankDetails?.name", {
                    required: {
                      value: true
                    },
                  })}
                />
                     <label
                  for="floating_outlined"
                  class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Name
                </label>
                {errors.bankDetails?.name && (
                  <p className="text-red-500 mt-1 text-xs">
Name is a required field
                  </p>
                )}
                </div>

                <div className="relative border-t-2 border-x-2 rounded-xl">
                <input
                id="floating_outlined"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  disabled={isDisabled}
                  {...register("bankDetails?.bank", {
                    required: {
                      value: true
                    },
                  })}
                />
                     <label
                  for="floating_outlined"
                  class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Bank Name
                </label>
                {errors.bankDetails?.bank && (
                  <p className="text-red-500 mt-1 text-xs">
Bank Name is a required field
                  </p>
                )}
                </div>

                <div className="relative border-t-2 border-x-2 rounded-xl">
                <input
                id="floating_outlined"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  disabled={isDisabled}
                  {...register("bankDetails.savingsCurrent", {
                    required: {
                      value: true
                    },
                  })}
                />
                     <label
                  for="floating_outlined"
                  class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Savings / Current
                </label>
                {errors.bankDetails?.savingsCurrent && (
                  <p className="text-red-500 mt-1 text-xs">
Savings / Current is a required field
                  </p>
                )}
                </div>

                <div className="relative border-t-2 border-x-2 rounded-xl">
                <input
                id="floating_outlined"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  disabled={isDisabled}
                  {...register("bankDetails.accountNumber", {
                    required: {
                      value: true
                    },
                  })}
                />
                     <label
                  for="floating_outlined"
                  class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Account Number
                </label>
                {errors.bankDetails?.accountNumber && (
                  <p className="text-red-500 mt-1 text-xs">
Account Number is a required field
                  </p>
                )}
                </div>

                <div className="relative border-t-2 border-x-2 rounded-xl">
                <input
                id="floating_outlined"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  disabled={isDisabled}
                  {...register("ifsc", {
                    required: {
                      value: true
                    },
                  })}
                />
                     <label
                  for="floating_outlined"
                  class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  IFSC
                </label>
                {errors.ifsc && (
                  <p className="text-red-500 mt-1 text-xs">
IFSC is a required field
                  </p>
                )}
                </div>

                <div className="relative border-t-2 border-x-2 rounded-xl">
                <input
                id="floating_outlined"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  disabled={isDisabled}
                  {...register("cif", {
                    required: {
                      value: true
                    },
                  })}
                />
                     <label
                  for="floating_outlined"
                  class="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  CIF
                </label>
                {errors.cif && (
                  <p className="text-red-500 mt-1 text-xs">
CIF is a required field
                  </p>
                )}
                </div>
  </div>
</div>


            <button
              className="mt-5 tracking-wide text-base font-semibold bg-green-400 text-white w-full md:w-[200px] py-3 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              type="submit"
              disabled={isLoading||isDisabled}
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
