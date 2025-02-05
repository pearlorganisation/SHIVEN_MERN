import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { getServicePlansByServices } from "../../features/actions/Service/servicePlan";


const Company = () => {

  const {id} = useParams();
  const {state} = useLocation();
  const navigate = useNavigate();
  const handelNavigate = () => {
    navigate("/enquiry");
  };

  const { loggedInUserData } = useSelector((state) => state.auth);
  const { servicePlanData } = useSelector((state) => state.servicePlan);

  let servicePlan=[];
  if(loggedInUserData?.role==="2"){
    servicePlan= state
  }
  else{
    servicePlan=servicePlanData
  }
  
  const dispatch = useDispatch();

  let getAllOptedServicePlans = []
  if( state && Array.isArray(state))
    {  
      getAllOptedServicePlans = state
      .filter((item) =>  item?.serviceType?._id === id )
  }

  let getAllOptedServiceProviders = []

  if( state && Array.isArray(state))
       {  
         const seenServiceProviderNames = new Set();
         getAllOptedServiceProviders = getAllOptedServicePlans
         .filter((item) => {
           const serviceProviderName = item?.serviceProvider?.serviceProviderName;
           if (serviceProviderName && !seenServiceProviderNames.has(serviceProviderName)) {
            seenServiceProviderNames.add(serviceProviderName); // Add to set if not already present
             return true;
           }
           return false;
         })
 
         .map((item) => ({
    ...item?.serviceProvider
         }));
     }else{
      const seenServiceProviderNames = new Set();
      getAllOptedServiceProviders = servicePlanData
      .filter((item) => {
        const serviceProviderName = item?.serviceProvider?.serviceProviderName;
        if (serviceProviderName && !seenServiceProviderNames.has(serviceProviderName)) {
         seenServiceProviderNames.add(serviceProviderName); // Add to set if not already present
          return true;
        }
        return false;
      })

      .map((item) => ({
 ...item?.serviceProvider
      }));
     }

  useEffect(() => {
    if(!loggedInUserData?.role){
dispatch(getServicePlansByServices(id))
    }
  }, []);



  return (
    <>
  

      <section class="text-center py-8 container max-w-6xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">Our service provider</h2>
        <p class="text-gray-600 mb-8">
          Leading providers for your financial freedom
        </p>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-3">
          {getAllOptedServiceProviders.map((el, id) => {
            return (
              <div class="p-4 bg-white rounded shadow">
                <img
                  src={el.logo?.secure_url}
                  alt={el?.serviceProviderName}
                  className="mx-auto rounded-lg w-[4rem] md:w-[5rem]"
                />
              </div>
            );
          })}
        </div>
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 py-10">
            <h2 className="text-4xl font-semibold text-center mb-10">
              Choose your plans
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {servicePlan.map((el, id) => {
                return (
                  <div className="bg-white p-4 shadow rounded-lg flex flex-col">
                    <div className="flex items-center space-x-2 mb-4">
                      <img
                        alt="Company Logo"
                        className="h-10 w-10 rounded-lg"
                        height="40"
                        src={el?.serviceProvider?.logo?.secure_url}
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />

                      <div>
                        <h3 className="text-lg font-semibold">
                          {el.planName}
                        </h3>
                        <p className="text-sm text-gray-600">
                  
                        </p>
                      </div>
                    </div>


                    <button
                      type="button"
                      className="bg-red-500 p-3 rounded-md text-white"
                      onClick={handelNavigate}
                    >
                      Check Premium
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
      </section>
    </>
  );
};

export default Company;
