import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useForm } from "react-hook-form";
const ViewPlan = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <style jsx>{`
        .shadow-box {
          box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
            rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        }
      `}</style>
      <div className="container  bg-[#F3F4F6] ">
        <div className="">
          <div className="text text-center font-medium text-lg md:text-xl py-5 pb-0">
            <h1>Check Life Insurance Plan</h1>
          </div>
          <div class="flex items-center justify-center p-6 md:p-12  py-5">
            <div class="mx-auto w-full max-w-[550px] bg-white p-4  md:p-8 rounded-lg">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-5">
                  <label
                    for="name"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Full Name
                  </label>
                  <input
                    {...register("fullname", { required: true })}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  {errors.fullname && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div class="mb-5">
                  <label
                    for="phone"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Phone Number
                  </label>
                  <input
                    {...register("number", { required: true })}
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone number"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  {errors.number && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div class="mb-5">
                  <label
                    for="email"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Email Address
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />

                  {errors.email && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div class="-mx-3 flex flex-wrap">
                  <div class="w-full px-3 ">
                    <div class="mb-5">
                      <label
                        for="date"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Date of birth
                      </label>
                      <input
                        {...register("dob", { required: true })}
                        type="date"
                        name="date"
                        id="date"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                      {errors.dob && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                  {/* <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label for="time" class="mb-3 block text-base font-medium text-[#07074D]">
                            Time
                        </label>
                        <input type="time" name="time" id="time"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div> */}
                </div>

                <div>
                  <button class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    <div className="flex justify-center items-center">
                      <div>
                        <span>View Plans</span>
                      </div>
                      <div>
                        <MdKeyboardDoubleArrowRight size={30} />
                      </div>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewPlan;
