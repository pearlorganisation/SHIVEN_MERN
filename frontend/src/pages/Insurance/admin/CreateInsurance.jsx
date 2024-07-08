// --------------------------------------------------Imports----------------------------------------
import React, { useEffect, useRef, useState } from "react";
import insuranceBg from "../../../assets/Images/Insurance/Insurance.jpg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  createUser,
  getUsers,
} from "../../../features/actions/Auth/userActions";
import { useDispatch } from "react-redux";
import CircleLoader from "../../../components/Loader/ButtonLoaders/CircleLoader";
import { useSelector } from "react-redux";
import { roleChecker } from "../../../utils";
import { resetUserState } from "../../../features/slices/Auth/userSlice";
import {
  createInsurance,
  getInsurances,
} from "../../../features/actions/Insurance/insuranceActions";
import { resetInsuranceState } from "../../../features/slices/Insurance/insuranceSlice";
// -------------------------------------------------------------------------------------------------

const CreateInsurance = () => {
  // --------------------------------------------------States----------------------------------------
  const roleOptions = [
    {
      label: "Consultant",
      value: roleChecker("CONSULTANT"),
    },
    {
      label: "Customer",
      value: roleChecker("CUSTOMER"),
    },
  ];

  const [role, setRole] = useState("");
  const [iconUrl, setIconUrl] = useState("");
  const [iconBlob, setIconBlob] = useState("");
  // -------------------------------------------------------------------------------------------------
  // --------------------------------------------------Hooks----------------------------------------
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isInsuranceLoading, isInsuranceCreated } = useSelector(
    (state) => state.insurance
  );

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    clearErrors,
  } = useForm();

  const iconInputRef = useRef();
  // -------------------------------------------------------------------------------------------------
  // ------------------------------------------------Functions----------------------------------------
  // createInsuranceHandler -- handler to create the insurance
  const createInsuranceHandler = (data) => {
    try {
      const { insuranceType, insuranceDescription } = data;

      if (iconBlob) {
        const payload = JSON.stringify({ insuranceType, insuranceDescription });
        const formData = new FormData();
        formData.append("payload", payload);
        formData.append("mediaFile", iconBlob);
        dispatch(createInsurance(formData));
      } else {
        toast.error("Please Select a Insurance Icon");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // roleHandler -- handler to handle the roles
  const roleHandler = (data) => {
    try {
      setRole(data?.value);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // iconChangeHandler -- handler to handle the icon image
  const iconChangeHandler = (e) => {
    try {
      if (e.target.files) {
        const { files } = e?.target;
        let url = URL.createObjectURL(files[0]);
        setIconUrl(url);
        setIconBlob(files[0]);
        clearErrors("insuranceIcon");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // ------------------------------------------------useEffect----------------------------------------
  useEffect(() => {
    if (isInsuranceCreated) {
      dispatch(resetInsuranceState(false));
      reset();
      dispatch(getInsurances());
      setIconUrl("");
      setIconBlob("");
    }
  }, [isInsuranceCreated]);

  // -------------------------------------------------------------------------------------------------
  return (
    <div>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <h1 className="text-center font-bold text-blue-600 text-sm sm:text-lg md:text-xl">
              Create Insurance
            </h1>
            <div className="mt-12 flex flex-col items-center">
              <div className="w-full flex-1 mt-8">
                <form
                  className="mx-auto max-w-xs"
                  onSubmit={handleSubmit(createInsuranceHandler)}
                >
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Insurance Type"
                    {...register("insuranceType", {
                      required: {
                        value: true,
                        message: "Insurance Type is a required field",
                      },
                    })}
                  />
                  {errors.insuranceType && (
                    <p className="text-red-500 mt-1">
                      {errors?.insuranceType?.message ||
                        "Insurance Type is a required field"}
                    </p>
                  )}
                  <textarea
                    className="w-full max-h-[200px] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    placeholder="Insurance Description"
                    {...register("insuranceDescription", {
                      required: {
                        value: true,
                        message: "Insurance Description is a required field",
                      },
                    })}
                  />
                  {errors.insuranceDescription && (
                    <p className="text-red-500 mt-1">
                      {errors?.insuranceDescription?.message ||
                        "Insurance Description is a required field"}
                    </p>
                  )}
                  <input
                    className="w-full hidden px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="file"
                    placeholder="Insurance Icon"
                    {...register("insuranceIcon", {
                      required: {
                        value: false,
                        message: "Insurance Icon is a required field",
                      },
                    })}
                    ref={iconInputRef}
                    onChange={iconChangeHandler}
                  />
                  <div
                    className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none cursor-pointer focus:border-gray-400 focus:bg-white mt-5 max-h-[200px] ${
                      !iconUrl ? "" : "flex justify-center h-[200px]"
                    }`}
                    onClick={() => {
                      iconInputRef?.current?.click();
                    }}
                  >
                    {!iconUrl && (
                      <p className="text-gray-500 font-medium">
                        <span className="text-red-500 font-bold">
                          Select :{" "}
                        </span>
                        Insurance Icon
                      </p>
                    )}
                    {iconUrl && <img src={iconUrl} className=" !h-[100%]" />}
                  </div>
                  {errors?.insuranceIcon && (
                    <p className="text-red-500 mt-1">
                      {errors?.insuranceIcon?.message ||
                        "Insurance Icon is a required field"}
                    </p>
                  )}
                  {isInsuranceLoading ? (
                    <button
                      className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      type="button"
                    >
                      <CircleLoader />
                    </button>
                  ) : (
                    <button
                      className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      type="submit"
                    >
                      <span className="ml-">Create Insurance</span>
                    </button>
                  )}
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    Shiven Consultancy <br />
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-green-100 text-center hidden lg:flex">
            <img src={insuranceBg} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateInsurance;
