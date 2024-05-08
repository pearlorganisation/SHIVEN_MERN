import React, { useState } from "react";
import { FaCarAlt } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";

const AllinsuranceQuote = () => {
  const [activeTab, setActiveTab] = useState("car");

  const insurance = [
    {
      name: "car",
      icon: <FaCarAlt size={25} className="text-blue-500" />,
      inputs: ["Car Number", "Mobile Number", "Email"],
    },
    {
      name: "bike",
      icon: <FaMotorcycle size={25} className="text-red-500" />,
      inputs: ["Bike Number", "Mobile Number", "Email"],
    },
    {
      name: "health",
      icon: <FaHandHoldingHeart size={25} className="text-green-500" />,
      inputs: ["Policy Number", "Mobile Number", "Email"],
    },
    {
      name: "travel",
      icon: <GiCommercialAirplane size={25} className="text-yellow-400" />,
      inputs: ["Ticket Number", "Mobile Number", "Email"],
    },
  ];

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const renderInputs = (inputs) => {
    return inputs.map((input, index) => (
      <input
        key={index}
        type="text"
        placeholder={input}
        className="my-2 px-4 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
      />
    ));
  };

  return (
    <div className="min-h-screen grid place-items-center bg-[#9fc1df]">
      <div className="container mx-auto border max-w-3xl p-4 bg-white rounded">
        <div className="grid grid-cols-4 gap-4">
          {insurance.map((el, i) => (
            <div
              key={i}
              onClick={() => handleTabChange(el.name)}
              className={`flex flex-col items-center justify-center cursor-pointer p-4 border rounded-md ${
                activeTab === el.name ? "bg-blue-100" : ""
              } 
            `}
            >
              <div className="mb-2">{el.icon}</div>
              <h1 className="text-center text-[#666666]">{el.name}</h1>
            </div>
          ))}
        </div>

        <div className="mt-4">
          {renderInputs(
            insurance.find((ins) => ins.name === activeTab)?.inputs
          )}
        </div>

        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Get Quote
        </button>
      </div>
    </div>
  );
};

export default AllinsuranceQuote;
