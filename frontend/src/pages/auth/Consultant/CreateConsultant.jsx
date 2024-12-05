// --------------------------------------------------Imports----------------------------------------
import React, { useEffect, useState } from "react";
import userBg from "../../../assets/Images/userBg.jpg";
// import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import CircleLoader from "../../../components/Loader/ButtonLoaders/CircleLoader";
import { useSelector } from "react-redux";
import { instance } from "../../../services/Axios/axiosInterceptor";
import Select from "react-select";
import { getAllServicePlans } from "../../../features/actions/Service/servicePlan";
// -------------------------------------------------------------------------------------------------

export const CreateConsultant = () => {
  const [role, setRole] = useState("");
  // -------------------------------------------------------------------------------------------------
  // --------------------------------------------------Hooks----------------------------------------
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isUserLoading, isUserCreated } = useSelector((state) => state?.user);
  const { servicePlanData } = useSelector((state) => state.servicePlan);

  const [serviceTypes, setServiceTypes] = useState([]);
  const [serviceProviders, setServiceProviders] = useState([]);
  const [plans, setPlans] = useState([]);

  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedProviders, setSelectedProviders] = useState([]);
  const [selectedPlans, setSelectedPlans] = useState([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
    control,
  } = useForm();
  // -------------------------------------------------------------------------------------------------
  // ------------------------------------------------Functions----------------------------------------
  // createUserHandler -- handler to create the user
  const createUserHandler = async (data) => {
    console.log(data);

    try {
      const {
        data: { consultantId, order },
      } = await instance.post(`/consultant`, data);
      console.log(consultantId, order);

      const options = {
        key: import.meta.env.VITE_APP_RAZORPAY_KEY,
        amount: order.amount,
        currency: "INR",
        name: "Shiven Tech",
        description: "Shiven Tech",
        image: "./ShivenLogo.png",
        order_id: order.id,
        handler: async function (response) {
          const body = {
            ...response,
            servicePlan: selectedPlans.map((plan) => plan.value),
          };
          try {
            const validateResponse = await instance.post(
              `/consultant/verify/${consultantId}`,
              body
            );
            reset({
              email: "",
              fullName: "",
              password: "",
              plans: [],
              serviceProviders: [],
              services: [],
            });
            setSelectedServices([]);
            navigate("/login");
          } catch (error) {
            console.error("Error verifying payment:", error);
          }
        },

        modal: {
          ondismiss: function () {
            alert("Payment window closed without completing the payment.");
          },
        },

        theme: {
          color: "#121212",
        },
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.error("Error creating or processing payment:", error);
    }
  };

  // ------------------------------------------------useEffect----------------------------------------
  // useEffect(() => {
  //   if (isUserCreated) {
  //     dispatch(resetUserState(false));
  //     reset();
  //     setRole("");
  //     dispatch(getUsers());
  //   }
  // }, [isUserCreated]);

  useEffect(() => {
    console.log(
      servicePlanData.filter(
        (item) =>
          selectedServices.some(
            (service) => service.value === item?.serviceType?._id
          ) &&
          selectedProviders.some(
            (provider) => provider.value === item?.serviceProvider?._id
          )
      )
    );
    const uniqueServicePlans = servicePlanData
      .filter(
        (item) =>
          selectedServices.some(
            (service) => service.value === item?.serviceType?._id
          ) &&
          selectedProviders.some(
            (provider) => provider.value === item?.serviceProvider?._id
          )
      )
      .map((item) => ({
        label: item?.planName,
        value: item?._id,
      }));
    setPlans(uniqueServicePlans);

    setSelectedPlans((prevSelectedPlans) =>
      prevSelectedPlans.filter((plan) =>
        uniqueServicePlans.some(
          (servicePlan) => servicePlan.value === plan.value
        )
      )
    );
  }, [selectedProviders, serviceProviders]);

  useEffect(() => {
    console.log(servicePlanData);
    const uniqueServiceProviders = servicePlanData
      .filter((item) =>
        selectedServices.some(
          (service) => service.value === item?.serviceType?._id
        )
      )
      .filter(
        (item, index, self) =>
          index ===
          self.findIndex(
            (obj) => obj?.serviceProvider?._id === item?.serviceProvider?._id
          )
      )
      .map((item) => ({
        label: item.serviceProvider?.serviceProviderName,
        value: item.serviceProvider?._id,
      }));

    console.log(uniqueServiceProviders);
    setServiceProviders(uniqueServiceProviders);

    setSelectedProviders((prevSelectedProviders) =>
      prevSelectedProviders.filter((Provider) =>
        uniqueServiceProviders.some(
          (serviceProvider) => serviceProvider.value === Provider.value
        )
      )
    );
  }, [selectedServices]);

  useEffect(() => {
    const uniqueServiceTypes = servicePlanData
      .filter(
        (item, index, self) =>
          index ===
          self.findIndex(
            (obj) => obj?.serviceType?._id === item?.serviceType?._id
          )
      )
      .map((item) => ({
        label: item.serviceType.serviceType,
        value: item.serviceType._id,
      }));

    setServiceTypes(uniqueServiceTypes);
  }, [servicePlanData]);

  useEffect(() => {
    dispatch(getAllServicePlans());
  }, []);

  // -------------------------------------------------------------------------------------------------
  return (
    <div>
      <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div class="max-w-screen-xl m-0 sm:m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <h1 className="text-center font-bold text-blue-600 text-sm sm:text-lg md:text-xl">
              Consultant Registeration
            </h1>
            <div class="mt-12 flex flex-col items-center">
              <div class="w-full flex-1 mt-8">
                <form
                  class="mx-auto max-w-xs"
                  onSubmit={handleSubmit(createUserHandler)}
                >
                  <input
                    class="w-full px-6 py-4 rounded-lg font-medium border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    placeholder="Full Name"
                    {...register("fullName", {
                      required: {
                        value: true,
                        message: "Full Name is a required field",
                      },
                    })}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 mt-1">
                      {errors?.fullName?.message ||
                        "Full Name is a required field"}
                    </p>
                  )}
                  <input
                    class="w-full px-6 py-4 rounded-lg font-medium border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is a required field",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 mt-1">
                      {errors?.email?.message || "Email is a required field"}
                    </p>
                  )}
                  <input
                    class="w-full px-6 py-4 rounded-lg font-medium  border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is a required field",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-500 mt-1">
                      {errors?.password?.message ||
                        "Password is a required field"}
                    </p>
                  )}

                  <Controller
                    name="services"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        isMulti
                        options={serviceTypes}
                        value={selectedServices}
                        onChange={(newSelectedServices) => {
                          setSelectedServices(newSelectedServices);
                          field.onChange(newSelectedServices);
                        }}
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
                        options={serviceProviders}
                        value={selectedProviders}
                        onChange={(newSelectedProviders) => {
                          setSelectedProviders(newSelectedProviders);
                          field.onChange(newSelectedProviders);
                        }}
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
                        options={plans}
                        value={selectedPlans}
                        onChange={(newSelectedPlans) => {
                          setSelectedPlans(newSelectedPlans);
                          field.onChange(newSelectedPlans);
                        }}
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
                  {/* <div class="w-full rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5">
                    <Select options={roleOptions} onChange={roleHandler} />
                  </div> */}
                  {isUserLoading ? (
                    <button
                      class="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      type="submit"
                    >
                      <CircleLoader />
                    </button>
                  ) : (
                    <button
                      class="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      type="submit"
                    >
                      <svg
                        class="w-6 h-6 -ml-2"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                      <span class="ml-3">Create</span>
                    </button>
                  )}
                  <p class="mt-6 text-xs text-gray-600 text-center">
                    Shiven Consultancy <br />
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div class="flex-1 bg-green-100 text-center hidden lg:flex">
            <img src={userBg} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
