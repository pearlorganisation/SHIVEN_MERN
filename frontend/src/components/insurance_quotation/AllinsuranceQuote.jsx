// ---------------------------------------------------Imports---------------------------------------------
import React, { useEffect, useState } from "react";
import { FaCarAlt } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import enqImg from "../../assets/Images/enqImg.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import NormalButtonLoader from "../../common/Loaders/ButtonLoaders/NormalButtonLoader";
import { useSelector, useDispatch } from "react-redux";
import { enquiryMail } from "../../features/actions/Enquiry/enquiryActions";
import { resetEnquiryState } from "../../features/slices/Enquiry/enquirySlice";
// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------

const AllinsuranceQuote = () => {
  // ---------------------------------------------------States---------------------------------------------
  const [activeTab, setActiveTab] = useState("car");
  const [selectedField, setSelectedField] = useState("carNumber");

  const insurance = [
    {
      name: "car",
      field: "carNumber",
      icon: <FaCarAlt size={25} className="text-blue-500" />,
      inputs: [
        { title: "Car Number", field: "carNumber" },
        { title: "Mobile Number", field: "mobileNumber" },
        { title: "Email", field: "email" },
      ],
    },
    {
      name: "bike",
      field: "bikeNumber",
      icon: <FaMotorcycle size={25} className="text-red-500" />,
      inputs: [
        { title: "Bike Number", field: "bikeNumber" },
        { title: "Mobile Number", field: "mobileNumber" },
        { title: "Email", field: "email" },
      ],
    },
    {
      name: "health",
      field: "policyNumber",
      icon: <FaHandHoldingHeart size={25} className="text-green-500" />,
      inputs: [
        { title: "Policy Number", field: "policyNumber" },
        { title: "Mobile Number", field: "mobileNumber" },
        { title: "Email", field: "email" },
      ],
    },
    {
      name: "travel",
      field: "ticketNumber",
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
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(enquiryFormValidationSchema),
  });

  const { isEnquiryLoading, isEnquiryMailSent } = useSelector(
    (state) => state?.enquiry
  );

  // --------------------------------------------------------------------------------------------------------
  // -------------------------------------------------Functions---------------------------------------------
  const handleTabChange = (tabName, field) => {
    setActiveTab(tabName);
    setSelectedField(field);
  };

  const renderInputs = (inputs) => {
    return inputs.map((input, index) => (
      <>
        <input
          key={index}
          type="text"
          placeholder={input?.title}
          className={` ${
            isEnquiryLoading ? "opacity-50" : ""
          } my-2 px-4 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500`}
          {...register(`${input?.field}`)}
          disabled={isEnquiryLoading ? true : false}
        />
        {errors[`${input.field}`] && (
          <p className="text-red-600">{errors[`${input.field}`].message}</p>
        )}
      </>
    ));
  };

  const enquireFormSubmitHandler = (data) => {
    try {
      const enquiryPayload = {
        [selectedField]: data?.[`${selectedField}`],
        email: data?.email,
        mobileNumber: data?.mobileNumber,
      };
      console.log("enquiryPayload", enquiryPayload);
      dispatch(enquiryMail(enquiryPayload));
    } catch (error) {
      toast.error(error.message);
    }
  };
  // --------------------------------------------------------------------------------------------------------
  // -------------------------------------------------useEffect---------------------------------------------
  useEffect(() => {
    if (isEnquiryMailSent) {
      reset();
      dispatch(resetEnquiryState(false));
    }
  }, [isEnquiryMailSent]);
  // --------------------------------------------------------------------------------------------------------

  return (
    <div className="relative grid place-items-center p-10 w-[100vw] h-[100vh]  z-10">
      <img src={enqImg} className="w-full absolute top-0 left-0 h-full" />
      <h1 className="font-bold p-2 italic text-3xl z-10">Enquire</h1>
      <div className="container mx-auto border w-[40%] min-w-[350px] p-4 bg-white rounded z-10">
        <div className="grid grid-cols-4 gap-4 z-10">
          {insurance.map((el, i) => (
            <div
              key={i}
              onClick={() => handleTabChange(el.name, el.field)}
              className={` z-10 flex flex-col items-center justify-center cursor-pointer p-4 border rounded-md ${
                activeTab === el.name ? "bg-blue-100" : ""
              } 
            `}
            >
              <div className="mb-2 z-10">{el.icon}</div>
              <h1 className="text-center text-[#666666]">{el.name}</h1>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <form onSubmit={handleSubmit(enquireFormSubmitHandler)}>
            {renderInputs(
              insurance.find((ins) => ins.name === activeTab)?.inputs
            )}
            <div className="text-center">
              {isEnquiryLoading ? (
                <button className="mt-4 bg-[var(--primary-color)] text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 relative h-[40px]">
                  <NormalButtonLoader />
                </button>
              ) : (
                <button
                  type="submit"
                  className="mt-4 bg-[var(--primary-color)] text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Enquire
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AllinsuranceQuote;
