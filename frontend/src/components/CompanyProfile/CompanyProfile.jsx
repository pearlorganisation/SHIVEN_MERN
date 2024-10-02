import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CircleLoader } from "react-spinners";

const CompanyProfile = () => {
  const [isUserLoading, setIsUserLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-center font-bold text-blue-600 text-sm sm:text-lg md:text-xl">
        Company Profile
      </h1>
      <div className="h-screen">
        <div class="w-full flex-1 mt-8">
          <form class="mx-auto max-w-xs" onSubmit={handleSubmit(onSubmit)}>
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
                {errors?.userName?.message || "User Name is a required field"}
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
                {errors?.fullName?.message || "Full Name is a required field"}
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
                {errors?.password?.message || "Password is a required field"}
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
  );
};

export default CompanyProfile;
