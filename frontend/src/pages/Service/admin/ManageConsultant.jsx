// -----------------------------------------------------Imports------------------------------------------------
import React from "react";
import ConsultantTable from "../../../components/Table/UsersTable/ConsultantTable";
// ------------------------------------------------------------------------------------------------------------

const ManageConsultant = () =>{

  return (
    <div className="userContainer p-10 ">
      <div className="title p-1">
        <h4 className="font-bold text-blue-500 text-sm sm:text-md md:text-lg">
      Manage Consultants
        </h4>
      </div>
      <ConsultantTable name="Consultants" />
    </div>
  );
};

export default ManageConsultant;
