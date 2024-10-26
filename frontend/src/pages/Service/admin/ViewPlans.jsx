import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Stack,Skeleton } from '@mui/material';
import { getAllServiceProviders } from '../../../features/actions/Service/serviceProvider';
import { getAllServices } from '../../../features/actions/Service/service';
import Select from 'react-select'

const ViewPlans = () => {
  const dispatch= useDispatch();
  const navigate = useNavigate();
  const {serviceProviderData,isLoading } = useSelector(state => state.serviceProvider)
  const [selectedOption, setSelectedOption] = useState(null);
  
  const { loggedInUserData } = useSelector((state) => state.auth);
console.log(loggedInUserData)
  useEffect(()=>{
    dispatch(getAllServiceProviders())
    dispatch(getAllServices())
  },[])

  const servicesForm= [
    {name:"Health Insurance",path:""},
    {name:"Whole Life Insurance",path:""},
    {name:"Motor Insurance",path:""},
    {name:"Home Loan",path:""},
    {name:"Vehicle Loan",path:""},
]

  return (
    <div className="userContainer p-10 ">
      <div className="title p-1">
        <h4 className="font-bold text-blue-500 text-sm sm:text-md md:text-lg">
          Company Plan Listing
        </h4>
        <div className="createEmployeeBtn flex justify-end p-4 ">
  {loggedInUserData?.role === "0" &&  
      <div className='flex gap-3 '>       <Select
       className='w-64'
      options={[{value:"Health Insurance",label:"Health Insurance"},{value:"Whole Life Insurance",label:"Whole Life Insurance"},
        {value:"Motor Insurance",label:"Motor Insurance"},{value:"Home Loan",label:"Home Loan"},{value:"Vehicle Loan",label:"Vehicle Loan"},
        {value:"Mutual Fund",label:"Mutual Fund"}

      ]}
      /> <button
            className=" p-2 rounded-lg bg-indigo-600 text-white font-bold tracking-widest"
            onClick={() => {
              navigate("/admin/createServiceProvider");
            }}
          >
      
           Add Plan
          </button>
          </div>}

        </div>
      </div>
      <div className="mt-6 shadow-xl rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                <tr>
                  <th className="py-3 px-6">ID</th>
                  <th className="py-3 px-6">Plan Name</th>
                  <th className="py-3 px-6">Service Provider </th>
                  <th className="py-3 px-6">Description </th>
           
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
                 Array.isArray(serviceProviderData) && serviceProviderData.length > 0 && serviceProviderData?.map((item, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 whitespace-nowrap">{idx+1}</td>
                      <td className="px-6 py-4 whitespace-nowrap ">
                       Demo Plan
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap ">
                      {item?.serviceProviderName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap truncate max-w-56 ">
                        {item?.description}
                      </td>
                    
                 
                      
                     
                      <td className=" whitespace-nowrap">
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
    </div>
  )
}

export default ViewPlans