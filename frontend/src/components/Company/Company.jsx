import React, { useEffect } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import { serviceProviderAction } from "../../features/actions/serviceProvider/serviceProvider";
import { useDispatch, useSelector } from "react-redux";

const Company = () => {
  // ------------------------------------------------State----------------------------------------------
  const data = [
    {
      path: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Life_Insurance_Corporation_of_India_%28logo%29.svg/250px-Life_Insurance_Corporation_of_India_%28logo%29.svg.png",
    },
    {
      path: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/HDFC_Life_Logo.svg/250px-HDFC_Life_Logo.svg.png",
    },
    {
      path: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Max_Life_Insurance_logo.svg/220px-Max_Life_Insurance_logo.svg.png",
    },
    {
      path: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Kotak_Life_Logo-1.png/220px-Kotak_Life_Logo-1.png",
    },
    {
      path: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/ABSL_Logo_Square.png/220px-ABSL_Logo_Square.png",
    },
    {
      path: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/SBI_Life.jpg/250px-SBI_Life.jpg",
    },
    {
      path: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Bajaj_Group_logo.svg/220px-Bajaj_Group_logo.svg.png",
    },
    {
      path: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/PNB_MetLife_India_Logo.svg/220px-PNB_MetLife_India_Logo.svg.png",
    },
    {
      path: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/RelianceNipponLifeLogo.png/220px-RelianceNipponLifeLogo.png",
    },
    {
      path: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Aviva_Logo.svg/200px-Aviva_Logo.svg.png",
    },
    {
      path: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/LogoofFGII.jpg/220px-LogoofFGII.jpg",
    },
    {
      path: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Canara_HSBC_Life_Insurance_Wikipedia_Logo.jpg/220px-Canara_HSBC_Life_Insurance_Wikipedia_Logo.jpg",
    },
  ];
  // ---------------------------------------------------------------------------------------------------

  // ------------------------------------------------Hooks----------------------------------------------
  const navigate = useNavigate();
  // ---------------------------------------------------------------------------------------------------
  const { serviceProviderData } = useSelector(
    (state) => state?.serviceProvider
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(serviceProviderAction());
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
