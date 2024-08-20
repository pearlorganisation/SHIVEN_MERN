import React from "react";
import { useNavigate } from "react-router-dom";

const BikePremium = () => {
  const navigate = useNavigate();
  const handelChange = () => {
    navigate("/bikeInsuranceDetails");
  };

  const bikeData = [
    {
      img: "https://static.pbcdn.in/twowheeler-cdn/InsurerImages/HDFC_ERGO.gif?v=1",
      idv: "53,782",
      Claimssettled: "99",
      premiumPrice: "484",
    },

    {
      img: "https://static.pbcdn.in/twowheeler-cdn/InsurerImages/HDFC_ERGO.gif?v=1",
      idv: "53,782",
      Claimssettled: "99",
      premiumPrice: "484",
    },

    {
      img: "https://static.pbcdn.in/twowheeler-cdn/InsurerImages/HDFC_ERGO.gif?v=1",
      idv: "53,782",
      Claimssettled: "99",
      premiumPrice: "484",
    },

    {
      img: "https://static.pbcdn.in/twowheeler-cdn/InsurerImages/HDFC_ERGO.gif?v=1",
      idv: "53,782",
      Claimssettled: "99",
      premiumPrice: "484",
    },
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
          12 Insurance Plans Available
        </h2>
        <p className="text-gray-600 mb-4 text-center">
          Covers damages to your vehicle only and not third-party
        </p>
        {bikeData.map((el, id) => {
          return (
            <div
              key={id}
              className="max-w-3xl mx-auto bg-white p-6 py-10 mt-2 shadow-lg rounded-lg"
              onClick={handelChange}
            >
              <div className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center mb-4 sm:mb-0">
                  <img
                    src={el.img}
                    alt="Insurance"
                    className="mr-4 w-24 h-12 sm:w-30 sm:h-10"
                  />
                  <div>
                    <p className="text-gray-800 font-medium text-sm sm:text-base">
                      IDV
                    </p>
                    <p className="text-xl font-semibold text-gray-800">
                      {el.idv}
                    </p>
                  </div>
                </div>
                <div className="text-center mb-4 sm:mb-0">
                  <p className="text-gray-800 font-medium text-sm sm:text-base">
                    Claims Settled
                  </p>
                  <p className="text-xl font-semibold text-gray-800">
                    {el.Claimssettled}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600">
                    ₹{el.premiumPrice}
                  </p>

                  <a
                    href="#"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    →
                  </a>
                </div>
              </div>

              <div className="mt-4 p-4 bg-green-100 rounded-lg flex items-center">
                <svg
                  className="w-6 h-6 text-green-700 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <div>
                  <p className="text-gray-700 mt-1">Zero Depreciation</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BikePremium;
