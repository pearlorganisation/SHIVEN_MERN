import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { MdChevronLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
const Notifications = () => {
  return (
   <>
   <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Announcements & Notifications</h1>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button className="mr-2" variant="outline">
            <MdChevronLeft />
            </button>

            <span>1-50</span>

            <button className="ml-2" variant="outline">
            <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
        <div className="bg-white rounded-md shadow">
          <ul className="divide-y divide-gray-200">
            <li className="px-6 py-4 flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-green-600">Payment of ₹5000 has been processed</p>
                <p className="text-xs text-gray-500 mt-1">15 March 2024</p>
              </div>
              <button variant="ghost">
              <RxCross2 />
              </button>
            </li>
            <li className="px-6 py-4 flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-red-600">
                  We were unable to process payment for your recurring subscription
                </p>
                <p className="text-xs text-gray-500 mt-1">14 March 2024</p>
              </div>
              <button variant="ghost">
              <RxCross2 />
              </button>
            </li>
            <li className="px-6 py-4 flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-yellow-600">Your Policy will be expiring on 15th March 2024</p>
                <p className="text-xs text-gray-500 mt-1">10 March 2024</p>
              </div>
              <button variant="ghost">
              <RxCross2 />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
   </>
  )
}

export default Notifications;
