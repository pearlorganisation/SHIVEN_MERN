import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import defaultPhoto from "/placeholder.jpg";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { MdOutlineInsertPhoto } from "react-icons/md";
import Select from "react-select"

const CreateRequest = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const onSubmit = (data) => {};

  const [photo, setPhoto] = useState("");

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

  //   useEffect(() => {
  //     if (dipData?.status) {
  //       navigate("/dip");
  //     }
  //   }, [dipData]);

  return (
    <div className="max-w-4xl mx-auto my-5 overflow-hidden rounded-2xl bg-white shadow-lg ">
      <div className="bg-blue-600 px-10 py-4 text-center text-white font-semibold">
        Create a request
      </div>
      <form
        className="space-y-5 my-4 mx-8 sm:mx-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
          <div className="w-full">
            <label className="font-medium">First Name</label>
            <input
              {...register("dips", { required: true })}
              type="text"
              className="w-full mt-2  px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
            />
            {errors.dips && (
              <span className="text-sm font-medium text-red-500">
                Dip Name is required
              </span>
            )}
          </div>
          <div className="w-full">
            <label className="font-medium">Last Name</label>
            <input
              {...register("dips", { required: true })}
              type="text"
              className="w-full mt-2  px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
            />
            {errors.dips && (
              <span className="text-sm font-medium text-red-500">
                Dip Name is required
              </span>
            )}
          </div>
        </div>
        <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
          <div className="w-full">
            <label className="font-medium">Email</label>
            <input
              {...register("dips", { required: true })}
              type="text"
              className="w-full mt-2  px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
            />
            {errors.dips && (
              <span className="text-sm font-medium text-red-500">
                Dip Name is required
              </span>
            )}
          </div>
          <div className="w-full">
            <label className="font-medium">Plan</label>
            <Controller 
                                      control={control}
                                      name="baseName"
                                      render={({ field }) => (
                                          <Select
                                              value={field.value}
                                              options={[{ value: "Motor Insurance", label: "Motor Insurance" },{ value: "Life Insurance", label: "Life Insurance" },{ value: "Health Insurance", label: "Health Insurance" },]}
                                              onChange={(selectedOption) => field.onChange(selectedOption)}
                                              className="mt-2 "
                                              placeholder="Choose Plan "
                                             
                                              styles={{
                                                  control: (provided) => ({
                                                      ...provided,
                                                      border: '1px solid #CBD5E1', // Set custom border style
                                                      borderRadius: '0.400rem', // Set custom border radius
                                                      height: '40px', // Add height here
                                                  }),
                                                  placeholder: (provided) => ({
                                                      ...provided,
                                                      color: '#9CA3AF', // Set custom placeholder color
                                                  }),
                                              }}
 
                                          />
                                     )}
                                      rules={{ required: true }}
                                      
                                  />
             {errors.baseName && (
                    <span className=" text-sm font-medium text-red-500">
                      Base is required
                    </span>
                  )}
          </div>
        </div>
        <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
        <div className="font-medium w-full space-y-6">
          {" "}
          Screenshot
          <img
            class="mt-2 w-full h-50  sm:w-44 sm:h-36 rounded"
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
            {...register("banner", {
              required: true,
              onChange: (e) => {
                handlePhotoChange(e);
              },
            })}
            className="hidden "
            id="file_input"
            type="file"
          />
          {errors.banner && (
            <span className="text-sm font-medium text-red-500">
              Image is required
            </span>
          )}
        </div>
          <div className="w-full">
            <label className="font-medium">Message</label>
            <textarea
              {...register("dips", { required: true })}
              type="number"
              className="w-full mt-2  px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
            />
            {errors.dips && (
              <span className="text-sm font-medium text-red-500">
                Dip Name is required
              </span>
            )}
          </div>
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

export default CreateRequest;
