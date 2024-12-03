import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import defaultPhoto from "/placeholder.jpg";
import { MdOutlineInsertPhoto } from "react-icons/md";
import Input from "../../../components/form/Input";


const MotorInsurance = () => {
  const [photo, setPhoto] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

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
        Bike Insurance Plan
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
                    { value: "Comprehensive", label: "Comprehensive" },
                    { value: "Third Party", label: "Third Party" },
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
            label="Premium Amount"
            type="number"
            {...register("premiumAmount", { required: true })}
            isError={errors.premiumAmount}
            errorMessage="Premium amount is required"
          />

          <Input
            label="IDV"
            {...register("idv", { required: true })}
            isError={errors.idv}
            errorMessage="IDV is required"
          />
        </div>

        <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
          <Input
            label="Claims Settled (%)"
            type="number"
            {...register("claimsSettled", {
              required: true,
              min: { value: 0, message: "Cannot be less than 0%" },
              max: { value: 100, message: "Cannot exceed 100%" },
            })}
            isError={errors.claimsSettled}
            errorMessage={errors.claimsSettled?.message || "Claims Settled is required"}
          />

          <div className="w-full">
            <label className="font-medium">Zero Depreciation</label>
            <div className="mt-2">
              <input
                type="checkbox"
                {...register("zeroDepreciation")}
                className="mr-2 leading-tight"
              />
              <span className="text-sm font-medium">Include Zero Depreciation</span>
            </div>
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
            <label
              htmlFor="file_input"
              className="flex gap-1"
            >
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

export default BikeInsurance;
