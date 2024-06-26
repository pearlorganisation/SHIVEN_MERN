import React, { useState } from "react";
import {
  FaUser,
  FaFemale,
  FaMale,
  FaChild,
  FaUserFriends,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import "tailwindcss/tailwind.css";

const MemberCard = ({ icon: Icon, label, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`p-4 border ${
      isActive ? "border-green-500" : "border-gray-300"
    } rounded-lg flex flex-col items-center cursor-pointer`}
  >
    <Icon
      className={`${isActive ? "text-green-500" : "text-gray-500"} mb-2`}
      size={50}
    />
    <span className={isActive ? "text-green-500" : "text-gray-500"}>
      {label}
    </span>
    {label === "Son" && isActive && (
      <div className="flex mt-2 space-x-2">
        <button className="bg-gray-200 text-gray-700 p-1 rounded-full">
          <FaMinus />
        </button>
        <span className="text-gray-700">1</span>
        <button className="bg-gray-200 text-gray-700 p-1 rounded-full">
          <FaPlus />
        </button>
      </div>
    )}
  </div>
);

const CreateProfile = () => {
  const [activeMember, setActiveMember] = useState(null);

  const members = [
    { label: "Self", icon: FaUser },
    { label: "Wife", icon: FaFemale },
    { label: "Son", icon: FaMale },
    { label: "Daughter", icon: FaChild },
    { label: "Father", icon: FaUserFriends },
    { label: "Mother", icon: FaUserFriends },
    { label: "Grandfather", icon: FaUserFriends },
    { label: "Grandmother", icon: FaUserFriends },
    { label: "Father-in-law", icon: FaUserFriends },
    { label: "Mother-in-law", icon: FaUserFriends },
  ];

  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full text-center">
        <h1 className="text-2xl font-bold mb-4">
          Find top plans for you with up to{" "}
          <span className="text-pink-600">25% discount</span>**
        </h1>
        <div className="flex justify-center mb-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded-l-full">
            Male
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-r-full">
            Female
          </button>
        </div>
        <p className="text-gray-600 mb-4">Select members you want to insure</p>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {members.map((member, index) => (
            <MemberCard
              key={index}
              icon={member.icon}
              label={member.label}
              isActive={activeMember === member.label}
              onClick={() => setActiveMember(member.label)}
            />
          ))}
        </div>
        <button className="text-green-600 mb-4">More members</button>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full">
          Continue
        </button>
      </div>
    </div>
  );
};

export default CreateProfile;
