// --------------------------------------------------Imports----------------------------------------
import React, { useEffect, useState } from "react";
import userBg from "../../../assets/Images/userBg.jpg";
// import Select from "react-select";
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
// -------------------------------------------------------------------------------------------------

const CreateStaff
= () => {
  const { loggedInUserData } = useSelector((state) => state.auth);
  const [role, setRole] = useState("");
  // -------------------------------------------------------------------------------------------------
  // --------------------------------------------------Hooks----------------------------------------
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isUserLoading, isUserCreated } = useSelector((state) => state?.user);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  // -------------------------------------------------------------------------------------------------
  // ------------------------------------------------Functions----------------------------------------
  // createUserHandler -- handler to create the user
  const createUserHandler = (data) => {

    try {
      const { userName, fullName, email, password } = data;
      const payload = { userName, fullName, email, password, role };
      if (userName && fullName && email && password) {
        if (!role) {
          toast.error("Please Choose a role for the user");
        } else {
          dispatch(createUser({ payload }));
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };


  // ------------------------------------------------useEffect----------------------------------------
  useEffect(() => {
    if (isUserCreated) {
      dispatch(resetUserState(false));
      reset();
      setRole("");
      dispatch(getUsers());
    }
  }, [isUserCreated]);

  // -------------------------------------------------------------------------------------------------
  return (
    <div>
      <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div class="max-w-screen-xl m-0 sm:m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <h1 className="text-center font-bold text-blue-600 text-sm sm:text-lg md:text-xl">
Create New Employee
            </h1>
            <div class="mt-12 flex flex-col items-center">
              <div class="w-full flex-1 mt-8">
                <form
                  class="mx-auto max-w-xs"
                  onSubmit={handleSubmit(createUserHandler)}
                >
                  <input
                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Username"
                    {...register("userName", {
                      required: {
                        value: true,
                        message: "User Name is a required field",
                      },
                    })}
                  />
                  {errors.userName && (
                    <p className="text-red-500 mt-1">
                      {errors?.userName?.message ||
                        "User Name is a required field"}
                    </p>
                  )}
                  <input
                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
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
                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
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
                    <p className="text-red-500 mt-1">
                      {errors?.email?.message || "Email is a required field"}
                    </p>
                  )}
                  <input
                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
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
                  {/* <div class="w-full rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5">
                    <Select options={roleOptions} onChange={roleHandler} />
                  </div> */}
                  {isUserLoading ? (
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

export default CreateStaff
;
