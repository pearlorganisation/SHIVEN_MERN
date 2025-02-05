import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllServices } from "../../features/actions/Service/service";
import { getConsultantWithPopulated } from "../../features/actions/Auth/userActions";

const Policies = () => {
  const { loggedInUserData } = useSelector((state) => state.auth);
  const { serviceData } = useSelector((state) => state.service);
  const  dispatch = useDispatch()
  const { consultants } = useSelector(
    (state) => state?.user
  );

  let getAllOptedServices = []
 if( consultants?.servicePlan && Array.isArray(consultants.servicePlan))
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

  const data = loggedInUserData?.role==="2" ? getAllOptedServices : serviceData

  
  useEffect(()=>{
    if(loggedInUserData?.role ==="2")
      {
      dispatch(getConsultantWithPopulated(loggedInUserData?.consultantId));
    }
    else{
      dispatch(getAllServices())
    }
  },[])

  return (
    <section className="py-14">
      <div className="max-w-screen-3xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
          <h3 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
            Services We Provide
          </h3>
          <p className="text-black">
            Everything you need to know about the product. Can’t find the answer
            you’re looking for? feel free to{" "}
            <a
              className="text-indigo-600 font-semibold whitespace-nowrap"
              href="javascript:void(0)"
            >
              Contact us
            </a>
            .
          </p>
        </div>

        <div className="mt-12">
          <ul className="space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3">
            {Array.isArray(data) && data.map((item, idx) => (

                <Link
                to={`/servicePlansAndProviders/${item?._id}`}
                state={loggedInUserData?.role==="2" && consultants?.servicePlan}
                  key={idx}
                  className="space-y-3 border bg-white p-4 rounded-xl cursor-pointer shadow-md"
                >
                  <summary className="flex items-center justify-between font-semibold text ">
                    <div className="flex justify-center items-center gap-4 ">
                      <div className="text-xl italic text-yellow-700 font-bold">
                        {item.serviceType}
                      </div>
                      <img className="h-6 w-10" src={item.logo?.secure_url} />
                    </div>
                  </summary>

                  <p className="text-black leading-relaxed line-clamp-4">{item?.serviceDescription}</p>
                  <div
              
                    className="flex items-center gap-x-1 text-sm text-indigo-600 hover:text-indigo-400 duration-150 font-medium"
                  >
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Policies;
