import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getConsultantWithPopulated } from "../../../../features/actions/Auth/userActions";

const Services = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedInUserData } = useSelector((state) => state.auth);
  const { consultants } = useSelector((state) => state.user);

  let getAllOptedServices = []


if( consultants?.servicePlan && Array.isArray(consultants.servicePlan) && loggedInUserData.role == "1")
    {  
      const seenServiceNames = new Set(); // To track unique serviceProviderName
      getAllOptedServices = consultants.servicePlan
      .filter((item) => {
        const serviceName = item?.serviceType?.serviceType;
        if (serviceName && !seenServiceNames.has(serviceName)) {
          seenServiceNames.add(serviceName); // Add to set if not already present
          return true;
        }
        return false;
      })
      .map((item) => ({
 ...item?.serviceType
      }));
  }


    useEffect(() => {
      dispatch(getConsultantWithPopulated(loggedInUserData?._id))
    }, []);

  return (
    <div className="userContainer p-10 ">
      <div className="title p-1">
        <h4 className="font-bold text-blue-500 text-sm sm:text-md md:text-lg">
          Service Listing
        </h4>
        <div className="createEmployeeBtn flex justify-end p-4 ">

        </div>
      </div>
      <div className="mt-6 shadow-xl rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">ID</th>
              <th className="py-3 px-6">Service Type </th>
              <th className="py-3 px-6">Service Logo </th>
              <th className="py-3 px-6">Service Description </th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {
              Array.isArray(getAllOptedServices) &&
              getAllOptedServices.length > 0 ?
              getAllOptedServices?.map((item, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap">{idx + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap ">
                    {item?.serviceType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap ">
                  <img src={item?.logo?.secure_url} className='rounded-lg w-24 h-20' />
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap truncate max-w-56 ">
                    {item?.serviceDescription}
                  </td>

                  <td className=" py-4 whitespace-nowrap">
                    <button
                      onClick={() => {
                        navigate(`/plans/${item?.serviceType}`)
                      }}
                      className="py-2 leading-none px-3 font-semibold text-yellow-500 hover:text-yellow-600 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      View Plans
                    </button>
                  </td>
                </tr>
              )): <div className="text-center py-2 font-semibold">No Service Added</div>
            }
          </tbody>
        </table>
      </div>
      {/* {showViewModal && (
        <ServiceProviderModal setModal={setShowViewModal} viewData={viewData} />
      )} */}
    </div>
  );
};

export default Services;
