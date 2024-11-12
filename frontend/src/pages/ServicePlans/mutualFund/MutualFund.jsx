import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import defaultPhoto from "/placeholder.jpg";
import { MdOutlineInsertPhoto } from "react-icons/md";
import Select from "react-select";
import Input from "../../../components/form/Input";
import { useDispatch, useSelector } from "react-redux";
import { getAllServiceProviders } from "../../../features/actions/Service/serviceProvider";
import { useParams } from "react-router-dom";
import { createMutualFund } from "../../../features/actions/Service/servicePlan/mutualFund";

const MutualFund = () => {
  const { serviceProviderData } = useSelector((state) => state.serviceProvider);
  const {id} = useParams();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const [photo, setPhoto] = useState("");
  const [providerOptions, setProviderOptions] = useState([]);

  const onSubmit = (data) => {
    data['serviceType'] = id;
    if(data?.serviceProvider)
      data.serviceProvider = data.serviceProvider?.value;
    console.log(data);  

    dispatch(createMutualFund(data));
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

  useEffect(() => {
    dispatch(getAllServiceProviders());
  }, []);

  useEffect(() => {
    if (!serviceProviderData || !Array.isArray(serviceProviderData)) return;

    const filteredOptions = serviceProviderData
      .filter((provider) => {
        if (!provider?.service || !Array.isArray(provider.service))
          return false;

        return provider.service.some((service) => service === "Mutual Fund");
      })
      .map((provider) => ({
        label: provider?.serviceProviderName,
        value: provider?._id,
      }));
    console.log("filtered options", filteredOptions);
    setProviderOptions(filteredOptions);
  }, [serviceProviderData]);

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
            <label className="font-medium">Service Provider</label>
            <Controller
              control={control}
              name="serviceProvider"
              render={({ field }) => (
                <Select
                  value={field.value}
                  options={providerOptions}
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
