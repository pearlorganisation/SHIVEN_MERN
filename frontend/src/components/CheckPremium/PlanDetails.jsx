import React, { useEffect, useState } from "react";
import { servicePlanAction } from "../../features/actions/servicePlan/servicePlan";
import { useDispatch, useSelector } from "react-redux";

const PlanDetails = () => {
  const { servicePlanData } = useSelector((state) => state?.servicePlan);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(servicePlanAction());
  }, []);

  console.log(servicePlanData, "  plan DETILAS  data");

  const [activeTab, setActiveTab] = useState("Includes");

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6 border border-green-500">
        {servicePlanData.map((el, id) => {
          return (
            <>
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center ">
                  <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
                    <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                    <div>
                      <h2 className="text-xl font-bold">
                        {el.serviceProvider.serviceProviderName}
                      </h2>
                      <p className="text-gray-600">{el.serviceName}</p>

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
                        className={`pb-2 ${
                          activeTab === "Includes"
                            ? "text-blue-500 border-b-2 border-blue-500"
                            : "text-gray-600 border-transparent"
                        }`}
                        onClick={() => setActiveTab("Includes")}
                      >
                        Includes
                      </button>
                      <button
                        className={`pb-2 ${
                          activeTab === "Excludes"
                            ? "text-blue-500 border-b-2 border-blue-500"
                            : "text-gray-600 border-transparent"
                        }`}
                        onClick={() => setActiveTab("Excludes")}
                      >
                        Excludes
                      </button>
                      <button
                        className={`pb-2 ${
                          activeTab === "Cashless Hospitals"
                            ? "text-blue-500 border-b-2 border-blue-500"
                            : "text-gray-600 border-transparent"
                        }`}
                        onClick={() => setActiveTab("Cashless Hospitals")}
                      >
                        Cashless Hospitals
                      </button>
                      <button
                        className={`pb-2 ${
                          activeTab === "Claim Process"
                            ? "text-blue-500 border-b-2 border-blue-500"
                            : "text-gray-600 border-transparent"
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
                              Shiven is a certified 5 Star Partner with Care
                              Health
                            </p>
                            <button className="text-blue-500 hover:underline">
                              View Certificate
                            </button>
                          </div>
                        </div>

                        <div className="mt-6">
                          <h3 className="text-lg font-semibold">
                            What's covered?{" "}
                          </h3>
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
                                  Unlimited Automatic Recharge for Related &
                                  Unrelated Illnesses.
                                </p>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                                  ✓
                                </span>
                                <p>
                                  No Sublimit on Modern Treatment, AYUSH, Room
                                  rent, etc.
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
                                  Restoration Benefits: Rs. 500000. For both
                                  same & different illness. Unlimited
                                  times/year.
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === "Excludes" && (
                      <div className="mt-4">
                        <h3 className="text-lg font-semibold">
                          What's not covered?
                        </h3>
                        <div className="mt-4 bg-gray-50 p-4 rounded-md">
                          <h4 className="text-red-600 font-bold mb-2">
                            Exclusions
                          </h4>
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
                        <h3 className="text-lg font-semibold">
                          Cashless Hospitals
                        </h3>
                        <div className="mt-2">
                          <div className="flex items-center space-x-2">
                            <input
                              type="text"
                              placeholder="Select City, Pincode"
                              className="p-2 border rounded-md w-64"
                            />
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300">
                              Search for Cashless Hospitals
                            </button>
                          </div>
                          <div className="mt-4">
                            <p className="text-gray-600">
                              31 Cashless Hospitals found in your area
                            </p>
                            <div className="mt-2 space-y-4">
                              <div>
                                <h4 className="font-semibold">
                                  COMBINED MEDICAL INSTITUTE HOSPITAL
                                </h4>
                                <p>
                                  54 Hardwar Road Prince Chowk DEHRADUN
                                  Uttarakhand
                                </p>
                                <p>Pin Code-248001</p>
                              </div>
                              <div>
                                <h4 className="font-semibold">
                                  ARCHANA HOSPITAL
                                </h4>
                                <p>
                                  123 - A Mahindra Vihar (Behind Hotel Surbhi
                                  Palace) Ballupur Road DEHRADUN Uttarakhand
                                </p>
                                <p>Pin Code-248001</p>
                              </div>
                              <div>
                                <h4 className="font-semibold">
                                  Max Super Specialty Hospital Dehradun
                                </h4>
                                <p>
                                  Malsi Mussoorie Diversion Road DEHRADUN
                                  Uttarakhand
                                </p>
                                <p>Pin Code-248001</p>
                              </div>
                              <div>
                                <h4 className="font-semibold">
                                  Fortis Escorts Hospital Dehradun
                                </h4>
                                <p>
                                  2nd Floor Coronation Hospital Curzon Road
                                  Dalanwala DEHRADUN Uttarakhand
                                </p>
                                <p>Pin Code-248001</p>
                              </div>
                              {/* Add more hospital entries as needed */}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === "Claim Process" && (
                      <div className="mt-4">
                        <h3 className="text-lg font-semibold">Claim Process</h3>
                        <div className="mt-2 text-gray-600">
                          <div className="mb-4">
                            <h4 className="font-semibold">
                              Step 1: Claim Intimation
                            </h4>
                            <p>
                              Contact the insurer and provide relevant details
                              about the medical treatment.
                            </p>
                          </div>
                          <div className="mb-4">
                            <h4 className="font-semibold">
                              Step 2: Third Party Administrator (TPA) form
                              filling
                            </h4>
                            <p>
                              Visit the TPA desks for Pre-Authorization Request
                              Form at the hospital, submit the same to the
                              insurer.
                            </p>
                          </div>
                          <div className="mb-4">
                            <h4 className="font-semibold">
                              Step 3: Cashless Approval
                            </h4>
                            <p>
                              Insurer provides the cashless approval after
                              verifying all the details and documents submitted
                              by you.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold">
                              Step 4: Claim Settlements
                            </h4>
                            <p>
                              Avail the required medical treatment. The
                              insurance company will directly settle the bills
                              at the network hospital.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 md:mt-0 md:w-80">
                    <div className="bg-gray-50 p-4 rounded-md shadow-md">
                      <h3 className="text-lg font-semibold">Premium Breakup</h3>
                      <div className="mt-4">
                        <div className="flex justify-between">
                          <span>Base Premium (1 yr)</span>
                          <span>{el.premiumPerYear}</span>
                        </div>
                        <div className="flex justify-between mt-2">
                          <span>GST @18%</span>
                          <span>{(el.premiumPerYear * 18) / 100}</span>
                        </div>
                        <div className="flex justify-between mt-4 font-semibold">
                          <span>Payable Premium</span>
                          <span>
                            {el.premiumPerYear + (el.premiumPerYear * 18) / 100}
                          </span>
                        </div>
                        <button className="mt-6 w-full px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition duration-300">
                          Proceed to Buy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default PlanDetails;
