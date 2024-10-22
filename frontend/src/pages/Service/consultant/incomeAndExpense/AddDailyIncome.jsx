import React, { useState } from "react";
import { Controller, useForm, useFieldArray } from "react-hook-form";
import Select from "react-select";

const AddDailyIncome = () => {
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

  return (
    <div className="max-w-4xl mx-auto my-5  rounded-2xl bg-white shadow-lg">
      <div className="bg-blue-600 px-10 py-4 rounded-t-2xl text-center text-white font-semibold">
        Add Daily Income
      </div>
      <form
        className="space-y-5 my-4 mx-8 sm:mx-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
          <div className="w-full">
            <label className="font-medium">Date</label>
            <input
              type="date"
              {...register("date", { required: true })}
              className={`w-full mt-2 px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg`}
            />
            {errors?.date && (
              <span className="text-sm font-medium text-red-500">
                Date is required
              </span>
            )}
          </div>
        </div>

        <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
          <div className="w-full">
            {fields.map((item, index) => (
              <div key={item.id} className="space-y-4 mb-10">
                <label className="font-bold">{`Income Source ${index+1}`}</label>
                {/* Main Income Source Selector */}
                <div className="flex items-center space-x-2">
                  <Controller
                    control={control}
                    name={`additionalBenefits.${index}.source`}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        options={[
                          {
                            value: "LIC's New Jeevan Anand",
                            label: "LIC's New Jeevan Anand",
                          },
                          {
                            value: "Bajaj Allianz Motor Insurance",
                            label: "Bajaj Allianz Motor Insurance",
                          },
                          {
                            value: "SBI General Home Insurance",
                            label: "SBI General Home Insurance",
                          },
                        ]}
                        onChange={(selectedOption) => field.onChange(selectedOption)}
                        className="mt-2 w-full z-[1000]"
                        placeholder={`Choose Source ${index + 1}`}
                      />
                    )}
                    rules={{ required: true }}
                  />
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="bg-red-600 hover:bg-red-700 text-white rounded-md px-2"
                  >
                    Remove
                  </button>
                </div>

                {/* Subcategory and Amounts Field Array */}
                <SubcategoriesFieldArray
                  control={control}
                  register={register}
                  index={index}
                  errors={errors}
                />
              </div>
            ))}

            <button
              type="button"
              onClick={() => append({})} // Append a new object (empty or with default values)
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-md p-2 mt-2"
            >
              Add More Income Source
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

export default AddDailyIncome;

const SubcategoriesFieldArray = ({ control, register, index, errors }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `additionalBenefits.${index}.subcategories`, // Name for nested subcategories array
  });

  return (
    <div className="ml-5 space-x-3">
      <label className="font-medium">Sub-categories & Amounts</label>
      {fields.map((subItem, subIndex) => (
        <div key={subItem.id} className="flex items-center space-x-2 mb-3">
          <div className="w-1/2">
            <Controller
              control={control}
              name={`additionalBenefits.${index}.subcategories.${subIndex}.subCategory`}
              render={({ field }) => (
                <Select
                  value={field.value}
                  options={[
                    { value: "Monthly Premium", label: "Monthly Premium" },
                    { value: "Annual Premium", label: "Annual Premium" },
                    { value: "Bonus", label: "Bonus" },
                  ]}
                  onChange={(selectedOption) => field.onChange(selectedOption)}
                  className="w-full"
                  placeholder={`Choose Sub-category ${subIndex + 1}`}
                  isOptionSelected
                />
              )}
              rules={{ required: true }}
            />
          </div>
          <div className="w-1/3">
            <input
              type="number"
              {...register(`additionalBenefits.${index}.subcategories.${subIndex}.amount`, {
                required: "Amount is required",
                valueAsNumber: true,
              })}
              className={`w-full px-3 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg ${
                errors.additionalBenefits?.[index]?.subcategories?.[subIndex]?.amount
                  ? "border-red-500"
                  : ""
              }`}
              placeholder="Enter Amount"
            />
          </div>
          <button
            type="button"
            onClick={() => remove(subIndex)}
            className="bg-red-600 w-10 hover:bg-red-700 text-white rounded-md px-2"
          >
           -
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({})} // Append new subcategory and amount fields
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-2"
      >
        Add More Subcategory
      </button>
    </div>
  );
};
