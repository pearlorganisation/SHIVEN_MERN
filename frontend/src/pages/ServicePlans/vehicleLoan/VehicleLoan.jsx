import React, { useState, useEffect } from "react";
import { getAllServiceProvidersForDropdown } from "../../../features/actions/Service/serviceProvider";
import { useNavigate, useParams } from "react-router-dom";
import { createServicePlan,  } from "../../../features/actions/Service/servicePlan.js";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import Input from "../../../components/form/Input";

const VehicleLoan = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const { id } = useParams();
  const { providerDropdownData } = useSelector(
    (state) => state.serviceProvider
  );
  const { isLoading } = useSelector((state) => state.servicePlan);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const onSubmit = (data) => {
    data["serviceType"] = id;
    if (data?.serviceProvider)
      data.serviceProvider = data.serviceProvider?.value;

    console.log(data);

    dispatch(createServicePlan(data)).then(() => {
      navigate("/admin/services");
    });
  };

  useEffect(() => {
    dispatch(getAllServiceProvidersForDropdown(id));
  }, []);

  return (
    <div className="max-w-4xl mx-auto my-5 overflow-hidden rounded-2xl bg-white shadow-lg">
      <div className="bg-blue-600 px-10 py-4 text-center text-white font-semibold">
        Vehicle Loan Plan
      </div>
      <form
        className="space-y-5 my-4 mx-8 sm:mx-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
          <Input
            label="Plan Name"
            {...register("planName", { required: true })}
            isError={errors.planName}
            errorMessage="Plan Name is required"
          />

          <div className="w-full">
            <label className="font-medium">Service Provider</label>
            <Controller
              control={control}
              name="serviceProvider"
              render={({ field }) => (
                <Select
                  value={field.value}
                  options={providerDropdownData}
                  onChange={(selectedOption) => field.onChange(selectedOption)}
                  className="mt-2 "
                  placeholder="Choose Service Provider "
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      border: "1px solid #CBD5E1", // Set custom border style
                      borderRadius: "0.400rem", // Set custom border radius
                      height: "40px", // Add height here
                    }),
                    placeholder: (provided) => ({
                      ...provided,
                      color: "#9CA3AF", // Set custom placeholder color
                    }),
                  }}
                />
              )}
              rules={{ required: true }}
            />
            {errors.serviceProvider && (
              <span className=" text-sm font-medium text-red-500">
                Service Provider is required
              </span>
            )}
          </div>
        </div>

        <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
          <Input
            label="Interest Rate (%)"
            type="number"
            {...register("interestRate", { required: true })}
            isError={errors.interestRate}
            errorMessage="Interest rate is required"
          />

          <Input
            label="Processing Fee"
            {...register("processingFee", { required: true })}
            isError={errors.processingFee}
            errorMessage="Processing fee is required"
          />
        </div>

        <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
          <Input
            label="Tenure (years)"
            type="number"
            {...register("tenure", { required: true })}
            isError={errors.tenure}
            errorMessage="Tenure is required"
          />

          <Input
            label="Loan Upper Limit"
            type="number"
            {...register("upTo", { required: true })}
            isError={errors.upTo}
            errorMessage="Loan upper limit is required"
          />
        </div>

        <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">

          <Input
            label="Vehicle Type"
            {...register("vehicleType", { required: true })}
            isError={errors.vehicleType}
            errorMessage="Vehicle type is required"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-lg bg-gray-700 hover:bg-gray-800 active:bg-gray-700 px-10 py-3 font-semibold text-white"
        >
          {isLoading ? <ClipLoader color="#c4c2c2" /> : <>Create</>}
        </button>
      </form>
    </div>
  );
};

export default VehicleLoan;
