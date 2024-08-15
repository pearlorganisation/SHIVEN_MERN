import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const BikeEnquiry = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/BikePremium");
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
              htmlFor="modalName"
              className="block text-sm font-medium text-gray-700"
            >
              Modal Name
            </label>
            <input
              type="text"
              id="modalName"
              className={`mt-1 block w-full rounded-md border ${
                errors.modalName ? "border-red-500" : "border-gray-300"
              } p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
              placeholder="Enter Modal Name"
              {...register("modalName", { required: "Modal Name is required" })}
            />
            {errors.modalName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.modalName.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="ownerName"
              className="block text-sm font-medium text-gray-700"
            >
              Owner Name
            </label>
            <input
              type="text"
              id="ownerName"
              className={`mt-1 block w-full rounded-md border ${
                errors.ownerName ? "border-red-500" : "border-gray-300"
              } p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
              placeholder="Enter Owner Name"
              {...register("ownerName", { required: "Owner Name is required" })}
            />
            {errors.ownerName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.ownerName.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="registrationYear"
              className="block text-sm font-medium text-gray-700"
            >
              Registration Year
            </label>
            <input
              type="date"
              id="registrationYear"
              className={`mt-1 block w-full rounded-md border ${
                errors.registrationYear ? "border-red-500" : "border-gray-300"
              } p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
              placeholder="Enter Registration Year"
              {...register("registrationYear", {
                required: "Registration Year is required",
                min: { value: 1900, message: "Year must be at least 1900" },
                max: {
                  value: new Date().getFullYear(),
                  message: "Year must be at most current year",
                },
              })}
            />
            {errors.registrationYear && (
              <p className="text-red-500 text-xs mt-1">
                {errors.registrationYear.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="bikeNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Bike Number
            </label>
            <input
              type="text"
              id="bikeNumber"
              className={`mt-1 block w-full rounded-md border ${
                errors.bikeNumber ? "border-red-500" : "border-gray-300"
              } p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
              placeholder="Enter Bike Number"
              {...register("bikeNumber", {
                required: "Bike Number is required",
                pattern: {
                  value: /^[A-Z0-9]+$/,
                  message: "Bike Number must be alphanumeric",
                },
              })}
            />
            {errors.bikeNumber && (
              <p className="text-red-500 text-xs mt-1">
                {errors.bikeNumber.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="vehicleType"
              className="block text-sm font-medium text-gray-700"
            >
              Vehicle Type
            </label>
            <select
              id="vehicleType"
              className={`mt-1 block w-full rounded-md border ${
                errors.vehicleType ? "border-red-500" : "border-gray-300"
              } p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
              {...register("vehicleType", {
                required: "Vehicle Type is required",
              })}
            >
              <option value="">Select Type</option>
              <option value="Scooty">Scooty</option>
              <option value="Bike">Bike</option>
            </select>
            {errors.vehicleType && (
              <p className="text-red-500 text-xs mt-1">
                {errors.vehicleType.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            onClick={handleNavigate}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BikeEnquiry;
