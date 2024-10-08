import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import defaultPhoto from "/placeholder.jpg";
import { MdOutlineInsertPhoto } from "react-icons/md";
import Input from "../../../../components/form/Input";


const AddTask = () => {
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
        Assign New Task
      </div>
      <form className="space-y-5 my-4 mx-8 sm:mx-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
          <Input
            label="Task Title"
            {...register("planName", { required: true })}
            isError={errors.planName}
            errorMessage="Plan Name is required"
          />

          <div className="w-full">
            <label className="font-medium">Employee </label>
            <Controller
              control={control}
              name="serviceType"
              render={({ field }) => (
                <Select
                  value={field.value}
                  options={[
                    { value: "Shashank", label: "Shashank" },
                    { value: "Nayan", label: "Nayan" }
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
        <div className="w-full">
        <label className="font-medium">Task Description </label>
        <textarea className="w-full mt-2  px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg" />
        </div>
            <div>
                
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

export default AddTask;
