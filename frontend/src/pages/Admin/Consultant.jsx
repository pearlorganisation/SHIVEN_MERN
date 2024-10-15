// -----------------------------------------------------Imports------------------------------------------------
import React from "react";
// import UsersTable from "../../../components/Table/UsersTable/UsersTable";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UsersTable from "../../components/Table/UsersTable/UsersTable";
// ------------------------------------------------------------------------------------------------------------

const Consultant = () => {
  const { loggedInUserData } = useSelector((state) => state.auth);

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
        {    loggedInUserData.role === "0" ? "Consultant Listing" : "Client Listing" }  
        </h4>
        <div className="createEmployeeBtn flex justify-end p-4 ">
          <button
            className=" p-2 rounded-lg bg-indigo-600 text-white font-bold tracking-widest"
            onClick={() => {
              navigate("/users/create-user");
            }}
          >
           {    loggedInUserData.role === "0" ? "Create a new consultant" : "Create a new client" }  
          </button>
        </div>
      </div>
      <UsersTable />
      
    </div>
  );
};

export default Consultant;
