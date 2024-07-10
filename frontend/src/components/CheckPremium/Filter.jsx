import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";

const Filter = () => {
  const [showCoverDropdown, setShowCoverDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const toggleCoverDropdown = () => {
    setShowCoverDropdown(!showCoverDropdown);
  };

  const toggleSortDropdown = () => {
    setShowSortDropdown(!showSortDropdown);
  };

  const toggleCompanyDropdown = () => {
    setShowCompanyDropdown(!showCompanyDropdown);
  };

  const toggleEditForm = () => {
    setShowEditForm(!showEditForm);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-gray-700">Showing 76 plans for</span>
          <span className="font-bold">Self (23 Yrs)</span>
          <button
            className="text-blue-500 hover:underline ml-2"
            onClick={toggleEditForm}
          >
            Edit
          </button>
        </div>
        <input
          type="text"
          placeholder="Your search"
          className="mt-2 sm:mt-0 ml-0 sm:ml-4 p-2 border rounded-md w-full sm:w-auto"
        />
      </div>

      {showEditForm && (
        <div className="mt-4 p-4 border rounded-md bg-gray-50">
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <input
              type="text"
              placeholder="Name"
              className="mb-2 sm:mb-0 p-2 border rounded-md"
            />
            <input
              type="number"
              placeholder="Age"
              className="mb-2 sm:mb-0 p-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Number"
              className="p-2 border rounded-md"
            />
          </div>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300">
            Save
          </button>
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        <div className="relative">
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
                  Below ₹5 Lakh
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
                  Premium low to high
                </li>
                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                  High to low
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
            onClick={toggleCompanyDropdown}
          >
            Company
          </button>
          {showCompanyDropdown && (
            <div className="absolute mt-2 w-56 bg-white border rounded-md shadow-lg z-10">
              <ul>
                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                  Life Insurance Corporation of India
                </li>
                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                  HDFC Life Insurance Co. Ltd.
                </li>
                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                  Max Life Insurance Co. Ltd.
                </li>
                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                  ICICI Prudential Life Insurance Co. Ltd.
                </li>
                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                  Kotak Mahindra Life Insurance Co. Ltd.
                </li>
                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                  Aditya Birla Sun Life Insurance Co. Ltd.
                </li>
              </ul>
            </div>
          )}
        </div>

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
