import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
import { RxCross2 } from "react-icons/rx";
import { GrDocumentText } from "react-icons/gr";
import { MdOutlineAutorenew } from "react-icons/md";
import { CiReceipt } from "react-icons/ci";

const data = [
  { name: "Page A", uv: 4000, amt: 2400 },
  { name: "Page B", uv: 3000, amt: 2210 },
  { name: "Page C", uv: 2000, amt: 2290 },
  { name: "Page D", uv: 2780, amt: 2000 },
  { name: "Page E", uv: 1890, amt: 2181 },
  { name: "Page F", uv: 2390, amt: 2500 },
  { name: "Page G", uv: 3490, amt: 2100 },
];
const ConsultantDashboard = () => {
  return (
    <>
      <section>
        <div>
          <h1 className="text-2xl font-semibold mb-6 p-5">Total Investment</h1>
        </div>

        <div className="grid md:grid-cols-4 lg:grid-cols-5 ">
          {[
            "Life Insurance",
            "General Insurance",
            "Motor Insurance",
            "Mutual Funds",
            "Loans",
          ].map((el, i) => {
            return (
              <>
                <div className="">
                  <div className="p-10 text font-medium text-sm">{el}</div>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      width={500}
                      height={300}
                      data={data}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />

                      <Bar dataKey="uv" fill="#25f5ee" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </>
            );
          })}
        </div>
      </section>

      <section>
        <div>
          <h1 className="text-2xl font-semibold mb-6 p-5">
            Enquiry/Leads Generated
          </h1>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Lead ID
                </th>
                <th scope="col" class="px-6 py-3">
                  Customer
                </th>
                <th scope="col" class="px-6 py-3">
                  Company
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Phone
                </th>
                <th scope="col" class="px-6 py-3">
                  Source
                </th>
                <th scope="col" class="px-6 py-3">
                  Created
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Laptop</td>
                <td class="px-6 py-4">$2999</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    987654321
                  </a>
                </td>
                <td class="px-6 py-4">Facebook</td>
                <td class="px-6 py-4">Just now</td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">White</td>
                <td class="px-6 py-4">Laptop PC</td>
                <td class="px-6 py-4">$1999</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    987654321
                  </a>
                </td>
                <td class="px-6 py-4">Facebook</td>
                <td class="px-6 py-4">Just now</td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Magic Mouse 2
                </th>
                <td class="px-6 py-4">Black</td>
                <td class="px-6 py-4">Accessories</td>
                <td class="px-6 py-4">$99</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    987654321
                  </a>
                </td>
                <td class="px-6 py-4">Facebook</td>
                <td class="px-6 py-4">Just now</td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Google Pixel Phone
                </th>
                <td class="px-6 py-4">Gray</td>
                <td class="px-6 py-4">Phone</td>
                <td class="px-6 py-4">$799</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    987654321
                  </a>
                </td>
                <td class="px-6 py-4">Facebook</td>
                <td class="px-6 py-4">Just now</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple Watch 5
                </th>
                <td class="px-6 py-4">Red</td>
                <td class="px-6 py-4">Wearables</td>
                <td class="px-6 py-4">$999</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    987654321
                  </a>
                </td>
                <td class="px-6 py-4">Facebook</td>
                <td class="px-6 py-4">Just now</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div>
          <h1 className="text-2xl font-semibold mb-6 p-5">
            Qoutation / Invoice
          </h1>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Coustomer
                </th>
                <th scope="col" class="px-6 py-3">
                  Date
                </th>
                <th scope="col" class="px-6 py-3">
                  Invoice
                </th>
                <th scope="col" class="px-6 py-3">
                  Amount
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Laptop</td>
                <td class="px-6 py-4">$2999</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    complete
                  </a>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">White</td>
                <td class="px-6 py-4">Laptop PC</td>
                <td class="px-6 py-4">$1999</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    complete
                  </a>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Magic Mouse 2
                </th>
                <td class="px-6 py-4">Black</td>
                <td class="px-6 py-4">Accessories</td>
                <td class="px-6 py-4">$99</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    complete
                  </a>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Google Pixel Phone
                </th>
                <td class="px-6 py-4">Gray</td>
                <td class="px-6 py-4">Phone</td>
                <td class="px-6 py-4">$799</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    complete
                  </a>
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple Watch 5
                </th>
                <td class="px-6 py-4">Red</td>
                <td class="px-6 py-4">Wearables</td>
                <td class="px-6 py-4">$999</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    complete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div>
          <h1 className="text-2xl font-semibold mb-6 p-5">
            Online / Offline Meeting / Client Visit
          </h1>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Time
                </th>
                <th scope="col" class="px-6 py-3">
                  Where
                </th>
                <th scope="col" class="px-6 py-3">
                  Topic
                </th>
                <th scope="col" class="px-6 py-3">
                  Stage
                </th>
                <th scope="col" class="px-6 py-3">
                  Attendees
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Laptop</td>
                <td class="px-6 py-4">$2999</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500  hover:underline"
                  >
                    10
                  </a>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">White</td>
                <td class="px-6 py-4">Laptop PC</td>
                <td class="px-6 py-4">$1999</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    10
                  </a>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Magic Mouse 2
                </th>
                <td class="px-6 py-4">Black</td>
                <td class="px-6 py-4">Accessories</td>
                <td class="px-6 py-4">$99</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    10
                  </a>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Google Pixel Phone
                </th>
                <td class="px-6 py-4">Gray</td>
                <td class="px-6 py-4">Phone</td>
                <td class="px-6 py-4">$799</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    10
                  </a>
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple Watch 5
                </th>
                <td class="px-6 py-4">Red</td>
                <td class="px-6 py-4">Wearables</td>
                <td class="px-6 py-4">$999</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    10
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div>
          <h1 className="text-2xl font-semibold mb-6 p-5">
            Complaints / Customer Request
          </h1>
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Date
                </th>
                <th scope="col" class="px-6 py-3">
                  Time
                </th>
                <th scope="col" class="px-6 py-3">
                  Request
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Alex
                </th>
                <td class="px-6 py-4">31 feb 2024</td>
                <td class="px-6 py-4">10am</td>
                <td class="px-6 py-4">not working properly </td>
                <td class="px-6 py-4">sloved</td>
              </tr>

              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Alex
                </th>
                <td class="px-6 py-4">31 feb 2024</td>
                <td class="px-6 py-4">10am</td>
                <td class="px-6 py-4">not working properly </td>
                <td class="px-6 py-4">sloved</td>
              </tr>

              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Alex
                </th>
                <td class="px-6 py-4">31 feb 2024</td>
                <td class="px-6 py-4">10am</td>
                <td class="px-6 py-4">not working properly </td>
                <td class="px-6 py-4">sloved</td>
              </tr>

              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Alex
                </th>
                <td class="px-6 py-4">31 feb 2024</td>
                <td class="px-6 py-4">10am</td>
                <td class="px-6 py-4">not working properly </td>
                <td class="px-6 py-4">sloved</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div>
          <h1 className="text-2xl font-semibold mb-6 p-5">
            Qoutation / Invoice
          </h1>
        </div>

        <div className="flex justify-between items-center bg-blue-400 p-6">
          <div>
            <p className="text-white">2 Team</p>
          </div>
          <div>
            <button className="bg-white p-2 rounded">Add Team</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 place-items-center">
        <div className="w-full">
          <div className="flex justify-between items-center bg-blue-400 p-6 max-w-xl my-2 mb-0">
            <div>
              <p className="text-white">2 Team</p>
            </div>
            <div>
              <button className="bg-white p-2 rounded">Add Team</button>
            </div>
          </div>
          <div className="flex justify-between  max-w-xl  bg-[#eaeaea] p-2">
            <div>
              <div class="flex -space-x-4 rtl:space-x-reverse">
                <imgStochastics 
                  class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src="https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png"
                  alt=""
                />
                <img
                  class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src="https://i.pinimg.com/originals/6a/73/3e/6a733e5c3452f37699348c4999ce3bab.png"
                  alt=""
                />
                <img
                  class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src="https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png"
                  alt=""
                />
                <img
                  class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src="https://i.pinimg.com/originals/6a/73/3e/6a733e5c3452f37699348c4999ce3bab.png"
                  alt=""
                />
              </div>
            </div>

            <div className="flex">
              <div className="p-2">
                <FiEdit size={25} />
              </div>
              <div className="p-2">
                <RiDeleteBin5Line size={25} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center bg-blue-400 p-6 max-w-xl my-2 mb-0">
            <div>
              <p className="text-white">2 Team</p>
            </div>
            <div>
              <button className="bg-white p-2 rounded">Add Team</button>
            </div>
          </div>
          <div className="flex justify-between  max-w-xl  bg-[#eaeaea] p-2">
            <div>
              <div class="flex -space-x-4 rtl:space-x-reverse">
                <img
                  class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src="https://i.pinimg.com/originals/6a/73/3e/6a733e5c3452f37699348c4999ce3bab.png"
                  alt=""
                />
                <img
                  class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src="https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png"
                  alt=""
                />
                <img
                  class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src="https://i.pinimg.com/originals/6a/73/3e/6a733e5c3452f37699348c4999ce3bab.png"
                  alt=""
                />
                <img
                  class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src="https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png"
                  alt=""
                />
              </div>
            </div>

            <div className="flex">
              <div className="p-2">
                <FiEdit size={25} />
              </div>
              <div className="p-2">
                <RiDeleteBin5Line size={25} />
              </div>
            </div>
          </div>
        </div>
        </div>
       
      </section>
    </>
  );
};

export default ConsultantDashboard;
