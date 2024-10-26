import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllServices } from '../../../features/actions/Service/service';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Stack,Skeleton } from '@mui/material';

const ViewServices = () => {
  const dispatch= useDispatch();
  const navigate = useNavigate();
  const { loggedInUserData } = useSelector((state) => state.auth);
  const {serviceData,isLoading } = useSelector(state => state.service)

  useEffect(()=>{
    dispatch(getAllServices())
  
  },[])

  return (
    <div className="userContainer p-10 ">
      <div className="title p-1">
        <h4 className="font-bold text-blue-500 text-sm sm:text-md md:text-lg">
          Service Listing
        </h4>
       { loggedInUserData.role === "0" && <div className="createEmployeeBtn flex justify-end p-4 ">
          <button
            className=" p-2 rounded-lg bg-indigo-600 text-white font-bold tracking-widest"
            onClick={() => {
              navigate("/admin/addService");
            }}
          >
            Add New Service
          </button>
        </div>}
      </div>
      <div className="mt-6 shadow-xl rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                <tr>
                  <th className="py-3 px-6">ID</th>
                  <th className="py-3 px-6">Service Type </th>
                  <th className="py-3 px-6">Logo </th>
                  <th className="py-3 px-6">Description </th>
           
                  { loggedInUserData.role === "0" && <th className="py-3 px-6" colSpan={1}>Actions</th>}
                
                  
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y">
              {isLoading ? (
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
                 Array.isArray(serviceData) && serviceData.length > 0 && serviceData?.map((item, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 whitespace-nowrap">{idx+1}</td>
                      <td className="px-6 py-4 whitespace-nowrap ">
                        {item?.serviceType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap ">
                        <img src={item?.logo} className='rounded-lg w-24 h-20' />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap truncate max-w-56 ">
                        {item?.serviceDescription}
                      </td>
                    
                 
                      
                     
                  {  loggedInUserData.role === "0" &&   <td className=" whitespace-nowrap py-3 px-6">
                        <a
                          // onClick={() => {
                          //   navigate(`/updateDessert/${item?._id}`, { state: item  });
                          // }}
                          className="cursor-pointer py-2 px-3 font-semibold text-green-600 hover:text-green-700 duration-150 hover:bg-gray-50 rounded-lg"
                        >
                          Edit
                        </a>
                        <a
                          // onClick={() => {
                          //   navigate(`/updateDessert/${item?._id}`, { state: item  });
                          // }}
                          className="cursor-pointer py-2 px-3 font-semibold text-red-600 hover:text-red-700 duration-150 hover:bg-gray-50 rounded-lg"
                        >
                          Delete
                        </a>
                      </td>}
                    </tr>
                  ))
                
                )}
              </tbody>
            </table>
          </div>
    </div>
  )
}

export default ViewServices