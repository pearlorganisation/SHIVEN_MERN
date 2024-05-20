// ---------------------------------------------------Imports---------------------------------------------
import React, { useState } from "react";
import { FaCarAlt } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import enqImg from "../../assets/Images/enqImg.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------

const AllinsuranceQuote = () => {
  // ---------------------------------------------------States---------------------------------------------
  const [activeTab, setActiveTab] = useState("car");
  const insurance = [
    {
      name: "car",
      icon: <FaCarAlt size={25} className="text-blue-500" />,
      inputs: [
        { title: "Car Number", field: "carNumber" },
        { title: "Mobile Number", field: "mobileNumber" },
        { title: "Email", field: "email" },
      ],
    },
    {
      name: "bike",
      icon: <FaMotorcycle size={25} className="text-red-500" />,
      inputs: [
        { title: "Bike Number", field: "bikeNumber" },
        { title: "Mobile Number", field: "mobileNumber" },
        { title: "Email", field: "email" },
      ],
    },
    {
      name: "health",
      icon: <FaHandHoldingHeart size={25} className="text-green-500" />,
      inputs: [
        { title: "Policy Number", field: "policyNumber" },
        { title: "Mobile Number", field: "mobileNumber" },
        { title: "Email", field: "email" },
      ],
    },
    {
      name: "travel",
      icon: <GiCommercialAirplane size={25} className="text-yellow-400" />,
      inputs: [
        { title: "Ticket Number", field: "ticketNumber" },
        { title: "Mobile Number", field: "mobileNumber" },
        { title: "Email", field: "email" },
      ],
    },
  ];

  const enquiryFormValidationSchema = yup.object().shape({
    mobileNumber: yup
      .string()
      .matches(/^[0-9]{10}$/, "Mobile Number must be of 10 digits")
      .required("Mobile Number is a required field"),
    email: yup
      .string()
      .email("Invalid Email")
      .required("Email is a required field"),
  });
  // --------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------Hooks---------------------------------------------

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(enquiryFormValidationSchema),
  });

  // --------------------------------------------------------------------------------------------------------
  // -------------------------------------------------Functions---------------------------------------------

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const renderInputs = (inputs) => {
    return inputs.map((input, index) => (
      <>
        <input
          key={index}
          type="text"
          placeholder={input?.title}
          className="my-2 px-4 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          {...register(`${input?.field}`)}
        />
        {errors[`${input.field}`] && (
          <p className="text-red-600">{errors[`${input.field}`].message}</p>
        )}
      </>
    ));
  };
  // --------------------------------------------------------------------------------------------------------
  // -------------------------------------------------useEffect---------------------------------------------
  // --------------------------------------------------------------------------------------------------------

  return (
    <div className="relative grid place-items-center p-10 w-[100vw]">
      <img src={enqImg} className="w-full absolute -z-10 top-0 left-0 h-full" />
      <h1 className="font-bold p-2 italic text-3xl">Enquire</h1>

      <div className="container mx-auto border w-[40%] min-w-[350px] p-4 bg-white rounded">
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
          <form onSubmit={handleSubmit(() => {})}>
            {renderInputs(
              insurance.find((ins) => ins.name === activeTab)?.inputs
            )}
            <div className="text-center">
              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Enquire
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AllinsuranceQuote;
