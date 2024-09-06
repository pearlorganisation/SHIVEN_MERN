import React from "react";
import { useNavigate } from "react-router-dom";

const MutualfundProvider = () => {
  const navigate = useNavigate();
  const handelChange = () => {
    navigate("/mutualfunddetails");
  };
  return (
    <>
      <div class="p-6">
        <div class="space-y-4">
          <div
            class="flex items-center p-4 bg-white shadow-md rounded-md"
            onClick={handelChange}
          >
            <img
              src="https://assets-netstorage.groww.in/mf-assets/logos/icici_groww.png"
              alt="ICICI"
              class="w-12 h-12 mr-4"
            />
            <div class="flex-1">
              <h3 class="text-lg font-medium">
                ICICI Prudential BHARAT 22 FOF Direct Growth
              </h3>
              <p class="text-sm text-gray-500">Very High Risk • Other • 5 ★</p>
            </div>
            <div class="flex space-x-6">
              <div>
                <p class="text-lg font-semibold">63.47%</p>
                <p class="text-sm text-gray-500">1Y</p>
              </div>
              <div>
                <p class="text-lg font-semibold">40.39%</p>
                <p class="text-sm text-gray-500">3Y</p>
              </div>
              <div>
                <p class="text-lg font-semibold">27.58%</p>
                <p class="text-sm text-gray-500">5Y</p>
              </div>
            </div>
          </div>

          <div
            class="flex items-center p-4 bg-white shadow-md rounded-md"
            onClick={handelChange}
          >
            <img
              src="https://assets-netstorage.groww.in/mf-assets/logos/escorts_groww.png"
              alt="Motilal Oswal"
              class="w-12 h-12 mr-4"
            />
            <div class="flex-1">
              <h3 class="text-lg font-medium">
                Motilal Oswal Midcap Fund Direct Growth
              </h3>
              <p class="text-sm text-gray-500">Very High Risk • Equity • 5 ★</p>
            </div>
            <div class="flex space-x-6">
              <div>
                <p class="text-lg font-semibold">66.55%</p>
                <p class="text-sm text-gray-500">1Y</p>
              </div>
              <div>
                <p class="text-lg font-semibold">38.29%</p>
                <p class="text-sm text-gray-500">3Y</p>
              </div>
              <div>
                <p class="text-lg font-semibold">34.83%</p>
                <p class="text-sm text-gray-500">5Y</p>
              </div>
            </div>
          </div>

          <div
            class="flex items-center p-4 bg-white shadow-md rounded-md"
            onClick={handelChange}
          >
            <img
              src="https://assets-netstorage.groww.in/mf-assets/logos/motilal_groww.png"
              alt="Motilal Oswal"
              class="w-12 h-12 mr-4"
            />
            <div class="flex-1">
              <h3 class="text-lg font-medium">
                Motilal Oswal Midcap Fund Direct Growth
              </h3>
              <p class="text-sm text-gray-500">Very High Risk • Equity • 5 ★</p>
            </div>
            <div class="flex space-x-6">
              <div>
                <p class="text-lg font-semibold">66.55%</p>
                <p class="text-sm text-gray-500">1Y</p>
              </div>
              <div>
                <p class="text-lg font-semibold">38.29%</p>
                <p class="text-sm text-gray-500">3Y</p>
              </div>
              <div>
                <p class="text-lg font-semibold">34.83%</p>
                <p class="text-sm text-gray-500">5Y</p>
              </div>
            </div>
          </div>

          <div
            class="flex items-center p-4 bg-white shadow-md rounded-md"
            onClick={handelChange}
          >
            <img
              src="https://assets-netstorage.groww.in/mf-assets/logos/motilal_groww.png"
              alt="Motilal Oswal"
              class="w-12 h-12 mr-4"
            />
            <div class="flex-1">
              <h3 class="text-lg font-medium">
                Motilal Oswal Midcap Fund Direct Growth
              </h3>
              <p class="text-sm text-gray-500">Very High Risk • Equity • 5 ★</p>
            </div>
            <div class="flex space-x-6">
              <div>
                <p class="text-lg font-semibold">66.55%</p>
                <p class="text-sm text-gray-500">1Y</p>
              </div>
              <div>
                <p class="text-lg font-semibold">38.29%</p>
                <p class="text-sm text-gray-500">3Y</p>
              </div>
              <div>
                <p class="text-lg font-semibold">34.83%</p>
                <p class="text-sm text-gray-500">5Y</p>
              </div>
            </div>
          </div>

          <div
            class="flex items-center p-4 bg-white shadow-md rounded-md"
            onClick={handelChange}
          >
            <img
              src="https://assets-netstorage.groww.in/mf-assets/logos/escorts_groww.png"
              alt="Motilal Oswal"
              class="w-12 h-12 mr-4"
            />
            <div class="flex-1">
              <h3 class="text-lg font-medium">
                Motilal Oswal Midcap Fund Direct Growth
              </h3>
              <p class="text-sm text-gray-500">Very High Risk • Equity • 5 ★</p>
            </div>
            <div class="flex space-x-6">
              <div>
                <p class="text-lg font-semibold">66.55%</p>
                <p class="text-sm text-gray-500">1Y</p>
              </div>
              <div>
                <p class="text-lg font-semibold">38.29%</p>
                <p class="text-sm text-gray-500">3Y</p>
              </div>
              <div>
                <p class="text-lg font-semibold">34.83%</p>
                <p class="text-sm text-gray-500">5Y</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MutualfundProvider;
