import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { Stack,Skeleton } from '@mui/material';
import { getAllTemplates } from '../../../../features/actions/brochure';
import BrochureModal from '../../../../components/Modal/BrochureModal';
import EditBrochure from '../../../../components/Modal/EditBrochure';
import { clearIsCreated } from '../../../../features/slices/brochure';

const ViewBrochures = () => {
  const dispatch= useDispatch();
  const {templateData,isLoading } = useSelector(state => state.brochure)
  const { loggedInUserData } = useSelector((state) => state.auth);

  const [showViewModal,setShowViewModal] = useState(false)

  const [showViewModal2,setShowViewModal2] = useState(false)
const [viewData2,setViewData2]= useState()

const handleViewModal=(itemData)=>{
  setShowViewModal(true)
}
const handleViewModal2=(itemData)=>{
  setShowViewModal2(true)
  setViewData2(itemData)
}

  useEffect(()=>{
    dispatch(getAllTemplates())
    dispatch(clearIsCreated())
  },[])

  return (
    <div className="userContainer p-10 ">
      <div className="title p-1">
        <h4 className="font-bold text-blue-500 text-sm sm:text-md md:text-lg">
            Brochures Templates
        </h4>
   { loggedInUserData.role==="0" &&    <div className="createEmployeeBtn flex justify-end p-4 ">
          <button
            className=" p-2 rounded-lg bg-indigo-600 text-white font-bold tracking-widest"
            onClick={() => {
              console.log("first")
              handleViewModal("item")
            }}
          >
          Add New Brochures Template
          </button>
        </div>}
      </div>
      <div className="mt-6 shadow-xl rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                <tr>
                  <th className="py-3 px-6">S. NO.</th>
                  <th className="py-3 px-6">Template</th>
           
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
                 Array.isArray(templateData) && templateData.length > 0 && templateData?.map((item, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 whitespace-nowrap">{idx+1}</td>
                      <td className="px-6 py-4 whitespace-nowrap">  
                        <img src={item?.template?.secure_url} className='rounded-lg w-auto h-36' /></td>
           
                    
                 
                      
                     
                      <td className=" whitespace-nowrap">
                      <button
                     onClick={() => {
                      handleViewModal2(item?.template?.secure_url)
                    }}
                          className="py-2 leading-none px-3 font-semibold text-green-500 hover:text-green-600 duration-150 hover:bg-gray-50 rounded-lg"
                        >
                          View Brochure Template
                        </button>
                   
                
                      </td>
                    </tr>
                  ))
                
                )}
              </tbody>
            </table>
          </div>
          {showViewModal && (
        <BrochureModal setModal={setShowViewModal}  />
      )}
          {showViewModal2 && (
        <EditBrochure setModal={setShowViewModal2} viewData={viewData2} />
      )}
    </div>
  )
}

export default ViewBrochures