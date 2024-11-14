import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import Input from "../../../components/form/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllServiceProvidersForDropdown,
} from "../../../features/actions/Service/serviceProvider";
import { useNavigate, useParams } from "react-router-dom";
import { createServicePlan } from "../../../features/actions/Service/servicePlan.js";
import { ClipLoader } from "react-spinners";

const MutualFund = () => {
  const { providerDropdownData } = useSelector(
    (state) => state.serviceProvider
  );
  const { isLoading } = useSelector((state) => state.servicePlan);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

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
    <div className="max-w-4xl mx-auto my-5 overflow-hidden rounded-2xl bg-white shadow-lg ">
      <div className="bg-blue-600 px-10 py-4 text-center text-white font-semibold">
        Mutual Fund
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
          <Input label="Fund Size" {...register("fundSize")} />

          <Input label="Category" {...register("category")} />
        </div>

        <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
          <Input
            label="Minimum SIP Amount"
            type="number"
            {...register("minSIPAmount", { required: true })}
            isError={errors.minSIPAmount}
            errorMessage="Minimum SIP Amount is required"
          />

          <Input
            label="Expense Ratio"
            type="number"
            {...register("expenseRatio", { min: 0, max: 100 })}
            isError={errors.expenseRatio}
            errorMessage="Expense ratio must be between 0 and 100"
          />
        </div>

        <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
          <Input
            label="Five Years Annualised Returns"
            type="number"
            {...register("fiveYearsAnnualisedReturns")}
          />

          <Input
            label="One Years Annualised Returns"
            type="number"
            {...register("oneYearsAnnualisedReturns")}
          />
        </div>

        <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
          <Input label="Risk Factor" {...register("riskFactor")} />
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

export default MutualFund;
