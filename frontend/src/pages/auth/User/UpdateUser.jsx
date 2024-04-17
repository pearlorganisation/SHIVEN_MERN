// ------------------------------------------------Imports--------------------------------------------------
import React from "react";
import Select from "react-select";
import { roleChecker } from "../../../utils";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

// ---------------------------------------------------------------------------------------------------------

const UpdateUser = () => {
  // ------------------------------------------------States--------------------------------------------------
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
  // ---------------------------------------------------------------------------------------------------------
  // ------------------------------------------------Hooks--------------------------------------------------
  const location = useLocation();

  const userData = location?.state?.userData || {};

  const {
    register,
    formState: { errors },
    reset,
  } = useForm();
  // ---------------------------------------------------------------------------------------------------------
  // ----------------------------------------------Functions--------------------------------------------------
  // ---------------------------------------------------------------------------------------------------------
  // ---------------------------------------------useEffects--------------------------------------------------
  // ---------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------------------------------------------------------------

  // ---------------------------------------------------------------------------------------------------------
  return (
    <div>
      <div class="p-8 rounded border border-gray-200">
        <h1 class="font-medium text-3xl">Update User</h1>
        <p class="text-gray-600 mt-6">
          <span className={"text-red-500 font-bold text-lg"}>Note!</span>
          <p className="text-blue-700">Email and Username cannot be changed</p>
        </p>
        <form>
          <div class="mt-8 grid lg:grid-cols-2 gap-4">
            <div>
              <label
                for="name"
                class="text-sm text-gray-700 block mb-1 font-medium"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter your name"
                {...register("fullName")}
              />
            </div>
            <div>
              <label
                for="email"
                class="text-sm text-gray-700 block mb-1 font-medium"
              >
                User Name
              </label>
              <input
                type="text"
                name="email"
                id="email"
                class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="yourmail@provider.com"
                disabled={true}
                {...register("userName")}
              />
            </div>
            <div>
              <label
                for="job"
                class="text-sm text-gray-700 block mb-1 font-medium"
              >
                Email
              </label>
              <input
                type="text"
                name="job"
                id="job"
                class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="(ex. developer)"
                disabled={true}
                {...register("email")}
              />
            </div>
            <div>
              <label
                for="brithday"
                class="text-sm text-gray-700 block mb-1 font-medium"
              >
                Password
              </label>
              <input
                type="text"
                name="brithday"
                id="brithday"
                class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="(01/01/1993)"
                {...register("password")}
              />
            </div>
            <div>
              <label
                for="brithday"
                class="text-sm text-gray-700 block mb-1 font-medium"
              >
                Role
              </label>
              <Select options={roleOptions} />
            </div>
          </div>
          <div class="space-x-4 mt-8">
            <button
              type="submit"
              class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
            >
              Save
            </button>
            <button class="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
