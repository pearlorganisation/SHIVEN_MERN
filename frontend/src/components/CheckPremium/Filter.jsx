import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";

const Filter = () => {
  const [showCoverDropdown, setShowCoverDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const toggleCoverDropdown = () => {
    setShowCoverDropdown(!showCoverDropdown);
  };

  const toggleSortDropdown = () => {
    setShowSortDropdown(!showSortDropdown);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-gray-700">Showing 76 plans for</span>
          <span className="font-bold">Self (23 Yrs)</span>
          <button className="text-blue-500 hover:underline ml-2">Edit</button>
        </div>
        <input
          type="text"
          placeholder="Your search"
          className="mt-2 sm:mt-0 ml-0 sm:ml-4 p-2 border rounded-md w-full sm:w-auto"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <div className="relative ">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
            onClick={toggleCoverDropdown}
          >
            Cover
          </button>
          {showCoverDropdown && (
            <div className="absolute mt-2 w-56 bg-white border rounded-md shadow-lg z-10">
              <ul>
                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                  Which cover amount is best for you? Let's Find Out
                </li>

                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                  Recommended
                </li>

                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                  Below ₹5 LaKh
                </li>

                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                  ₹5-9 Lakh
                </li>

                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                  ₹10-24 Lakh
                </li>

                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                  ₹25-99 Lakh
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
            onClick={toggleSortDropdown}
          >
            Sort by
          </button>
          {showSortDropdown && (
            <div className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
              <ul>
                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                  By relevance
                </li>
                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                  Premium low to high
                </li>
                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                  Cashless hospitals network
                </li>
              </ul>
            </div>
          )}
        </div>

        <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300">
          No room rent limit
        </button>

        <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300">
          Maternity Cover
        </button>

        <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300">
          Company
        </button>

        <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300">
          <div className="flex justify-center items-center">
            <div>
              <CiFilter size={20} />
            </div>
            <div>All filters</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Filter;
