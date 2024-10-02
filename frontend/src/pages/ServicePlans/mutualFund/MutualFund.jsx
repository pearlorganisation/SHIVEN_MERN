import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import defaultPhoto from "/placeholder.jpg";
import { MdOutlineInsertPhoto } from "react-icons/md";
import Select from "react-select";
import Input from "../../../components/form/Input";

const MutualFund = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const [photo, setPhoto] = useState("");

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
            label="Fund Name"
            {...register("fundName", { required: true })}
            isError={errors.fundName}
            errorMessage="Fund Name is required"
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
                    { value: "Motor Insurance", label: "Motor Insurance" },
                    { value: "Life Insurance", label: "Life Insurance" },
                    { value: "Health Insurance", label: "Health Insurance" },
                  ]}
                  onChange={(selectedOption) => field.onChange(selectedOption)}
                  className="mt-2 "
                  placeholder="Choose Service Type "
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
            {errors.serviceType && (
              <span className=" text-sm font-medium text-red-500">
                Service Type is required
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
          <div className="font-medium w-full space-y-6">
            {" "}
            Fund Logo
            <img
              class="mt-2 w-full h-50 object-cover sm:w-44 sm:h-36 rounded"
              src={photo || defaultPhoto}
              alt="No Image"
            />
            <label
              htmlFor="file_input"
              className="flex gap-1
           "
            >
              {" "}
              <MdOutlineInsertPhoto size="25" />
              <div className="px-2 border rounded-md border-slate-300 hover:bg-red-500 hover:text-white hover:border-none">
                Click here to upload
              </div>
            </label>
            <input
              {...register("fundLogo", {
                required: true,
                onChange: (e) => {
                  handlePhotoChange(e);
                },
              })}
              className="hidden "
              id="file_input"
              type="file"
            />
            {errors.fundLogo && (
              <span className="text-sm font-medium text-red-500">
                Fund Logo is required
              </span>
            )}
          </div>

          <Input label="Risk Factor" {...register("riskFactor")} />
        </div>

        <button
          type="submit"
          className=" w-full rounded-lg bg-gray-700 hover:bg-gray-800 active:bg-gray-700 px-10 py-3 font-semibold text-white"
        >
          {/* {isLoading ? <ClipLoader color="#c4c2c2" /> : */}
          <>Create</>
          {/* } */}
        </button>
      </form>
    </div>
  );
};

export default MutualFund;
