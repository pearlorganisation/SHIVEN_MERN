// --------------------------------------------------Imports----------------------------------------
import React, { useEffect, useState } from "react";
import userBg from "../../../assets/Images/userBg.jpg";
// import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";
import {
  createUser,
  getUsers,
} from "../../../features/actions/Auth/userActions";
import { useDispatch } from "react-redux";
import CircleLoader from "../../../components/Loader/ButtonLoaders/CircleLoader";
import { useSelector } from "react-redux";
import { resetUserState } from "../../../features/slices/Auth/userSlice";
import { instance } from "../../../services/Axios/axiosInterceptor";
import Select from "react-select";
// -------------------------------------------------------------------------------------------------

const dummyData = [
  {
    service: "Health Insurance",
    plan: "ICICI Health Plan",
    serviceProvider: "ICICI",
  },
  {
    service: "Health Insurance",
    plan: "HDFC Health Plan",
    serviceProvider: "HDFC",
  },
  {
    service: "Health Insurance",
    plan: "Max Bupa Health Plan",
    serviceProvider: "Max Bupa",
  },
  {
    service: "Life Insurance",
    plan: "ICICI Life Insurance Plan",
    serviceProvider: "ICICI",
  },
  {
    service: "Life Insurance",
    plan: "HDFC Life Insurance Plan",
    serviceProvider: "HDFC",
  },
  {
    service: "Life Insurance",
    plan: "Bajaj Allianz Life Insurance Plan",
    serviceProvider: "Bajaj Allianz",
  },
  {
    service: "Vehicle Insurance",
    plan: "HDFC Vehicle Insurance Plan",
    serviceProvider: "HDFC",
  },
  {
    service: "Vehicle Insurance",
    plan: "ICICI Vehicle Insurance Plan",
    serviceProvider: "ICICI",
  },
  {
    service: "Travel Insurance",
    plan: "ICICI Travel Insurance Plan",
    serviceProvider: "ICICI",
  },
  {
    service: "Travel Insurance",
    plan: "Reliance Travel Insurance Plan",
    serviceProvider: "Reliance",
  },
  {
    service: "Health Insurance",
    plan: "Star Health Health Plan",
    serviceProvider: "Star Health",
  },
  {
    service: "Life Insurance",
    plan: "LIC Life Insurance Plan",
    serviceProvider: "LIC",
  },
  {
    service: "Vehicle Insurance",
    plan: "SBI General Vehicle Insurance Plan",
    serviceProvider: "SBI General",
  },
  {
    service: "Home Insurance",
    plan: "HDFC Home Insurance Plan",
    serviceProvider: "HDFC",
  },
  {
    service: "Home Insurance",
    plan: "ICICI Home Insurance Plan",
    serviceProvider: "ICICI",
  },
  {
    service: "Home Insurance",
    plan: "Tata AIG Home Insurance Plan",
    serviceProvider: "Tata AIG",
  },
  {
    service: "Home Loan",
    plan: "ICICI Home Loan Plan",
    serviceProvider: "ICICI",
  },
  {
    service: "Home Loan",
    plan: "HDFC Home Loan Plan",
    serviceProvider: "HDFC",
  },
  {
    service: "Mutual Fund",
    plan: "SBI Mutual Fund Plan",
    serviceProvider: "SBI Mutual Fund",
  },
  {
    service: "Mutual Fund",
    plan: "ICICI Prudential Mutual Fund Plan",
    serviceProvider: "ICICI Prudential",
  },
  {
    service: "Recurring Deposit (RD)",
    plan: "HDFC RD Plan",
    serviceProvider: "HDFC",
  },
  {
    service: "Recurring Deposit (RD)",
    plan: "ICICI RD Plan",
    serviceProvider: "ICICI",
  },
  {
    service: "Commercial Property",
    plan: "HDFC Commercial Property Plan",
    serviceProvider: "HDFC",
  },
  {
    service: "Commercial Property",
    plan: "ICICI Commercial Property Plan",
    serviceProvider: "ICICI",
  },
];

export const CreateConsultant = () => {
  const [role, setRole] = useState("");
  // -------------------------------------------------------------------------------------------------
  // --------------------------------------------------Hooks----------------------------------------
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isUserLoading, isUserCreated } = useSelector((state) => state?.user);
  const [services, setServices] = useState([]);
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
          const body = { ...response };
          try {
            const validateResponse = await instance.post(
              `/consultant/verify/${consultantId}`,
              body
            );
            var jsonResponse = validateResponse?.data;
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

    try {
      const { userName, fullName, email, password } = data;
      const payload = { userName, fullName, email, password, role };
      if (userName && fullName && email && password) {
        if (!role) {
          toast.error("Please Choose a role for the user");
        } else {
          dispatch(createUser({ payload }));
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // ------------------------------------------------useEffect----------------------------------------
  useEffect(() => {
    if (isUserCreated) {
      dispatch(resetUserState(false));
      reset();
      setRole("");
      dispatch(getUsers());
    }
  }, [isUserCreated]);

  useEffect(() => {
    if (!dummyData || !Array.isArray(dummyData)) return;

    const UniqueServices = Array.from(
      new Set(dummyData.map((item) => item?.service))
    );
    setServices(
      UniqueServices.map((service) => ({ label: service, value: service }))
    );
  }, [dummyData]);

  useEffect(() => {
    if (!dummyData || !Array.isArray(dummyData)) return;
    if (!selectedServices || !Array.isArray(selectedServices)) return;

    const filteredServiceProviders = dummyData.filter((item) =>
      selectedServices.some((service) => service.value === item.service)
    );
    const uniqueServiceProviders = Array.from(
      new Set(filteredServiceProviders.map((item) => item.serviceProvider))
    ).map((provider) => ({ label: provider, value: provider }));

    setServiceProviders(uniqueServiceProviders);

    const updatedSelectedProviders = selectedProviders.filter((provider) =>
      uniqueServiceProviders.some(
        (uniqueProvider) => uniqueProvider.value === provider.value
      )
    );
    setSelectedProviders(updatedSelectedProviders);
  }, [selectedServices]);

  useEffect(() => {
    if (!dummyData || !Array.isArray(dummyData)) return;
    if (!selectedProviders || !Array.isArray(selectedProviders)) return;
    if (!selectedServices || !Array.isArray(selectedServices)) return;
    const filteredPlans = dummyData
      .filter(
        (item) =>
          selectedProviders.some(
            (provider) => provider.value === item.serviceProvider
          ) &&
          selectedServices.some((service) => service.value === item.service)
      )
      .map((item) => ({ label: item.plan, value: item.plan }));

    setPlans(filteredPlans);

    const updatedSelectedPlans = selectedPlans.filter((plan) =>
      filteredPlans.some((filteredPlan) => filteredPlan.value === plan.value)
    );
    setSelectedPlans(updatedSelectedPlans);
  }, [selectedProviders]);

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
                        options={services}
                        value={selectedServices}
                        onChange={(newSelectedServices) =>
                          setSelectedServices(newSelectedServices)
                        }
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
                        onChange={(newSelectedProviders) =>
                          setSelectedProviders(newSelectedProviders)
                        }
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
                        onChange={(newSelectedPlans) =>
                          setSelectedPlans(newSelectedPlans)
                        }
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
