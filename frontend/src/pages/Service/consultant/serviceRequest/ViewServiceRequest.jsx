import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Stack, Skeleton } from "@mui/material";
import ReplyModal from "./ReplyModal";

const ViewServiceRequest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const servicePlanData = [1]
  //   const { servicePlanData, isLoading } = useSelector(
  //     (state) => state.servicePlan
  //   );

    const [showViewModal, setShowViewModal] = useState(false);
    const [viewData, setViewData] = useState();

    const handleViewModal = (itemData) => {
      setShowViewModal(true);
      setViewData(itemData);
    };

  //   useEffect(() => {
  //     dispatch(getAllServicePlans());
  //   }, []);

  return (
    <div className="userContainer p-10 ">
      <div className="title p-1">
        <h4 className="font-bold text-blue-500 text-sm sm:text-md md:text-lg">
          Client Service Requests
        </h4>
        {/* <div className="createEmployeeBtn flex justify-end p-4 ">
   
        </div> */}
      </div>
      <div className="mt-6 shadow-xl rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">ID</th>
              <th className="py-3 px-6">Service Request No. </th>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Service Plan </th>
              <th className="py-3 px-6">Message</th>
              {/* <th className="py-3 px-6">Cover </th> */}

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
                    12234
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap ">
                   Avnish
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap truncate max-w-56 ">
                    avnish@pearlorganisation.com
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap truncate max-w-56 ">
                    Jeevan Jyoti plan
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap truncate max-w-56 ">
                    plan is not showing properly
                  </td>

                  <td className=" whitespace-nowrap">

                    <button
                      onClick={() => {
                        handleViewModal(item);
                      }}
                      className="py-2 leading-none px-3 font-semibold text-green-500 hover:text-green-600 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                     View and Reply Request
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {showViewModal && (
        <ReplyModal setModal={setShowViewModal} viewData={viewData} />
      )}
    </div>
  );
};

export default ViewServiceRequest;
