// -----------------------------------------------------Imports------------------------------------------------
import React from "react";
import UsersTable from "../../../components/Table/UsersTable/UsersTable";
// ------------------------------------------------------------------------------------------------------------

const User = () => {
  // -----------------------------------------------------States---------------------------------------------
  // ---------------------------------------------------------------------------------------------------------
  return (
    <div className="userContainer p-10 ">
      <div className="title p-1">
        <h4 className="font-bold text-blue-500 text-sm sm:text-md md:text-lg">
          Users Listing
        </h4>
        <div className="createEmployeeBtn flex justify-end p-4 ">
          <button className=" p-2 rounded-lg bg-indigo-600 text-white font-bold tracking-widest">
            Create User
          </button>
        </div>
      </div>
      <UsersTable />
    </div>
  );
};

export default User;
