import React, { useState } from "react";
import { Controller, useForm, useFieldArray } from "react-hook-form";
import Select from "react-select";

import Input from "../../../../components/form/Input";

const AddCustomisedPlan = () => {
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
        Customised Plan
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
        </div>

        <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
          <div className="w-full">
            <label className="font-medium mr-10">Clubbed Plans</label>
            {fields.map((item, index) => (
              <div key={item.id} className="flex items-center space-x-2 mb-2">
                <Controller
                  control={control}
                  name={`plan${index}`}
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
                      onChange={(selectedOption) =>
                        field.onChange(selectedOption)
                      }
                      className="mt-2 w-full z-[1000]"
                      placeholder={`Choose Plan ${index + 1}`}
                    />
                  )}
                  rules={{ required: true }}
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
              onClick={() => append({})} // Append a new object (empty or with default values)
              className="text-blue-600"
            >
              Add Plans
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

export default AddCustomisedPlan;
