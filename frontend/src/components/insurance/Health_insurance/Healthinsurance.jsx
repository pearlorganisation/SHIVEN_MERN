// ------------------------------------------Imports-----------------------------------------------------
import React, { useEffect } from "react";
import Whychoosshiven from "../commonininsurance/Whychoosshiven";

import { Link, useNavigate } from "react-router-dom";
import Company from "../../Company/Company";
import CreateProfile from "../../CreateProfile/CreateProfile";
import HealthInsuranceReview from "./HealthInsuranceReview";
import HealthFaq from "./HealthFaq";
import { useDispatch, useSelector } from "react-redux";
import { getAllServicePlans } from "../../../features/actions/Service/servicePlan";
// -----------------------------------------------------------------------------------------------------

const Healthinsurance = () => {
  // ------------------------------------------States-----------------------------------------------------
  // -----------------------------------------------------------------------------------------------------
  // ------------------------------------------Hooks-----------------------------------------------------
  // -----------------------------------------------------------------------------------------------------
  // ----------------------------------------Functions-----------------------------------------------------
  // -----------------------------------------------------------------------------------------------------
  // ----------------------------------------useEffect-----------------------------------------------------
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  // -----------------------------------------------------------------------------------------------------
  const navigate = useNavigate();
  const handelNavigate = () => {
    navigate("/enquiry");
  };


  const { servicePlanData } = useSelector((state) => state?.servicePlan);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServicePlans());
  }, []);

  console.log(servicePlanData, "plan data");

  return (
    <>
      <div className="mx-auto ">
        <section>
          <Company />
          <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 py-10">
            <h2 className="text-4xl font-semibold text-center mb-10">
              Choose your plans
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {servicePlanData.map((el, id) => {
                return (
                  <div className="bg-white p-4 shadow rounded-lg flex flex-col">
                    <div className="flex items-center space-x-2 mb-4">
                      <img
                        alt="Company Logo"
                        className="h-10 w-10"
                        height="40"
                        src={el?.serviceProvider?.logo}
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />

                      <div>
                        <h3 className="text-lg font-semibold">
                          {el.serviceName}
                        </h3>
                        <p className="text-sm text-gray-600">
                          No room rent limit | 33% no claim bonus | 100%
                          restoration benefits
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Cover</p>
                        <p className="font-semibold">
                          ₹<span>{el.coverAmount}</span>
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Starting at</p>
                        <p className="font-semibold">
                          ₹ {el.premiumPerMonth}/month*
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

        <div className="p-5 md:p-8 conatiner mx-auto max-w-7xl">
          <h1 className=" font-semibold text text-2xl py-2">
            Health Insurance
          </h1>
          <p className="leading-7 text-black roboto-regular">
            Health insurance is an insurance product that covers medical and
            surgical expenses of an insured person. These expenses could be
            related to hospitalisation costs, medicine costs, or doctor
            consultation fees. Since medical costs are going up, and more people
            are getting sick because of their lifestyles. If you end up in the
            hospital without health insurance, it can quickly drain your
            savings. Buying a health insurance policy can provide you with the
            required financial assistance in case of hospitalization. This
            insurance provides coverage against medical expenses that you may
            incur during the policy period. With a valid mediclaim, you can also
            receive tax benefits under section 80D of the Income Tax Act, 1961.
          </p>
        </div>

        <section className="healthInsuranceCards mt-10 w-[100vw]">
          <div class="flex justify-center ">
            <div className={`w-[100%]`}>
              <div class="group relative -ml-4 flex scroll-mt-40 items-center pl-4">
                <a
                  href="#"
                  class="absolute z-50 -ml-10 mb-2.5 rounded-md border border-blue-gray-50 bg-blue-gray-50/50 p-1 opacity-0 hover:opacity-100 group-hover:opacity-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="pointer-events-none h-3.5 w-3.5 rounded-lg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
                    ></path>
                  </svg>
                </a>
              </div>

              <section>
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-white p-6 rounded-lg shadow">
                      <h1 class="text-2xl font-bold text-gray-900 mb-2">
                        What is Health Insurance?
                      </h1>
                      <p class="text-gray-600">
                        Health insurance is an agreement between the insurer and
                        the policyholder whereby an insurance company agrees to
                        reimburse for medical costs incurred by the policyholder
                        during the tenure of the policy. According to the policy
                        terms, the insured may incur medical expenses if they
                        get ill or meet an unfortunate accident that leads to
                        treatment at the hospital. To avail of the coverage
                        benefits of a health insurance policy, the policyholder
                        must pay a specific amount periodically, called a
                        premium. The premium is determined by the insurance
                        company and must be paid by the policyholders without
                        any fail either monthly, quarterly, half-yearly or
                        annually.
                      </p>
                    </div>
                    <div class="bg-gray-200 rounded-lg flex justify-center items-center overflow-hidden">
                      <img
                        className="w-[100%]"
                        src="https://i.graphicmama.com/blog/wp-content/uploads/2021/04/14070313/free-medical-illustrations-59.png"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <div class="mt-8 w-[100%]" id="frameworks-integration">
                {/* <CreateProfile /> */}
              </div>
            </div>
          </div>
        </section>
        <HealthInsuranceReview />
        <HealthFaq />
      </div>
    </>
  );
};

export default Healthinsurance;
