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

        <Controller
                    name="services"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        isMulti
                        // options={serviceTypes}
                        // value={selectedServices}
                        // onChange={(newSelectedServices) => {
                        //   setSelectedServices(newSelectedServices);
                        //   field.onChange(newSelectedServices);
                        // }}
                        placeholder="Select Service(s)"
                        classNames={{
                          control: () =>
                            "w-full px-3 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",
                          placeholder: () => "text-gray-500",
                          multiValue: () => "bg-gray-100 text-gray-500",
                          multiValueLabel: () => "text-gray-500",
                        }}
                      />
                    )}
                  />

                  <Controller
                    name="serviceProviders"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        isMulti
                        // options={serviceProviders}
                        // value={selectedProviders}
                        // onChange={(newSelectedProviders) => {
                        //   setSelectedProviders(newSelectedProviders);
                        //   field.onChange(newSelectedProviders);
                        // }}
                        placeholder="Select Service Provider(s)"
                        classNames={{
                          control: () =>
                            "w-full px-3 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",
                          placeholder: () => "text-gray-500",
                          multiValue: () => "bg-gray-100 text-gray-500",
                          multiValueLabel: () => "text-gray-500",
                        }}
                      />
                    )}
                  />

                  <Controller
                    name="plans"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        isMulti
                        // options={plans}
                        // value={selectedPlans}
                        // onChange={(newSelectedPlans) => {
                        //   setSelectedPlans(newSelectedPlans);
                        //   field.onChange(newSelectedPlans);
                        // }}
                        placeholder="Select Plan(s)"
                        classNames={{
                          control: () =>
                            "w-full px-3 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",
                          placeholder: () => "text-gray-500",
                          multiValue: () => "bg-gray-100 text-gray-500",
                          multiValueLabel: () => "text-gray-500",
                        }}
                      />
                    )}
                  />


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
