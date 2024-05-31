import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
const Company = () => {
  // ------------------------------------------------State----------------------------------------------
  const insuranceProviderArray = [
    {
      title: "SBI",
      path: "/health-insurance/sbi",
    },
    {
      title: "Tata",
      path: "/health-insurance/tata",
    },
    {
      title: "ICICI",
      path: "/health-insurance/icici",
    },
    {
      title: "Axis",
      path: "/health-insurance/axis",
    },
  ];
  // ---------------------------------------------------------------------------------------------------

  // ------------------------------------------------Hooks----------------------------------------------
  const navigate = useNavigate();
  // ---------------------------------------------------------------------------------------------------

  return (
    <>
      <div className="bg-gradient-to-r from-blue-200 to-blue-600 rounded py-10">
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
      </div>
    </>
  );
};

export default Company;
