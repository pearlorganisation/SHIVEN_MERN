// ------------------------------------------------Imports---------------------------------------------
import React from "react";
import { FaHeart, FaTachometerAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
// -----------------------------------------------------------------------------------------------------

const InsuranceProvider = () => {
  // ------------------------------------------------States---------------------------------------------

  // -----------------------------------------------------------------------------------------------------
  // ------------------------------------------------Hooks---------------------------------------------
  const params = useParams();
  // -----------------------------------------------------------------------------------------------------

  const urlCreator = (insuranceCategory) => {
    return `/health-insurance/${params?.insuranceProvider}/${insuranceCategory}/enquiry`;
  };

  const insuranceTypeArray = [
    {
      title: "Health AdvantEdge",
      icon: () => {
        return <FaHeart size={50} className="text-red-500" />;
      },
      path: urlCreator("health-advantedge"),
    },
    {
      title: "Max Protect",
      icon: () => {
        return <FaTachometerAlt size={50} className="text-orange-500" />;
      },
      path: urlCreator("max-protect"),
    },
    {
      title: "Health AdvantEdge",
      icon: () => {
        return <FaHeart size={50} />;
      },
      path: urlCreator("health-advantedge"),
    },
    {
      title: "Health AdvantEdge",
      icon: () => {
        return <FaHeart size={50} />;
      },
      path: urlCreator("health-advantedge"),
    },
  ];
  // -----------------------------------------------------------------------------------------------------

  return (
    <div>
      <h1 className="mt-10 p-5 pb-0 text-xl">Choose the Insurance Service</h1>
      <div
        class="mt-8 grid grid-cols-2 p-5 gap-6 md:grid-cols-4"
        id="frameworks-integration"
      >
        {insuranceTypeArray.map((type) => {
          return (
            <Link
              class="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25"
              to={type?.path}
            >
              <span class="my-6 grid h-24 w-24 place-items-center justify-center">
                {type?.icon()}
                <h3 className="text-center">{type?.title}</h3>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default InsuranceProvider;
