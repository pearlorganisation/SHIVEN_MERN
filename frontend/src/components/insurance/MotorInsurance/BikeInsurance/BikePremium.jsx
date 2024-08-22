import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaSave } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";
const BikePremium = () => {
  const navigate = useNavigate();
  const [registrationNumber, setRegistrationNumber] = useState("MH12AB1234");
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = () => {
    navigate("/bikeInsuranceDetails");
  };

  const handleRegistrationChange = (e) => {
    setRegistrationNumber(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Implement any save logic here, such as updating the backend or local state
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

  const bikeIcon = "https://path-to-bike-icon.png"; // Placeholder URL for bike icon

  return (
    <>
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-5">
        {/* Flexbox Container for Bike Info and Insurance Cards */}

        <div className="flex flex-col sm:flex-row items-start">
          {/* Bike Icon and Editable Registration Number Div */}
          <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg mb-6 sm:mb-0 sm:mr-6">
            <RiMotorbikeFill size={50} className="text-blue-600" />
            <div className="flex items-center">
              <div>
                <p className="text-gray-800 font-medium text-sm sm:text-base text-center sm:text-left">
                  Registration No
                </p>
                <div className="relative flex items-center mt-2">
                  <input
                    type="text"
                    value={registrationNumber}
                    onChange={handleRegistrationChange}
                    className="text-xl font-semibold text-gray-800 border rounded-md px-2 py-1 pr-10"
                    disabled={!isEditing}
                  />
                  {!isEditing && (
                    <FaEdit
                      className="absolute right-2 text-gray-500 cursor-pointer"
                      onClick={handleEditClick}
                    />
                  )}
                </div>
              </div>
            </div>
            {isEditing && (
              <button
                onClick={handleSaveClick}
                className="mt-3 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md flex items-center"
              >
                <FaSave className="mr-2" />
                Save
              </button>
            )}
          </div>

          {/* Insurance Plans Cards */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              12 Insurance Plans Available
            </h2>
            <p className="text-gray-600 mb-4 text-center">
              Covers damages to your vehicle only and not third-party
            </p>
            <p></p>
            {bikeData.map((el, id) => {
              return (
                <div
                  key={id}
                  className="max-w-3xl bg-white p-6 py-10 mt-2 shadow-lg rounded-lg mx-auto"
                  onClick={handleChange}
                >
                  <div className="p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between">
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
        </div>
      </div>
    </>
  );
};

export default BikePremium;
