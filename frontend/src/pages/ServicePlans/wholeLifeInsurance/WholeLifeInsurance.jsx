import React, { useState } from "react";
import { Controller, useForm, useFieldArray } from "react-hook-form";
import Select from "react-select";
import defaultPhoto from "/placeholder.jpg";
import { MdOutlineInsertPhoto } from "react-icons/md";
import Input from "../../../components/form/Input";

const WholeLifeInsurancePlan = () => {
  const [photo, setPhoto] = useState("");
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

  const onSubmit = (data) => {
    console.log(data);
  };

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];

    if (selectedPhoto) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedPhoto);
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
    }
  };

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
            <label className="font-medium">Service Type</label>
            <Controller
              control={control}
              name="serviceType"
              render={({ field }) => (
                <Select
                  value={field.value}
                  options={[
                    { value: "Life Insurance", label: "Life Insurance" },
                    { value: "Health Insurance", label: "Health Insurance" },
                  ]}
                  onChange={(selectedOption) => field.onChange(selectedOption)}
                  className="mt-2"
                  placeholder="Choose Service Type"
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
            {errors.serviceType && (
              <span className="text-sm font-medium text-red-500">
                Service Type is required
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
          <div className="font-medium w-full space-y-6">
            Plan Logo
            <img
              className="mt-2 w-full h-50 sm:w-44 object-cover sm:h-36 rounded"
              src={photo || defaultPhoto}
              alt="No Image"
            />
            <label htmlFor="file_input" className="flex gap-1 cursor-pointer">
              <MdOutlineInsertPhoto size="25" />
              <div className="px-2 border rounded-md border-slate-300 hover:bg-red-500 hover:text-white hover:border-none">
                Click here to upload
              </div>
            </label>
            <input
              {...register("planLogo", {
                required: true,
                onChange: (e) => {
                  handlePhotoChange(e);
                },
              })}
              className="hidden"
              id="file_input"
              type="file"
            />
            {errors.planLogo && (
              <span className="text-sm font-medium text-red-500">
                Plan Logo is required
              </span>
            )}
          </div>

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
          className="w-full rounded-lg bg-gray-700 hover:bg-gray-800 active:bg-gray-700 px-10 py-3 font-semibold text-white"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default WholeLifeInsurancePlan;
