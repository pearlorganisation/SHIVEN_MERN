import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Stack, Skeleton } from "@mui/material";
import ViewModalWholeLife from "../../../ServicePlans/wholeLifeInsurance/ViewModalWholeLife";


const CustomizedPlans = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const servicePlanData= [1]
  
    const [showViewModal, setShowViewModal] = useState(false);
    const [viewData, setViewData] = useState();

    const handleViewModal=(itemData)=>{
        setShowViewModal(true)
        setViewData(itemData)
      }



  return (
    <div className="userContainer p-10 ">
      <div className="title p-1">
        <h4 className="font-bold text-blue-500 text-sm sm:text-md md:text-lg">
          Customised Plans Listing
        </h4>
    <div className="createEmployeeBtn flex justify-end ">
    <button
            className=" p-2 rounded-lg bg-indigo-600 text-white font-bold tracking-widest"
            onClick={() => {
              navigate("/customisedPlan/addPlan");
            }}
          >
          Add Customised Plan
          </button>
        </div>
      </div>
      <div className="mt-6 shadow-xl rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">ID</th>
              <th className="py-3 px-6">Customised Name</th>
              <th className="py-3 px-6">Clubbed Plans</th>
              <th className="py-3 px-6">Service Provider Included</th>
              <th className="py-3 px-6">Service Type Included</th>
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
              Array.isArray(servicePlanData) &&
              servicePlanData.length > 0 &&
              servicePlanData?.map((item, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap">{idx + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap ">
                  Three Step Insurance
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap ">
                  LIC's New Jeevan Anand <br/> Bajaj Allianz Motor Insurance <br/>SBI General Home Insurance
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap ">
                   LIC<br/> Bajaj Allianz<br/> SBI
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap ">
                   Life Insurance <br/> Motor Insurance<br/> Home Insurance
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
    </div>
  );
};

export default CustomizedPlans;
