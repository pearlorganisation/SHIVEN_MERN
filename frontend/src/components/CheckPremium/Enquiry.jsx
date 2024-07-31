import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Enquiry = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const navigate = useNavigate();
  const handelNavigate = () => {
    navigate("/HealthPremium");
  };
  return (
    <div className="pt-16 h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Enquiry Form
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className={`mt-1 block w-full rounded-md border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
              placeholder="Enter Your Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              className={`mt-1 block w-full rounded-md border ${
                errors.age ? "border-red-500" : "border-gray-300"
              } p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
              placeholder="Enter Your Age"
              {...register("age", {
                required: "Age is required",
                min: { value: 1, message: "Age must be at least 1" },
                max: { value: 120, message: "Age must be at most 120" },
              })}
            />
            {errors.age && (
              <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="number"
              className="block text-sm font-medium text-gray-700"
            >
              Number
            </label>
            <input
              type="text"
              id="number"
              className={`mt-1 block w-full rounded-md border ${
                errors.number ? "border-red-500" : "border-gray-300"
              } p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
              placeholder="Enter Your Number"
              {...register("number", {
                required: "Number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Number must be 10 digits",
                },
              })}
            />
            {errors.number && (
              <p className="text-red-500 text-xs mt-1">
                {errors.number.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            onClick={handelNavigate}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Enquiry;
