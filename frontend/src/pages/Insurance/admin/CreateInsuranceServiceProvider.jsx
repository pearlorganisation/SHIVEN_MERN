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
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
// -------------------------------------------------------------------------------------------------

const CreateInsuranceServiceProvider = () => {
  // --------------------------------------------------States----------------------------------------
  const providerFormValidationSchema = yup.object().shape({
    insuranceServiceProviderName: yup
      .string()
      .required("Insurance Service Provider Name is a required field"),
  });

  const [serviceProviderIconUrl, setServiceProviderIconUrl] = useState("");

  const [selectedInsurance, setSelectedInsurance] = useState("");

  const [insurances, setInsurances] = useState([]);

  const [insuranceSelectOptions, setInsuranceSelectOptions] = useState([
    { label: "Health Insurance", value: "Health Insurance", index: 0 },
    { label: "Motor Insurance", value: "Motor Insurance", index: 1 },
  ]);
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

  // insuranceSelectionHandler -- handler to handle the insurance selection
  const insuranceSelectionHandler = (e) => {
    try {
      setSelectedInsurance(e);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // insuranceCategoryCreationHandler -- handler to create the insurance category
  const insuranceCategoryCreationHandler = () => {
    try {
      if (selectedInsurance) {
        setInsurances([
          ...insurances,
          {
            insuranceId: selectedInsurance.value,
            insuranceCategories: [{ categoryName: "", categoryIcon: "" }],
          },
        ]);

        setInsuranceSelectOptions((prevData) => {
          const copy = JSON.parse(JSON.stringify(prevData));
          copy.splice(selectedInsurance.index, 1);
          return copy;
        });

        setSelectedInsurance("");
      } else {
        return toast.error("Please Select the Insurance");
      }
    } catch (error) {
      toast.error(error.message);
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
                  <Select
                    className="w-[300px]"
                    options={insuranceSelectOptions}
                    onChange={insuranceSelectionHandler}
                  />
                  <button
                    type="button"
                    onClick={insuranceCategoryCreationHandler}
                    className="border rounded-lg p-2 bg-blue-950 text-white font-bold tracking-wider"
                  >
                    Create Insurance Categories
                  </button>
                </div>
                <div className="thirdBox">
                  {Array.isArray(insurances) &&
                    insurances.length > 0 &&
                    insurances.map((insurance, insuranceIndex) => {
                      return (
                        <div className="insuranceCategoryCard border rounded-lg bg-gray-100 p-2 mt-2">
                          <h3>Insurance : {insurance.insuranceId}</h3>
                          {Array.isArray(insurance.insuranceCategories) &&
                            insurance.insuranceCategories.length > 0 &&
                            insurance.insuranceCategories.map(
                              (insuranceCategory, insuranceCategoryIndex) => {
                                return (
                                  <div className="insuranceCategoryCardItem p-6 flex">
                                    <div className="flex flex-col items-center flex-1">
                                      <div className="w-[50%]">
                                        <label>Insurance Category Name</label>
                                        <input
                                          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-200 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                          type="text"
                                          placeholder="Insurance Category Name"
                                          {...register(
                                            `insuranceCategoryName${insuranceIndex}${insuranceCategoryIndex}`,
                                            {
                                              required: {
                                                value: true,
                                                message:
                                                  "Insurance Category Name is a required field",
                                              },
                                            }
                                          )}
                                        />
                                        {errors.insuranceServiceProviderName && (
                                          <p className="text-red-500 mt-1">
                                            {
                                              errors
                                                ?.insuranceServiceProviderName
                                                ?.message
                                            }
                                          </p>
                                        )}
                                      </div>
                                      <div className="w-[50%]">
                                        <label>Insurance Category Icon</label>
                                        <input
                                          type="file"
                                          placeholder="Insurance Category Icon"
                                          {...register(
                                            `insuranceCategoryIcon${insuranceIndex}${insuranceCategoryIndex}`,
                                            {
                                              required: {
                                                value: true,
                                                message:
                                                  "Insurance Category Name is a required field",
                                              },
                                            }
                                          )}
                                        />
                                        {errors.insuranceServiceProviderName && (
                                          <p className="text-red-500 mt-1">
                                            {
                                              errors
                                                ?.insuranceServiceProviderName
                                                ?.message
                                            }
                                          </p>
                                        )}
                                      </div>
                                    </div>
                                    <div className="btnContainer flex">
                                      <div className="flex h-[30%] items-center gap-3">
                                        <div className="addBtn">
                                          <FaPlus
                                            size={25}
                                            className="cursor-pointer hover:text-blue-700 active:text-blue-900"
                                          />
                                        </div>
                                        <div className="deleteCategoryBtn">
                                          <FaRegTrashAlt
                                            size={25}
                                            className="cursor-pointer hover:text-blue-700 active:text-blue-900"
                                          />
                                        </div>
                                        <div className="saveCategoryBtn">
                                          <button
                                            type="button"
                                            className="border rounded-xl p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold tracking-wider active:bg-blue-900"
                                          >
                                            Save Category
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                        </div>
                      );
                    })}
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
