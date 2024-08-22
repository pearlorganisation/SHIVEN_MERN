import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const MotorEnquiry = () => {
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
              vehicle registration Number
            </label>
            <input
              type="number"
              id="registration"
              className={`mt-1 block w-full rounded-md border ${
                errors.modalName ? "border-red-500" : "border-gray-300"
              } p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
              placeholder="Enter Modal Name"
              {...register("registration", {
                required: "Modal Name is required",
              })}
            />
            {errors.registration && (
              <p className="text-red-500 text-xs mt-1">
                {errors.registration.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="Mobile No"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile No
            </label>
            <input
              type="number"
              id="monumber"
              className={`mt-1 block w-full rounded-md border ${
                errors.ownerName ? "border-red-500" : "border-gray-300"
              } p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
              placeholder="Enter Owner Name"
              {...register("number", { required: "Owner Name is required" })}
            />
            {errors.number && (
              <p className="text-red-500 text-xs mt-1">
                {errors.number.message}
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
              <option value="Scooty">Car</option>
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

export default MotorEnquiry;
