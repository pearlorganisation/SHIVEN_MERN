// -----------------------------------------------------Imports------------------------------------------------
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Skeleton, Stack } from "@mui/material";
// ------------------------------------------------------------------------------------------------------------

export const ViewConsultants = () => {
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
        Consultant Account Approval
        </h4>
       {/* { loggedInUserData.role === "0" && <div className="createEmployeeBtn flex justify-end p-4 ">
          <button
            className=" p-2 rounded-lg bg-indigo-600 text-white font-bold tracking-widest"
            onClick={() => {
              navigate("/admin/addService");
            }}
          >
            Add New Service
          </button>
        </div>} */}
      </div>
      <div className="mt-6 shadow-xl rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                <tr>
                  <th className="py-3 px-6">ID</th>
                  <th className="py-3 px-6">Email</th>
                  <th className="py-3 px-6">Services </th>
                  <th className="py-3 px-6">Razorpay Payment Id</th>

                <th className="py-3 px-6" colSpan={1}>Actions</th>
                
                  
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y">
              {false ? (
              <tr>
              <td colSpan="6" className="text-center px-6 py-8">
                <Stack spacing={4}>
                  <Skeleton variant="rounded" height={30} />
                  <Skeleton variant="rounded" height={25}/>
                  <Skeleton variant="rounded" height={20}/>
                  <Skeleton variant="rounded" height={20}/>
                  <Skeleton variant="rounded" height={20}/>
                </Stack>
              </td>
            </tr>
            ) : (
                //  Array.isArray(serviceData) && serviceData.length > 0 && serviceData?.map((item, idx) => (
                //     <tr key={idx}>
                //       <td className="px-6 py-4 whitespace-nowrap">{idx+1}</td>
                //       <td className="px-6 py-4 whitespace-nowrap ">
                //         {item?.serviceType}
                //       </td>
                //       <td className="px-6 py-4 whitespace-nowrap ">
                //        <img src={item?.logo?.secure_url} className='rounded-lg w-24 h-20' />
                //       </td>
                //       <td className="px-6 py-4 whitespace-nowrap truncate max-w-56 ">
                //         {item?.serviceDescription}
                //       </td>
                    
                 
                      
                     
                //   {  loggedInUserData.role === "0" &&   <td className=" whitespace-nowrap py-3 px-6">
                  
                //         <a
                //           onClick={() => {
                //             navigate(`/admin/updateService/${item?._id}`, { state: item  });
                //           }}
                //           className="cursor-pointer py-2 px-3 font-semibold text-green-600 hover:text-green-700 duration-150 hover:bg-gray-50 rounded-lg"
                //         >
                //           Edit Description/Logo
                //         </a>
                //         <a
                //           onClick={() => {
                //             navigate(`/servicePlan/${item?.serviceType}`);
                //           }}
                //           className="cursor-pointer py-2 px-3 font-semibold text-blue-600 hover:text-blue-700 duration-150 hover:bg-gray-50 rounded-lg"
                //         >
                //           Create Plan
                //         </a>
                //         {/* <a
                //           // onClick={() => {
                //           //   navigate(`/updateDessert/${item?._id}`, { state: item  });
                //           // }}
                //           className="cursor-pointer py-2 px-3 font-semibold text-red-600 hover:text-red-700 duration-150 hover:bg-gray-50 rounded-lg"
                //         >
                //           Delete
                //         </a> */}
                //       </td>}
                //     </tr>
                //   ))
                <div></div>
                
                )}
              </tbody>
            </table>
          </div>
    </div>
  )
};




