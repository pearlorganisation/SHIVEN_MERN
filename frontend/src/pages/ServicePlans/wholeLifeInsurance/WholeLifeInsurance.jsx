import React, { useState,useEffect } from "react";
import { getAllServiceProvidersForDropdown } from "../../../features/actions/Service/serviceProvider";
import { useNavigate, useParams } from "react-router-dom";
import { createServicePlan} from "../../../features/actions/Service/servicePlan.js";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm, useFieldArray } from "react-hook-form";
import Select from "react-select";
import Input from "../../../components/form/Input";

const WholeLifeInsurancePlan = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  
  const { fields, append, remove } = useFieldArray({
    control,
    name: "additionalBenefits",
  });

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

    if (data?.premiumFrequency)
      data.premiumFrequency = data.premiumFrequency?.value;
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
        Whole Life Insurance Service Plan
      </div>
      <form className="space-y-5 my-4 mx-8 sm:mx-2" onSubmit={handleSubmit(onSubmit)}>
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
            label="Life Cover"
            type="number"
            {...register("lifeCover", { required: true })}
            isError={errors.lifeCover}
            errorMessage="Life cover is required"
          />
          <Input
            label="Premium Amount"
            type="number"
            {...register("premiumAmount", { required: true })}
            isError={errors.premiumAmount}
            errorMessage="Premium amount is required"
          />
        </div>

        <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
        <Input
            label="Minimum Age"
            type="number"
            {...register("minimumAge", { required: true })}
            isError={errors.minimumAge}
            errorMessage="Minimum age is required"
          />
          <Input
            label="Maximum Age"
            type="number"
            {...register("maximumAge", { required: true })}
            isError={errors.maximumAge}
            errorMessage="Maximum age is required"
          />

        </div>

        <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
          <div className="w-[48%]">
            <label className="font-medium">Premium Frequency</label>
            <Controller
              control={control}
              name="premiumFrequency"
              render={({ field }) => (
                <Select
                  value={field.value}
                  options={[
                    { value: "Monthly", label: "Monthly" },
                    { value: "Quarterly", label: "Quarterly" },
                    { value: "Semi-Annual", label: "Semi-Annual" },
                    { value: "Annual", label: "Annual" },
                  ]}
                  onChange={(selectedOption) => field.onChange(selectedOption)}
                  className="mt-2"
                  placeholder="Choose Frequency"
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      border: "1px solid #CBD5E1",
                      borderRadius: "0.400rem",
                      height: "40px",
                    }),
                    placeholder: (provided) => ({
                      ...provided,
                      color: "#9CA3AF",
                    }),
                  }}
                />
              )}
              rules={{ required: true }}
            />
            {errors.premiumFrequency && (
              <span className="text-sm font-medium text-red-500">
                Premium Frequency is required
              </span>
            )}
          </div>

        </div>



        <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">

          <div className="w-full">
          <label className="font-medium mr-10">Additional Benefits</label>
          {fields.map((item, index) => (
            <div key={item.id} className="flex items-center space-x-2 mb-2">
              <Input
                {...register(`additionalBenefits.${index}`)}
                placeholder="Enter benefit"
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => append("")}
            className="text-blue-600"
          >
            Add Benefit
          </button>
        </div>
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

export default WholeLifeInsurancePlan;
