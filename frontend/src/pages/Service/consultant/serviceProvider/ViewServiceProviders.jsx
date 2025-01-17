import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';


export const ConsultantServiceProviders = () => {
  const { consultants } = useSelector((state) => state.user);
  const { loggedInUserData } = useSelector((state) => state.auth);

  

  let allServiceProviders= []
  if (
    consultants.servicePlan &&
    Array.isArray(consultants.servicePlan) &&
    loggedInUserData.role == "1"
  ) {
    const seenServiceProviderNames = new Set(); // To track unique serviceProviderName
    const mapSeenServiceProviderNames = new Map(); 

    allServiceProviders = consultants.servicePlan
      .filter((item) => {
        console.log(item?.serviceType?.serviceType)
        const serviceProviderName = item?.serviceProvider?.serviceProviderName;
        const isExist= mapSeenServiceProviderNames.get(serviceProviderName)
        mapSeenServiceProviderNames.set(serviceProviderName,[item?.serviceType?.serviceType])
        if (serviceProviderName && !seenServiceProviderNames.has(serviceProviderName)) {
          seenServiceProviderNames.add(serviceProviderName); // Add to set if not already present
          return true;
        }
         if(isExist){
          isExist.push(item?.serviceType?.serviceType)
          mapSeenServiceProviderNames.set(serviceProviderName,isExist)
         }
        return false;
      })
      .map((item) => ({
        ...item?.serviceProvider,
        serviceType: mapSeenServiceProviderNames.get(item?.serviceProvider?.serviceProviderName) ,
      }));

  }
  

  return (
    <div className="userContainer p-10 ">
      <div className="title p-1">
        <h4 className="font-bold text-blue-500 text-sm sm:text-md md:text-lg">
          Service Provider Listing 
        </h4>
   
      </div>
      <div className="mt-6 shadow-xl rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                <tr>
                  <th className="py-3 px-6">ID</th>
                  <th className="py-3 px-6">Service Provider </th>
                  <th className="py-3 px-6">Service Type</th>
                  <th className="py-3 px-6">Logo </th>
                  <th className="py-3 px-6">Description </th>
           

                
                  
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y">
              {             Array.isArray(allServiceProviders) && allServiceProviders.length > 0 ? allServiceProviders?.map((item, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 whitespace-nowrap">{idx+1}</td>
                      <td className="px-6 py-4 whitespace-nowrap ">
                        {item?.serviceProviderName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap ">
                        {(item?.serviceType).join(", ")}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap ">
                        <img src={item?.logo?.secure_url} className='rounded-lg w-24 h-20' />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap truncate max-w-56 ">
                        {item?.description}
                      </td>
                    
                 
                      
                     
               
                    </tr>
                  )) : <div className="text-center py-2 font-semibold">No Data Found</div>
                   }
              </tbody>
            </table>
          </div>
    </div>
  )
}

