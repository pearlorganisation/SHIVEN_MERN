import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createServiceProvider } from "../../../features/actions/Service/serviceProvider";
import Select from "react-select";
import { getAllServices } from "../../../features/actions/Service/service";
const CreateServiceProvider = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { serviceProviderData, isLoading } = useSelector(
    (state) => state.serviceProvider
  );
  const { serviceData } = useSelector((state) => state.service);
  console.log("service type ---->", serviceData);
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    const { service } = data;
    const serviceArray = service?.map((item) => item?.value);
    const formData = new FormData();
    formData.append("serviceProviderName", data?.serviceProviderName);
    formData.append("description", data?.description);
    formData.append("service", JSON.stringify(serviceArray));
    Array.from(data?.logo).forEach((img) => {
      formData?.append("logo", img);
    });
    dispatch(createServiceProvider(formData));
  };

  useEffect(() => {
    if (serviceProviderData?.success) {
      navigate("/admin/serviceProviders");
    }
  }, [serviceProviderData]);

  useEffect(() => {
    dispatch(getAllServices());
  }, []);

  return (
    <div>
      <div className="min-h-screen  bg-gray-100 text-gray-900 flex justify-center ">
        <div className=" m-0 sm:m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="p-6 w-full">
            <h1 className="text-center font-bold text-blue-600 text-sm sm:text-lg md:text-xl">
              Create Service Provider
            </h1>
            <div className=" mt-4 w-full h-[90%]">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className=" flex justify-between gap-4 h-[20rem]">
                  <div className="w-full h-[80%]">
                    <input
                      className="w-full  px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="text"
                      placeholder="Service Provider Name"
                      {...register("serviceProviderName", {
                        required: {
                          value: true,
                          message: "Service Provider Name is a required field",
                        },
                      })}
                    />
                    {errors.serviceProviderName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors?.serviceProviderName?.message}
                      </p>
                    )}

                    <div className="">
                      <label htmlFor="fileImage">
                        <div
                          className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none cursor-pointer focus:border-gray-400 focus:bg-white mt-5 max-h-[200px] ${
                            !photo ? "" : "flex justify-center "
                          }`}
                        >
                          {!photo && (
                            <p className="text-gray-500 font-medium">
                              <span className="text-red-500 font-bold">
                                Select :{" "}
                              </span>
                              Service Logo
                            </p>
                          )}
                          {photo && (
                            <img src={photo} className="rounded-md h-40 w-52" />
                          )}
                        </div>
                      </label>
                      <input
                        id="fileImage"
                        {...register("logo", {
                          required: true,
                          onChange: (e) => {
                            handlePhotoChange(e);
                          },
                        })}
                        className="w-full hidden px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="file"
                        placeholder="Service Icon"
                      />

                      {errors.logo && (
                        <p className="text-red-500 text-xs mt-1">
                          Service Provider Logo is a required field
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="w-full">
                    <textarea
                      className="w-full h-[85%] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white resize-none"
                      type="text"
                      placeholder="Service Provider Description"
                      {...register("description", {
                        required: {
                          value: true,
                          message:
                            "Service Provider Description is a required field",
                        },
                      })}
                    />
                    {errors.description && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors?.description?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="secondBox grid place-content-center gap-2">
                  <label className="justify-self-center">Service Type</label>
                  <Controller
                    control={control}
                    name="service"
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        options={serviceData.map((item) => ({
                          value: item?.serviceType,
                          label: item?.serviceType,
                        }))}
                        onChange={(selectedOption) =>
                          field.onChange(selectedOption)
                        }
                        className="mt-2 min-w-80"
                        placeholder="Choose Service Type "
                        isMulti
                        closeMenuOnSelect={false}
                      />
                    )}
                    rules={{ required: true }}
                  />
                </div>

                <div className="text-center mt-10 p-3">
                  <button className="w-64 border rounded-lg tracking-wider bg-red-700 p-2  text-white font-bold">
                    {isLoading ? (
                      <ClipLoader color="#c4c2c2" />
                    ) : (
                      <>Create Service Provider</>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateServiceProvider;
