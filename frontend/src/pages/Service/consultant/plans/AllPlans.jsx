import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Stack, Skeleton } from "@mui/material";
import ViewModalWholeLife from "../../../ServicePlans/wholeLifeInsurance/ViewModalWholeLife";
import ViewModalHomeLoan from "../../../ServicePlans/homeLoan/ViewModalHomeLoan";
import HealthModal from "../../../ServicePlans/healthInsurance/HealthModal";
import ViewModalMutual from "../../../ServicePlans/mutualFund/ViewModalMutual";
import ViewModalVehicleLoan from "../../../ServicePlans/vehicleLoan/ViewModalVehicleLoan";


const AllPlans = () => {
  const navigate = useNavigate();
  const {name} = useParams()
  const { loggedInUserData } = useSelector((state) => state.auth);
  const [showViewModal, setShowViewModal] = useState(false);
  const [viewData, setViewData] = useState();
  const { consultants } = useSelector((state) => state.user);

    let particularPlans= []
    if (
      consultants.servicePlan &&
      Array.isArray(consultants.servicePlan) &&
      loggedInUserData.role == "1"
    ) {
      particularPlans = consultants.servicePlan
        .filter((item) => {
         return item?.serviceType?.serviceType === name
        })  
    }


    const handleViewModal=(itemData)=>{
        setShowViewModal(true)
        setViewData(itemData)
      }

  return (
    <div className="userContainer p-10 ">
    <div className="title p-1">
        <h4 className="font-bold text-blue-500 text-sm sm:text-md md:text-lg">
        {name} Listing
        </h4>
        {/* <div className="createEmployeeBtn flex justify-end p-4 ">
  {loggedInUserData?.role === "1" &&        <button
            className=" p-2 rounded-lg bg-indigo-600 text-white font-bold tracking-widest"
            onClick={() => {
              navigate("/consultant/addPlan");
            }}
          >
           Add Plans
          </button>}

        </div> */}
      </div>
      <div className="mt-6 shadow-xl rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">ID</th>
              <th className="py-3 px-6">Plan Name</th>
              <th className="py-3 px-6">Service Provider</th>
              <th className="py-3 px-6">Service Type</th>
              <th className="py-3 px-6">Logo</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {false ? (
              <tr>
                <td colSpan="7" className="text-center px-6 py-8">
                  <Stack spacing={4}>
                    <Skeleton variant="rounded" height={30} />
                    <Skeleton variant="rounded" height={25} />
                    <Skeleton variant="rounded" height={20} />
                    <Skeleton variant="rounded" height={20} />
                    <Skeleton variant="rounded" height={20} />
                  </Stack>
                </td>
              </tr>
            ) : (
              Array.isArray(particularPlans) &&
              particularPlans.length > 0 &&
              particularPlans?.map((item, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap">{idx + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap ">
                  {item?.planName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap ">
                 {item?.serviceProvider?.serviceProviderName}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap truncate max-w-56 ">
                   {name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap truncate max-w-56 ">
                  <img src={item?.serviceProvider?.logo?.secure_url} className='rounded-lg w-24 h-20' />
                   
                  </td>
    

                  <td className=" whitespace-nowrap">

                    <button
                      onClick={() => {
                        handleViewModal(item);
                      }}
                      className="py-2 leading-none px-3 font-semibold text-green-500 hover:text-green-600 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                     View Plan Details
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {showViewModal && name === "Life Insurance" && (
        <ViewModalWholeLife setModal={setShowViewModal} viewData={viewData} />
      )}
      {showViewModal && name === "Home Loan" && (
        <ViewModalHomeLoan setModal={setShowViewModal} viewData={viewData} />
      )}
      {showViewModal && name === "Health Insurance" && (
        <HealthModal setModal={setShowViewModal} viewData={viewData} />
      )}
      {showViewModal && name === "Mutual Fund" && (
        <ViewModalMutual setModal={setShowViewModal} viewData={viewData} />
      )}
      {showViewModal && name === "Vehicle Loan" && (
        <ViewModalVehicleLoan setModal={setShowViewModal} viewData={viewData} />
      )}
     
   
    </div>
  );
};

export default AllPlans;
