// -----------------------------------------------Imports---------------------------------------------------
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../../../features/actions/Auth/authActions";
import { resetLoginState } from "../../../features/slices/Auth/authSlice";
// ----------------------------------------------------------------------------------------------------------

const Login = () => {
  // -----------------------------------------------------States----------------------------------------------
  const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });

  const [userEmail, setUserEmail] = useState("");

  // ---------------------------------------------------------------------------------------------------------
  // -----------------------------------------------------Hooks----------------------------------------------
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { isLoginOtpSent } = useSelector((state) => state?.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // ---------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------Functions---------------------------------------------
  // loginHandler -- handler to log in the user
  const loginHandler = (data) => {
    setUserEmail(data?.email);
    const { email, password } = data;
    let payload = { email, password };
    dispatch(login(payload));
  };

  // ---------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------useEffect----------------------------------------------
  useEffect(() => {
    if (isLoginOtpSent) {
      navigate("/verification", { state: { email: userEmail } });
      dispatch(resetLoginState(false));
    }
  }, [isLoginOtpSent]);
  // ---------------------------------------------------------------------------------------------------------
  return (
    <div className="grid place-items-center h-[90vh] ">
      <main className="w-full p-8 h-full grid lg:grid-cols-2 gap-8">
        <div className="relative h-full hidden lg:flex items-center justify-center bg-blue-500 rounded-lg ">
          <div className="relative z-10 w-full max-w-md p-8">
            <div className="md:mt-16 space-y-3">
              <h3 className="text-white text-3xl font-bold">
                Start growing your business quickly
              </h3>
              <p className="text-white">
                Create an account and get access to all features for 30-days, No
                credit card required.
              </p>
              <div className="flex items-center -space-x-2 overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/women/79.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/86.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <p className="text-sm text-white font-medium translate-x-5">
                  Join 5.000+ users
                </p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 my-auto h-[500px]"></div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md space-y-8 bg-white text-gray-600 p-8 md:p-20 rounded-lg">
            <div className="lg:hidden">
              <div className="mt-5 space-y-2 text-center">
                <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                  Login
                </h3>
              </div>
            </div>

            <div className="hidden lg:block text-center">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Login
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-x-3">
              <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_17_40)">
                    <path
                      d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                      fill="#34A853"
                    />
                    <path
                      d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_40">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.095 43.5014C33.2083 43.5014 43.1395 28.8011 43.1395 16.3996C43.1395 15.7223 43.1395 15.045 43.0883 14.3677C45.0272 12.866 46.6737 11.0395 47.9993 8.97124C46.1738 9.80193 44.2222 10.3265 42.1952 10.5323C44.3095 9.26321 45.8603 7.21051 46.6738 4.77267C44.7222 5.97984 42.598 6.83591 40.348 7.31834C36.1463 2.59456 28.6465 3.51227 24.9132 8.49572C22.9413 11.1153 22.1701 14.4932 22.7772 17.7729C15.151 17.391 8.01633 13.8384 3.64198 8.0328C1.12491 12.3856 2.24127 17.9635 6.29273 20.6655C4.80106 20.6184 3.35636 20.2068 2.04867 19.4711C1.98977 23.9004 5.12503 27.878 9.44861 28.7482C8.05432 29.1988 6.57266 29.279 5.11793 28.9823C6.35223 32.9577 10.004 35.7942 14.1344 35.8795C10.7781 38.6533 6.39049 39.8537 2.24442 39.3947C6.47266 42.0766 10.9552 43.5014 15.5951 43.4703"
                    fill="#1DA1F2"
                  />
                </svg>
              </button>
              <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 0.376617C10.746 0.376617 0 11.1233 0 24.3771C0 36.0421 8.6235 45.7868 20.001 48V30.9697H14.3455V24.3763H20.001V19.0313C20.001 13.4385 23.0625 10.6263 27.759 10.6263C29.5945 10.6263 31.506 10.9376 31.506 10.9376V16.502H28.785C26.0995 16.502 23.9995 18.1486 23.9995 21.063V24.3771H31.2465L30.2095 30.9705H23.9995V48C35.377 45.7875 43.9995 36.0428 43.9995 24.3771C43.9995 11.1233 33.2535 0.376617 20 0.376617Z"
                    fill="#1877F2"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit(loginHandler)} className="space-y-5">
              <div>
                <label className="font-medium">Email</label>
                <input
                  {...register("email")}
                  type="email"
                  className={`w-full mt-2 px-3 py-2 border rounded-md text-gray-500 shadow-sm
                  ${errors.email ? "border-red-500" : "border-gray-300"}`}
                />
                <p className="text-sm text-red-500 mt-2">
                  {errors.email?.message}
                </p>
              </div>
              <div>
                <label className="font-medium">Password</label>
                <input
                  {...register("password")}
                  type="password"
                  className={`w-full mt-2 px-3 py-2 border rounded-md text-gray-500 shadow-sm
                  ${errors.password ? "border-red-500" : "border-gray-300"}`}
                />
                <p className="text-sm text-red-500 mt-2">
                  {errors.password?.message}
                </p>
              </div>
              <button className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150">
                Log in
              </button>
            </form>
            <p className="text-center">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-gray-800 hover:text-gray-500"
              >
                Create account
              </Link>
            </p>
            <p className="text-center">
              <Link
                to="/forgot-password"
                className="font-medium text-gray-800 hover:text-gray-500"
              >
                Forgot Password?
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
