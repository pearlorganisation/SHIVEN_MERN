import React, { useEffect } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { getAllServiceProviders } from "../../features/actions/Service/serviceProvider";

const Company = () => {
  // ------------------------------------------------State----------------------------------------------


  // ------------------------------------------------Hooks----------------------------------------------
  const navigate = useNavigate();
  // ---------------------------------------------------------------------------------------------------
  const { serviceProviderData } = useSelector(
    (state) => state?.serviceProvider
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllServiceProviders());
  }, []);

  console.log(serviceProviderData.data, "new data");

  return (
    <>
      {/* <div className="bg-gradient-to-r from-blue-200 to-blue-600 rounded py-10">
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {insuranceProviderArray.map((provider) => {
            return (
              <>
                <SwiperSlide>
                  <div
                    className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-auto mt-8 cursor-pointer"
                    onClick={() => {
                      navigate(`${provider?.path}`);
                    }}
                  >
                    <div className="px-6 py-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <img
                            className="w-24 h-16 mr-4"
                            src="https://static.pbcdn.in/term-cdn/images/images/insurer/SBI_logo.png"
                            alt="Insurance Company Logo"
                          />
                          <div>
                            <div className="font-bold text-xl text-gray-800">
                              {provider?.title}
                            </div>
                            <div className="text-sm text-gray-600">
                              Providing reliable insurance solutions
                            </div>
                          </div>
                        </div>
                      </div>

                      <ul className="list-none">
                        <li className="flex items-center text-gray-700 mb-2">
                          <IoMdArrowDropright size={24} className="mr-2" />
                          <span>
                            Competitive rates and customizable coverage options
                          </span>
                        </li>
                        <li className="flex items-center text-gray-700 mb-2">
                          <IoMdArrowDropright size={24} className="mr-2" />
                          <span>
                            24/7 customer support for your peace of mind
                          </span>
                        </li>
                        <li className="flex items-center text-gray-700">
                          <IoMdArrowDropright size={24} className="mr-2" />
                          <span>Quick and hassle-free claim process</span>
                        </li>
                      </ul>

                      <div className="flex justify-start py-5">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                          <div className="flex items-center">
                            <div>Explore</div>
                            <div>
                              <IoMdArrowDropright size={25} />
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div> */}

      <section class="text-center py-8 container max-w-6xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">Our service provider</h2>
        <p class="text-gray-600 mb-8">
          Leading insurers for your financial freedom
        </p>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-3">
          {serviceProviderData.map((el, id) => {
            return (
              <div class="p-4 bg-white rounded shadow">
                <img
                  src={el.logo}
                  alt="Partner 1"
                  className="mx-auto w-[4rem] md:w-[5rem]"
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Company;
