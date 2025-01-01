// --------------------------------------------------Imports----------------------------------------
import React, { useEffect, useState } from "react";
import userBg from "../../../assets/Images/userBg.jpg";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import CircleLoader from "../../../components/Loader/ButtonLoaders/CircleLoader";
import { useSelector } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { createCustomer } from "../../../features/actions/Auth/customer";
import { useNavigate } from "react-router-dom";

// -------------------------------------------------------------------------------------------------

const CreateUser = () => {
  const { loggedInUserData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, customerData } = useSelector((state) => state?.customer);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) || "Please enter a valid email address";
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch
  } = useForm();
  // -------------------------------------------------------------------------------------------------

  const createUserHandler = (data) => {
dispatch(createCustomer({...data,consultantId:loggedInUserData?._id}))
  };


  // ------------------------------------------------useEffect----------------------------------------
  useEffect(() => {
 if(customerData?.status){
  navigate("/users")
    }
  }, [customerData]);

  // -------------------------------------------------------------------------------------------------
  return (
    <div>
      <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div class="max-w-screen-xl m-0 sm:m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <h1 className="text-center font-bold text-blue-600 text-sm sm:text-lg md:text-xl">
            {    loggedInUserData.role === "1" ? "Create Client Account" : "Create Staff Account" }  
            </h1>

            <div class="mt-12 flex flex-col items-center">
              <div class="w-full flex-1 mt-8">
                <form
                  class="mx-auto max-w-xs"
                  onSubmit={handleSubmit(createUserHandler)}
                >
                  <input
                    class="w-full px-6 py-4 rounded-lg font-medium border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
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
                    <p className="text-red-500 mt-1">
                      {errors?.fullName?.message ||
                        "Full Name is a required field"}
                    </p>
                  )}
                  <input
                    class="w-full px-6 py-4 rounded-lg font-medium border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is a required field",
                      },
                      validate: validateEmail,
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 mt-1">
                      {errors?.email?.message || "Email is a required field"}
                    </p>
                  )}
                  <input
                    class="w-full px-6 py-4 rounded-lg font-medium  border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
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
                    <p className="text-red-500 mt-1">
                      {errors?.password?.message ||
                        "Password is a required field"}
                    </p>
                  )}

                  <div className="relative">
                  <input
                    class="w-full px-6 py-4 rounded-lg font-medium  border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                   type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    {...register("confirmPassword", {
                      required: {
                        value: true,
                        message: "Confirm Password is a required field",         
                      },
                      validate: (value) =>
                        value === watch("password") || "The passwords does not match",
                    })}
                  />
                      <span
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer pt-5 "
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
                  </div>
              

  {errors.confirmPassword && (
                    <p className="text-red-500 mt-1">
                      {errors?.confirmPassword?.message ||
                        "Confirm Password is a required field"}
                    </p>
                  )}
      
     
                  {isLoading ? (
                    <button
                      class="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      type="submit"
                    >
                      <CircleLoader />
                    </button>
                  ) : (
                    <button
                      class="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      type="submit"
                    >
                      <svg
                        class="w-6 h-6 -ml-2"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                      <span class="ml-3">Create</span>
                    </button>
                  )}
                  <p class="mt-6 text-xs text-gray-600 text-center">
                    Shiven Consultancy <br />
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div class="flex-1 bg-green-100 text-center hidden lg:flex">
            <img src={userBg} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
