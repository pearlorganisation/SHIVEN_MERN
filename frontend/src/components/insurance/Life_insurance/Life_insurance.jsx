import React from "react";
import { MdOutlineCompare } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { SiAdguard } from "react-icons/si";
const Life_insurance = () => {
  return (
    <>
      <div className="container mx-auto p-10 md:p-20">
        <div>
          <h1 className="text-xl md:text-2xl font-medium">Life Insurance</h1>
        </div>
        <div className="py-2">
          <p>
            Life insurance is a contract between the policyholder and the
            insurance company according to which the latter agrees to provide a
            sum assured called the death benefit in the event of an unfortunate
            demise of the life assured. In case of survival of the life assured
            throughout the policy tenure, a maturity benefit is paid to the life
            assured. One can also choose to get a compensation in case of a
            critical illness by opting a critical illness rider.
          </p>
        </div>
        <div>
          <h2 className="text-lg  font-medium">
            There are broadly two types of life insurance plans:
          </h2>
        </div>
        <div className="py-2">
          <p>1 Term Insurance or Pure Protection Plans</p>
        </div>
        <div className="py-2">
          <p>2 Investment</p>
        </div>
        <div>
          <p className="py-2">
            There are various types of life insurance plans namely term plans,
            child plans, retirment plans, money-back plans, and Unit-Linked
            Insurance Plans (ULIPs). Besides the term plans which are pure
            protection plans, all other types of plans offer an investment
            element to help meet the policyholder’s wealth creation
            requirements. It is important to note that the premium of these
            plans depends on a number of factors such as policyholder’s age,
            lifestyle, gender, and more. You must also check the inclusions and
            exclusions before actually buying this policy.
          </p>
        </div>
        <div>
          <h2 className="text-lg  font-medium">
            Different Types of Life Insurance
          </h2>
        </div>

        <div class="relative overflow-x-auto py-2">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Types
                </th>
                <th scope="col" class="px-6 py-3">
                  Overview
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Term Insurance
                </th>
                <td class="px-6 py-4">
                  Life cover is provided for a specific tenure at a fixed
                  premium
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Unit linked insurance
                </th>
                <td class="px-6 py-4">
                  Offers dual benefit of investment and insurance protection
                </td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Endowment plan
                </th>
                <td class="px-6 py-4">
                  Offers the benefit of savings along with protection
                </td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Whole life insurance
                </th>
                <td class="px-6 py-4">
                  Protection is offered for lifetime or till the age of 100
                </td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Money back insurance
                </th>
                <td class="px-6 py-4">
                  Periodic payouts are made to the policyholder at specific
                  intervals
                </td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Pension plans
                </th>
                <td class="px-6 py-4">
                  Provides fixed amount at regular intervals to help you take
                  care of post retirement expenses
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex flex-col justify-center items-center max-w-screen-lg mx-auto py-16 px-4 bg-gray-100 my-20">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Why Choose Shiven
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md">
                <MdOutlineCompare size={30} className="text-blue-600" />
                <h3 className="text-xl font-medium text-gray-800 mb-2"> 
                  Intra plan comparison
                </h3>
                <p className="text-gray-600 text-center">
                  Compare for the best pricing and find the right plan for your
                  needs.
                </p>
              </div>
              <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md">
                <BiSupport size={30} className="text-blue-600" />
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Expert Claim support
                </h3>
                <p className="text-gray-600 text-center">
                  Get support during your claim request for a smooth &
                  hassle-free experience. 
                </p>
              </div>
              <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md">
                <SiAdguard size={30} className="text-blue-600" />
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Additional riders
                </h3>
                <p className="text-gray-600 text-center">
                  To provide extra benefits as add ons, customizing your plan
                  further.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Life_insurance;
