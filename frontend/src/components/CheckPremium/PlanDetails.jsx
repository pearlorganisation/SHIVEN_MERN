import React, { useState } from "react";

const PlanDetails = () => {
  const [activeTab, setActiveTab] = useState("Includes");

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            <div>
              <h2 className="text-xl font-bold">Care Health</h2>
              <p className="text-gray-600">Care Supreme VFM Discounted</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="bg-blue-100 text-blue-500 px-2 py-1 rounded">
                  Cover
                </span>
                <span className="font-semibold">₹5 Lac</span>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition duration-300">
              Proceed to Buy
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-col md:flex-row justify-between">
          <div className="flex-1">
            <div className="flex space-x-4 border-b pb-2">
              <button
                className={`text-blue-500 border-b-2 ${
                  activeTab === "Includes"
                    ? "border-blue-500"
                    : "border-transparent"
                } pb-2`}
                onClick={() => setActiveTab("Includes")}
              >
                Includes
              </button>
              <button
                className={`text-gray-600 pb-2 ${
                  activeTab === "Excludes"
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
                onClick={() => setActiveTab("Excludes")}
              >
                Excludes
              </button>
              <button
                className={`text-gray-600 pb-2 ${
                  activeTab === "Cashless Hospitals"
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
                onClick={() => setActiveTab("Cashless Hospitals")}
              >
                Cashless Hospitals
              </button>
              <button
                className={`text-gray-600 pb-2 ${
                  activeTab === "Claim Process"
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
                onClick={() => setActiveTab("Claim Process")}
              >
                Claim Process
              </button>
            </div>

            {activeTab === "Includes" && (
              <div className="mt-4">
                <div className="flex items-center space-x-2 bg-yellow-100 p-2 rounded-md">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-semibold">
                      Shiven is a certified 5 Star Partner with Care Health
                    </p>
                    <button className="text-blue-500 hover:underline">
                      View Certificate
                    </button>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold">What's covered? </h3>
                  <div className="mt-4 bg-gray-50 p-4 rounded-md">
                    <h4 className="text-yellow-600 font-bold mb-2">
                      Special Features
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                          ✓
                        </span>
                        <p>
                          Unlimited Automatic Recharge for Related & Unrelated
                          Illnesses.
                        </p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                          ✓
                        </span>
                        <p>
                          No Sublimit on Modern Treatment, AYUSH, Room rent,
                          etc.
                        </p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                          ✓
                        </span>
                        <p>
                          Unlimited E-Consultations - Available for
                          Consultations with General Physicians
                        </p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                          ✓
                        </span>
                        <p>
                          Restoration Benefits: Rs. 500000. For both same &
                          different illness. Unlimited times/year.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Excludes" && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold">What's not covered?</h3>
                <div className="mt-4 bg-gray-50 p-4 rounded-md">
                  <h4 className="text-red-600 font-bold mb-2">Exclusions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white">
                        ×
                      </span>
                      <p>Maternity Cover</p>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white">
                        ×
                      </span>
                      <p>Permanent Exclusions</p>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white">
                        ×
                      </span>
                      <p>Cosmetic Surgeries</p>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white">
                        ×
                      </span>
                      <p>Breach of law</p>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white">
                        ×
                      </span>
                      <p>War related injuries</p>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white">
                        ×
                      </span>
                      <p>Treatment for Alcoholism</p>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white">
                        ×
                      </span>
                      <p>Hazardous or Adventure Sports</p>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white">
                        ×
                      </span>
                      <p>Drug or substance abuse</p>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "Cashless Hospitals" && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Cashless Hospitals</h3>
                <p className="mt-2 text-gray-600">
                  Details about cashless hospitals will be displayed here.
                </p>
              </div>
            )}

            {activeTab === "Claim Process" && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Claim Process</h3>
                <p className="mt-2 text-gray-600">
                  Details about the claim process will be displayed here.
                </p>
              </div>
            )}
          </div>

          <div className="mt-6 md:mt-0 md:w-80">
            <div className="bg-gray-50 p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold">Premium Breakup</h3>
              <div className="mt-4">
                <div className="flex justify-between">
                  <span>Base Premium (1 yr)</span>
                  <span>₹6,580</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>GST @18%</span>
                  <span>₹1,184</span>
                </div>
                <div className="flex justify-between mt-4 font-semibold">
                  <span>Payable Premium</span>
                  <span>₹7,764</span>
                </div>
                <button className="mt-6 w-full px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition duration-300">
                  Proceed to Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
