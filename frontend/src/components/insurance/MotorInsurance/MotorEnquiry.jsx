import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector
import { useNavigate } from "react-router-dom";
import { motorEnquiry } from "../../../features/actions/Enquiry/motorEnquiryAction";

const MotorEnquiry = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // Dispatch the motorEnquiry action with form data
    dispatch(motorEnquiry(data))
      .unwrap()
      .then((response) => {
        console.log("Enquiry submitted successfully", response);
        navigate("/BikePremium"); // Navigate to another page on success
      })
      .catch((error) => {
        console.error("Failed to submit enquiry", error);
      });
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
              htmlFor="registration"
              className="block text-sm font-medium text-gray-700"
            >
              Vehicle Registration Number
            </label>
            <input
              type="text"
              id="registration"
              className={`mt-1 block w-full rounded-md border ${
                errors.registration ? "border-red-500" : "border-gray-300"
              } p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
              placeholder="Enter Vehicle Registration Number"
              {...register("registration", {
                required: "Vehicle Registration Number is required",
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
              htmlFor="number"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile No
            </label>
            <input
              type="text"
              id="number"
              className={`mt-1 block w-full rounded-md border ${
                errors.number ? "border-red-500" : "border-gray-300"
              } p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
              placeholder="Enter Mobile Number"
              {...register("number", {
                required: "Mobile Number is required",
              })}
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
              <option value="Car">Car</option>
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
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MotorEnquiry;
