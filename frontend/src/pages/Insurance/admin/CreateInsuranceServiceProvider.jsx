// --------------------------------------------------Imports----------------------------------------
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import CircleLoader from "../../../components/Loader/ButtonLoaders/CircleLoader";
import { resetInsuranceState } from "../../../features/slices/Insurance/insuranceSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "react-select";
import { FaPlus } from "react-icons/fa";
// -------------------------------------------------------------------------------------------------

const CreateInsuranceServiceProvider = () => {
  // --------------------------------------------------States----------------------------------------
  const providerFormValidationSchema = yup.object().shape({
    insuranceServiceProviderName: yup
      .string()
      .required("Insurance Service Provider Name is a required field"),
  });

  const [serviceProviderIconUrl, setServiceProviderIconUrl] = useState("");
  // -------------------------------------------------------------------------------------------------
  // --------------------------------------------------Hooks----------------------------------------
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const serviceProviderIconRef = useRef();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    clearErrors,
  } = useForm({
    resolver: yupResolver(providerFormValidationSchema),
  });

  // -------------------------------------------------------------------------------------------------
  // ------------------------------------------------Functions----------------------------------------
  // serviceProviderIconHandler -- handler to handle the service provider icon
  const serviceProviderIconHandler = (e) => {
    try {
      if (e.target.files) {
        const { files } = e?.target;
        let url = URL.createObjectURL(files[0]);
        setServiceProviderIconUrl(url);
      }
    } catch (error) {
      return toast.error(error.message);
    }
  };

  // ------------------------------------------------useEffect----------------------------------------

  // -------------------------------------------------------------------------------------------------
  return (
    <div>
      <div className="min-h-screen w-[100%] bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl w-[100%] m-0 sm:m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="p-6">
            <h1 className="text-center font-bold text-blue-600 text-sm sm:text-lg md:text-xl">
              Create Insurance Service Provider
            </h1>
            <div className="providerContainer mt-4 w-[100%]">
              <form action="">
                <div className="firstBox grid grid-cols-2 grid-rows-4 gap-4">
                  <div>
                    <label>Insurance Service Provider Name</label>
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="text"
                      placeholder="Insurance Service Provider Name"
                      {...register("insuranceServiceProviderName", {
                        required: {
                          value: true,
                          message:
                            "Insurance Service Provider Name is a required field",
                        },
                      })}
                    />
                    {errors.insuranceServiceProviderName && (
                      <p className="text-red-500 mt-1">
                        {errors?.insuranceServiceProviderName?.message}
                      </p>
                    )}
                  </div>
                  <div className={`row-span-4`}>
                    <label className="">
                      Insurance Service Provider Description
                    </label>
                    <textarea
                      className="w-full h-[85%] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white resize-none"
                      type="text"
                      placeholder="Insurance Service Provider Description"
                      {...register("insuranceServiceProviderDescription", {
                        required: {
                          value: true,
                          message:
                            "Insurance Service Provider Name is a required field",
                        },
                      })}
                    />
                    {errors.insuranceServiceProviderDescription && (
                      <p className="text-red-500 mt-1">
                        {errors?.insuranceServiceProviderDescription?.message}
                      </p>
                    )}
                  </div>
                  <div className={`row-span-3`}>
                    <label className="h-[20%]">
                      Insurance Service Provider Icon
                    </label>
                    <input
                      className="hidden"
                      ref={serviceProviderIconRef}
                      type="file"
                      onChange={serviceProviderIconHandler}
                    />
                    <div
                      className="w-full px-8 h-[80%] py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white cursor-pointer flex justify-center items-center"
                      onClick={() => {
                        serviceProviderIconRef?.current?.click();
                      }}
                    >
                      {serviceProviderIconUrl ? (
                        <img
                          src={serviceProviderIconUrl}
                          className="h-[150px] w-[200px]"
                        />
                      ) : (
                        <p className="text-gray-500 font-medium">
                          Choose Service Provider Icon
                        </p>
                      )}
                    </div>

                    {errors.insuranceType && (
                      <p className="text-red-500 mt-1">
                        {errors?.insuranceType?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="secondBox grid place-content-center gap-2">
                  <label className="justify-self-center">Insurance Type</label>
                  <Select className="w-[300px]" />
                  <button className="border rounded-lg p-2 bg-blue-950 text-white font-bold tracking-wider">
                    Create Insurance Categories
                  </button>
                </div>
                <div className="thirdBox">
                  <div className="insuranceCategoryCard border rounded-lg bg-gray-100 p-2 mt-2">
                    <h3>Insurance : Health Insurance</h3>
                    <div className="insuranceCategoryCardItem p-6 flex">
                      <div>
                        <div>
                          <label>Insurance Category Name</label>
                          <input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-200 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="text"
                            placeholder="Insurance Category Name"
                            {...register("insuranceServiceProviderName", {
                              required: {
                                value: true,
                                message:
                                  "Insurance Category Name is a required field",
                              },
                            })}
                          />
                          {errors.insuranceServiceProviderName && (
                            <p className="text-red-500 mt-1">
                              {errors?.insuranceServiceProviderName?.message}
                            </p>
                          )}
                        </div>
                        <div className={`row-span-3`}>
                          <label className="h-[20%]">
                            Insurance Category Icon
                          </label>
                          <input
                            className="hidden"
                            ref={serviceProviderIconRef}
                            type="file"
                            onChange={serviceProviderIconHandler}
                          />
                          <div
                            className="w-full px-8 h-[80%] py-4 rounded-lg font-medium bg-gray-200 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white cursor-pointer flex justify-center items-center"
                            onClick={() => {
                              serviceProviderIconRef?.current?.click();
                            }}
                          >
                            {serviceProviderIconUrl ? (
                              <img
                                src={serviceProviderIconUrl}
                                className="h-[150px] w-[200px]"
                              />
                            ) : (
                              <p className="text-gray-500 font-medium">
                                Choose Service Provider Icon
                              </p>
                            )}
                          </div>

                          {errors.insuranceType && (
                            <p className="text-red-500 mt-1">
                              {errors?.insuranceType?.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="">
                        <div className="addBtn">
                          <FaPlus />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submitBtn text-center p-3">
                  <button className="border rounded-lg tracking-wider bg-red-700 p-2  text-white font-bold">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateInsuranceServiceProvider;
