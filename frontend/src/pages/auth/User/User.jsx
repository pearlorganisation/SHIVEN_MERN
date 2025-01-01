// -----------------------------------------------------Imports------------------------------------------------
import React from "react";
import { useNavigate } from "react-router-dom";
import ClientTable from "../../../components/Table/UsersTable/ClientTable";
// ------------------------------------------------------------------------------------------------------------

const User = () => {
  const navigate = useNavigate();

  return (
    <div className="userContainer p-10 ">
      <div className="title p-1">
        <h4 className="font-bold text-blue-500 text-sm sm:text-md md:text-lg">
      Client Listing 
        </h4>
        <div className="createEmployeeBtn flex justify-end p-4 ">
          <button
            className=" p-2 rounded-lg bg-indigo-600 text-white font-bold tracking-widest"
            onClick={() => {
              navigate("/users/create-user");
            }}
          >
 Create a new client
          </button>
        </div>
      </div>
      <ClientTable />
    </div>
  );
};

export default User;
