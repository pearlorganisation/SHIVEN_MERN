// -----------------------------------------------------Imports------------------------------------------------
import React from "react";
import { useNavigate } from "react-router-dom";
import InsuranceServiceProvidersTable from "../../../components/Table/InsuranceServiceProvidersTable/InsuranceServiceProvidersTable";
// ------------------------------------------------------------------------------------------------------------

const InsuranceServiceProviders = () => {
  // -----------------------------------------------------States---------------------------------------------
  // ---------------------------------------------------------------------------------------------------------
  // -----------------------------------------------------Hooks---------------------------------------------
  const navigate = useNavigate();
  // ---------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------Functions---------------------------------------------
  // ---------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------useEffect---------------------------------------------
  // ---------------------------------------------------------------------------------------------------------
  return (
    <div className="userContainer p-10 ">
      <div className="title p-1">
        <h4 className="font-bold text-blue-500 text-sm sm:text-md md:text-lg">
          Insurance Service Providers Listing
        </h4>
        <div className="createEmployeeBtn flex justify-end p-4 ">
          <button
            className=" p-2 rounded-lg bg-indigo-600 text-white font-bold tracking-widest"
            onClick={() => {
              navigate(
                "/insurances/insurance-service-providers/create-insurance-service-provider"
              );
            }}
          >
            Create Insurance Service Provider
          </button>
        </div>
      </div>
      <InsuranceServiceProvidersTable />
    </div>
  );
};

export default InsuranceServiceProviders;
