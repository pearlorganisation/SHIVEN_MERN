import React, {useEffect, useState } from 'react'

import { Stack,Skeleton } from '@mui/material';


const AddPlans = () => {

    const servicePlanData= [1,2,3,4,5,6,7,8,9,10]

    const [selectButton, setSelectButton] = useState([]);
      const [showViewModal, setShowViewModal] = useState(false);
      const [viewData, setViewData] = useState();
  
      const handleViewModal=(itemData)=>{
          setShowViewModal(true)
          setViewData(itemData)
        }

  useEffect(()=>{
console.log(selectButton)
  },[selectButton])
    return (
      <div className="userContainer py-5 px-10 ">
      <div className="title flex justify-between">
          <h4 className="font-bold text-blue-500 text-sm sm:text-md md:text-lg">
          All Plans Listing
          </h4>
          <div className="createEmployeeBtn  ">
  
  {   selectButton.length > 0 &&     <button
            className=" p-2 rounded-lg bg-indigo-600 text-white font-bold tracking-widest"
          >
           Add Selected Plans
          </button>}
          </div>
        </div>
        <div className="mt-6 shadow-xl rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6"></th>
                <th className="py-3 px-6">ID</th>
                <th className="py-3 px-6">Plan Name</th>
                <th className="py-3 px-6">Service Provider</th>
                <th className="py-3 px-6">Service Type</th>
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
                    <td className="px-6 py-4 whitespace-nowrap">
                        <input onChange={(e)=>{ 
                            if(e.target.checked)
                                { return setSelectButton(prev=>[...prev,idx])}
                            else {
                               return setSelectButton(prev=>prev.filter(item => item !== idx))
                            }
                            }} type='checkbox' className='rounded-sm'/></td>
                    <td className="px-6 py-4 whitespace-nowrap">{idx + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap ">
                    LIC's New Jeevan Anand
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap ">
                     LIC
                    </td>
  
                    <td className="px-6 py-4 whitespace-nowrap truncate max-w-56 ">
                    {item % 2 === 0 ? "Health Insurance" : "Life Insurance"} 
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

export default AddPlans