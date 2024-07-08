import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Testimonial = () => {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Martin escobar",
      title: "Founder of meta",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      name: "Simon andrew",
      title: "Software engineer",
      quote:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Micheal worin",
      title: "Product designer",
      quote:
        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.",
    },
  ];

  return (
    <>
      <section className="bg-white ">
        <div className="py-8 px-4  max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
              Testimonials
            </h2>
          </div>
          <div className="">
            <Swiper
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {testimonials?.map((data) => {
                return (
                  <SwiperSlide>
                    <section class="bg-white ">
                      <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                        <figure class="max-w-screen-md mx-auto">
                          <svg
                            class="h-12 mx-auto mb-3 text-gray-400 "
                            viewBox="0 0 24 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                              fill="currentColor"
                            />
                          </svg>
                          <blockquote>
                            <p class="text-2xl font-medium text-gray-900 ">
                              "Flowbite is just awesome. It contains tons of
                              predesigned components and pages starting from
                              login screen to complex dashboard. Perfect choice
                              for your next SaaS application."
                            </p>
                          </blockquote>
                          <figcaption class="flex items-center justify-center mt-6 space-x-3">
                            <img
                              class="!w-6 !h-6 rounded-full"
                              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                              alt="profile picture"
                            />
                            <div class="flex items-center divide-x-2 divide-gray-500 ">
                              <div class="pr-3 font-medium text-gray-900 ">
                                Micheal Gough
                              </div>
                              <div class="pl-3 text-sm font-light text-gray-500 ">
                                CEO at Google
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                    </section>
                  </SwiperSlide>
                );
              })}

              {/* <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
