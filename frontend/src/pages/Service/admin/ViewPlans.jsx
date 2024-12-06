import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { Stack,Skeleton } from '@mui/material';
import { getAllServicePlans } from '../../../features/actions/Service/servicePlan';
import ViewModalWholeLife from '../../ServicePlans/wholeLifeInsurance/ViewModalWholeLife';
import ViewModalHomeLoan from '../../ServicePlans/homeLoan/ViewModalHomeLoan';
import HealthModal from '../../ServicePlans/healthInsurance/HealthModal';
import ViewModalMutual from '../../ServicePlans/mutualFund/ViewModalMutual';
import ViewModalVehicleLoan from '../../ServicePlans/vehicleLoan/ViewModalVehicleLoan';


const ViewPlans = () => {
  const dispatch= useDispatch();
  const {servicePlanData,isLoading } = useSelector(state => state.servicePlan)
  const [showViewModal, setShowViewModal] = useState(false);
  const [viewData, setViewData] = useState();
  const [name,setName]= useState()

  const handleViewModal=(itemData)=>{
    setShowViewModal(true)
    setViewData(itemData)
  }
  const { loggedInUserData } = useSelector((state) => state.auth);

  useEffect(()=>{
    dispatch(getAllServicePlans())
  },[])

  return (
    <div className="userContainer p-10 ">
      <div className="title p-1">
        <h4 className="font-bold text-blue-500 text-sm sm:text-md md:text-lg">
          Company Plan Listing
        </h4>

      </div>
      <div className="mt-6 shadow-xl rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                <tr>
                  <th className="py-3 px-6">ID</th>
                  <th className="py-3 px-6">Plan Name</th>
                  <th className="py-3 px-6">Service Provider </th>
                  <th className="py-3 px-6">Service </th>
                  <th className="py-3 px-6">Actions</th>
                
                  
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
                 Array.isArray(servicePlanData) && servicePlanData.length > 0 && servicePlanData?.map((item, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 whitespace-nowrap">{idx+1}</td>
                      <td className="px-6 py-4 whitespace-nowrap ">
                      {item?.planName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap ">
                      {item?.serviceProvider?.serviceProviderName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap truncate max-w-56 ">
                        {item?.serviceType?.serviceType}
                      </td>
                    
                 
                      
                     
                      <td className=" whitespace-nowrap">
                        <a
                                onClick={() => {
                                  handleViewModal(item);
                                  setName(item?.serviceType?.serviceType)
                                }}
                          className="cursor-pointer py-2 px-3 font-semibold text-yellow-500 hover:text-yellow-400 duration-150 hover:bg-gray-50 rounded-lg"
                        >
                          View
                        </a>
                        <a
                          // onClick={() => {
                          //   navigate(`/updateDessert/${item?._id}`, { state: item  });
                          // }}
                          className="cursor-pointer py-2 px-3 font-semibold text-green-600 hover:text-green-700 duration-150 hover:bg-gray-50 rounded-lg"
                        >
                          Edit
                        </a>
                        <button
                          // onClick={() => {
                          //   handleModal(item?._id);
                          // }}
                          className="py-2 leading-none px-3 font-semibold text-red-500 hover:text-red-600 duration-150 hover:bg-gray-50 rounded-lg"
                        >
                          Delete
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
    
  )
}

export default ViewPlans