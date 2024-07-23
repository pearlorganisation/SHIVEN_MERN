import { useEffect } from "react";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import Filter from "./Filter";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Enquiry from "./Enquiry";
import { getAllServicePlans } from "../../features/actions/Service/servicePlan";

const HealthPremium = () => {
  const { servicePlanData } = useSelector((state) => state?.servicePlan);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServicePlans());
  }, []);

  console.log(servicePlanData, " premium plan data");


  const navigate = useNavigate("");
  return (
    <>
      {" "}
      <div className="container mx-auto max-w-5xl p-5">
        <Filter />
      </div>
      <div className="space-y-4 p-4 md:p-10">
        {servicePlanData.map((el, id) => (
          <div
            key={el.id}
            className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0"
          >
            <img
              className="w-16 h-16 object-cover rounded-full bg-center"
              src={el?.serviceProvider?.logo}
              alt={el.name}
            />

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl font-semibold">
                {el.serviceProvider.serviceProviderName}
              </h2>
              <p className="text-gray-500">{el.serviceName}</p>
              <div className="flex flex-wrap justify-center md:justify-start items-center space-x-2 mt-2">
                <span className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {}
                </span>

                {el.mainPoints.map((item, id) => {
                  return (
                    <span className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      {item}
                    </span>
                  );
                })}
              </div>

              {/* Add some space */}
              <div className="mt-2"></div>

              <div className="mt-2">
                <a
                  href="#"
                  className="text-red-500 flex items-center justify-center md:justify-start"
                >
                  <span>View Features</span>
                  <FaInfoCircle className="ml-1" />
                </a>
              </div>
            </div>

            <div className="text-right md:text-center w-full md:w-auto">
              <p className="text-gray-500 text-sm">COVER</p>
              <p className="text-xl font-semibold">{el.coverAmount}</p>
            </div>

            <div className="text-right md:text-center w-full md:w-auto">
              <p className="text-red-500 text-xl font-bold">
                {el.premiumPerMonth}/Month
              </p>
              <p className="text-gray-500">{el.premiumPerYear}/Year</p>
            </div>

            <div className="text-center w-full md:w-auto">
              <p className="text-gray-500 text-sm">Claim Settlement Ratio</p>
              <p className="text-xl font-semibold flex items-center justify-center">
                {el.claimSettlementRatio}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Enquiry />
    </>
  );
};

export default HealthPremium;
