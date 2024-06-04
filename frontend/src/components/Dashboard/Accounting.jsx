import React from "react";

const Accounting = () => {
  return (
    <>
      <div class="relative overflow-x-auto container  mx-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3 ">
                Customer
              </th>
              <th scope="col" class="px-6 py-3 ">
                Date
              </th>
              <th scope="col" class="px-6 py-3 ">
                invoice
              </th>
              <th scope="col" class="px-6 py-3 ">
                Amount
              </th>
              <th scope="col" class="px-6 py-3 ">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Alex john
              </th>
              <td class="px-6 py-4">20/2/1990</td>
              <td class="px-6 py-4">22232</td>
              <td class="px-6 py-4">114000</td>
              <td class="px-6 py-4">Paid</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Alex john
              </th>
              <td class="px-6 py-4">12/6/2009</td>
              <td class="px-6 py-4">11111</td>
              <td class="px-6 py-4">114000</td>
              <td class="px-6 py-4">Paid</td>
            </tr>
            <tr class="bg-white border-b  dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Alex john
              </th>
              <td class="px-6 py-4">22/2/2007</td>
              <td class="px-6 py-4">11111</td>
              <td class="px-6 py-4">114000</td>
              <td class="px-6 py-4">Paid</td>
            </tr>
            <tr class="bg-white border-b  dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Alex john
              </th>
              <td class="px-6 py-4">22/2/2004</td>
              <td class="px-6 py-4">11111</td>
              <td class="px-6 py-4">114000</td>
              <td class="px-6 py-4">UnPaid</td>
            </tr>
            <tr class="bg-white border-b  dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Alex john
              </th>
              <td class="px-6 py-4">22/2/2005</td>
              <td class="px-6 py-4">11111</td>
              <td class="px-6 py-4">114000</td>
              <td class="px-6 py-4">Unpaid</td>
            </tr>
            <tr class="bg-white border-b  dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Alex john
              </th>
              <td class="px-6 py-4">22/2/2007</td>
              <td class="px-6 py-4">11111</td>
              <td class="px-6 py-4">114000</td>
              <td class="px-6 py-4">Unpaid</td>
            </tr>
            <tr class="bg-white border-b  dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Alex john
              </th>
              <td class="px-6 py-4">22/2/2009</td>
              <td class="px-6 py-4">11111</td>
              <td class="px-6 py-4">114000</td>
              <td class="px-6 py-4">Paid</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Accounting;
