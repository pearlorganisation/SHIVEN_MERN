"use client"
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../../../features/actions/Auth/authActions";
import CircleLoader from "../../../components/Loader/ButtonLoaders/CircleLoader";
import { toast } from "sonner";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState("");

  const {isForgotPasswordOtpSent ,isLoading } = useSelector((state) => state?.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setUserEmail(data?.email)
dispatch(forgotPassword(data))
  };

  useEffect(()=>{
    if (isForgotPasswordOtpSent) {
      toast.success("OTP for verification sent successfully");
      navigate("/verification", { state: { email: userEmail } });
    }
  },[isForgotPasswordOtpSent])


  return (
    <div className="max-w-lg mx-auto my-20 bg-white p-8 rounded-xl shadow shadow-slate-300 py-10 ">
      <h1 className="text-4xl font-medium text-center">Reset password</h1>
      <p className="text-slate-500 text-center">
        Fill up the form to reset the password
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="my-10">
        <div className="flex flex-col space-y-5">
          <label htmlFor="email">
            <p className="font-medium text-slate-700 pb-2">Email address</p>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Enter email address"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-[red]">This field is required</span>}
          </label>

  <button
            className="w-full py-3 font-medium rounded-lg text-white bg-[#4F46E5] hover:shadow inline-flex space-x-2 items-center justify-center"
            type="submit"
            disabled={isLoading}
          >
                { isLoading ? <CircleLoader/> :  
        <>    <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
              />
            </svg>
            <span>Reset password</span>
            </>  }
          </button>
     
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
