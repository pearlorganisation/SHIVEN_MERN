// ------------------------------------------Imports-----------------------------------------------------
import React from "react";
import Whychoosshiven from "../commonininsurance/Whychoosshiven";
import { FaHeart, FaTachometerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
// -----------------------------------------------------------------------------------------------------

const Healthinsurance = () => {
  // ------------------------------------------States-----------------------------------------------------
  const insuranceTypeArray = [
    {
      title: "Health AdvantEdge",
      icon: () => {
        return <FaHeart size={50} className="text-red-500" />;
      },
      path: "/health-insurance/enquiry",
    },
    {
      title: "Max Protect",
      icon: () => {
        return <FaTachometerAlt size={50} className="text-orange-500" />;
      },
      path: "/health-insurance/enquiry",
    },
    {
      title: "Health AdvantEdge",
      icon: () => {
        return <FaHeart size={50} />;
      },
      path: "/health-insurance/enquiry",
    },
    {
      title: "Health AdvantEdge",
      icon: () => {
        return <FaHeart size={50} />;
      },
      path: "/health-insurance/enquiry",
    },
  ];
  // -----------------------------------------------------------------------------------------------------
  // ------------------------------------------Hooks-----------------------------------------------------
  // -----------------------------------------------------------------------------------------------------
  // ----------------------------------------Functions-----------------------------------------------------
  // -----------------------------------------------------------------------------------------------------

  return (
    <>
      <div className="container mx-auto">
        <div className="px-10 py-10">
          <h1 className=" font-semibold text text-2xl lg:text-4xl py-2 lg:mb-6">
            Health Insurance
          </h1>
          <p className="leading-7 text-black roboto-regular">
            Health insurance is an insurance product that covers medical and
            surgical expenses of an insured person. These expenses could be
            related to hospitalisation costs, medicine costs, or doctor
            consultation fees. Since medical costs are going up, and more people
            are getting sick because of their lifestyles. If you end up in the
            hospital without health insurance, it can quickly drain your
            savings. Buying a health insurance policy can provide you with the
            required financial assistance in case of hospitalization. This
            insurance provides coverage against medical expenses that you may
            incur during the policy period. With a valid mediclaim, you can also
            receive tax benefits under section 80D of the Income Tax Act, 1961.
          </p>
        </div>
        <section className="healthInsuranceCards mt-10">
          <div class="flex justify-center px-10 pb-5">
            <div>
              <div class="group relative -ml-4 flex scroll-mt-40 items-center pl-4">
                <a
                  href="#"
                  class="absolute z-50 -ml-10 mb-2.5 rounded-md border border-blue-gray-50 bg-blue-gray-50/50 p-1 opacity-0 hover:opacity-100 group-hover:opacity-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="pointer-events-none h-3.5 w-3.5 rounded-lg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
                    ></path>
                  </svg>
                </a>
                <h2 class="font-semibold text text-2xl lg:text-3xl py-2 lg:mb-6">
                  Choose the type of insurance
                </h2>
              </div>
              <p class="font-base  roboto-regular text-black leading-7">
                Framework-specific guides that cover our recommended approach to
                installing @material-tailwind/react in a number of popular
                environments. Select your preferred framework from the list
                below and follow the instructions.
              </p>
              <div
                class="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4"
                id="frameworks-integration"
              >
                {insuranceTypeArray.map((type) => {
                  return (
                    <Link
                      class="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25"
                      to={type?.path}
                    >
                      <span class="my-6 grid h-24 w-24 place-items-center justify-center">
                        {type?.icon()}
                        <h3 className="text-center">{type?.title}</h3>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="px-10">
          <div>
            <h1 className="text text-2xl font-medium py-5">
              Key Features of Health Insurance Plans
            </h1>
          </div>
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Feature
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Specifications
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Sum Insured
                  </th>
                  <td class="px-6 py-4">Rs. 50,000- Rs.3 crore</td>
                </tr>

                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Room Rent
                  </th>
                  <td class="px-6 py-4">
                    Covered as per policy terms and conditions
                  </td>
                </tr>

                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Pre and post hospitalization expenses
                  </th>
                  <td class="px-6 py-4">Usually 30-60 days</td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Day care procedures
                  </th>
                  <td class="px-6 py-4">Covered</td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Pre and post hospitalization expenses
                  </th>
                  <td class="px-6 py-4">Usually 30-60 days</td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Sum Insured Restoration Benefit
                  </th>
                  <td class="px-6 py-4">Available</td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Maternity and newborn expenses
                  </th>
                  <td class="px-6 py-4">Covered</td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Pre-existing diseases
                  </th>
                  <td class="px-6 py-4">
                    Covered after the applicable waiting period
                  </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    OPD Cover
                  </th>
                  <td class="px-6 py-4">Covered</td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    ICU charges
                  </th>
                  <td class="px-6 py-4">Covered</td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Ambulance charges
                  </th>
                  <td class="px-6 py-4">Covered</td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Organ donor expenses
                  </th>
                  <td class="px-6 py-4">Covered</td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Free health check up
                  </th>
                  <td class="px-6 py-4">Covered</td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Tax Benefits
                  </th>
                  <td class="px-6 py-4">
                    Covered after the applicable waiting period
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <Whychoosshiven />
        </section>

        <section>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white p-6 rounded-lg shadow">
                <h1 class="text-2xl font-bold text-gray-900 mb-2">
                  What is Health Insurance?
                </h1>
                <p class="text-gray-600">
                  Health insurance is an agreement between the insurer and the
                  policyholder whereby an insurance company agrees to reimburse
                  for medical costs incurred by the policyholder during the
                  tenure of the policy. According to the policy terms, the
                  insured may incur medical expenses if they get ill or meet an
                  unfortunate accident that leads to treatment at the hospital.
                  To avail of the coverage benefits of a health insurance
                  policy, the policyholder must pay a specific amount
                  periodically, called a premium. The premium is determined by
                  the insurance company and must be paid by the policyholders
                  without any fail either monthly, quarterly, half-yearly or
                  annually.
                </p>
              </div>
              <div class="bg-gray-200 rounded-lg flex justify-center items-center overflow-hidden">
                <img
                  className="w-[100%]"
                  src="https://i.graphicmama.com/blog/wp-content/uploads/2021/04/14070313/free-medical-illustrations-59.png"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h2 className="text-4xl font-semibold text-center mb-10">
              Choose your plans
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 shadow rounded-lg flex flex-col">
                <div className="flex items-center space-x-2 mb-4">
                  <img
                    alt="Company Logo"
                    className="h-10 w-10"
                    height="40"
                    src="https://healthstatic.insurancedekho.com/prod/oem_image/20211022184151.png"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      Reassure 2.0 Platinum+
                    </h3>
                    <p className="text-sm text-gray-600">
                      No room rent limit | 100% no claim bonus | Unlimited
                      restoration benefits
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Cover</p>
                    <p className="font-semibold">₹ 5 L</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Starting at</p>
                    <p className="font-semibold">₹ 832/month*</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="bg-red-500 p-3 rounded-md text-white"
                >
                  Check Premium
                </button>
              </div>
              <div className="bg-white p-4 shadow rounded-lg flex flex-col">
                <div className="flex items-center space-x-2 mb-4">
                  <img
                    alt="Company Logo"
                    className="h-10 w-10"
                    height="40"
                    src="https://healthstatic.insurancedekho.com/prod/oem_image/1598957797.jpg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Care Supreme</h3>
                    <p className="text-sm text-gray-600">
                      No room rent limit | Unlimited restoration benefits | 50%
                      no claim bonus
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Cover</p>
                    <p className="font-semibold">₹ 10 L</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Starting at</p>
                    <p className="font-semibold">₹ 739/month*</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="bg-red-500 p-3 rounded-md text-white"
                >
                  Check Premium
                </button>
              </div>

              <div className="bg-white p-4 shadow rounded-lg flex flex-col">
                <div className="flex items-center space-x-2 mb-4">
                  <img
                    alt="Company Logo"
                    className="h-10 w-10"
                    height="40"
                    src="https://healthstatic.insurancedekho.com/prod/oem_image/1589358566.jpg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Health Gain Plus</h3>
                    <p className="text-sm text-gray-600">
                      No room rent limit | 33% no claim bonus | 100% restoration
                      benefits
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Cover</p>
                    <p className="font-semibold">₹ 5 L</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Starting at</p>
                    <p className="font-semibold">₹ 447/month*</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="bg-red-500 p-3 rounded-md text-white"
                >
                  Check Premium
                </button>
              </div>

              <div className="bg-white p-4 shadow rounded-lg flex flex-col">
                <div className="flex items-center space-x-2 mb-4">
                  <img
                    alt="Company Logo"
                    className="h-10 w-10"
                    height="40"
                    src="https://healthstatic.insurancedekho.com/prod/oem_image/1589358566.jpg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Health Gain Plus</h3>
                    <p className="text-sm text-gray-600">
                      No room rent limit | 33% no claim bonus | 100% restoration
                      benefits
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Cover</p>
                    <p className="font-semibold">₹ 5 L</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Starting at</p>
                    <p className="font-semibold">₹ 447/month*</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="bg-red-500 p-3 rounded-md text-white"
                >
                  Check Premium
                </button>
              </div>

              <div className="bg-white p-4 shadow rounded-lg flex flex-col">
                <div className="flex items-center space-x-2 mb-4">
                  <img
                    alt="Company Logo"
                    className="h-10 w-10"
                    height="40"
                    src="https://healthstatic.insurancedekho.com/prod/oem_image/1589358566.jpg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Health Gain Plus</h3>
                    <p className="text-sm text-gray-600">
                      No room rent limit | 33% no claim bonus | 100% restoration
                      benefits
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Cover</p>
                    <p className="font-semibold">₹ 5 L</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Starting at</p>
                    <p className="font-semibold">₹ 447/month*</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="bg-red-500 p-3 rounded-md text-white"
                >
                  Check Premium
                </button>
              </div>

              <div className="bg-white p-4 shadow rounded-lg flex flex-col">
                <div className="flex items-center space-x-2 mb-4">
                  <img
                    alt="Company Logo"
                    className="h-10 w-10"
                    height="40"
                    src="https://healthstatic.insurancedekho.com/prod/oem_image/1589182232.jpg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Health Gain Plus</h3>
                    <p className="text-sm text-gray-600">
                      No room rent limit | 33% no claim bonus | 100% restoration
                      benefits
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Cover</p>
                    <p className="font-semibold">₹ 5 L</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Starting at</p>
                    <p className="font-semibold">₹ 447/month*</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="bg-red-500 p-3 rounded-md text-white"
                >
                  Check Premium
                </button>
              </div>
            </div>
            <div>
              <div class="flex justify-center mt-6">
                <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white">
                  See More Plans
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Healthinsurance;
