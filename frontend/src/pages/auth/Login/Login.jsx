// -----------------------------------------------Imports---------------------------------------------------
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../../../features/actions/Auth/authActions";
import { isUserLoggedInTrue, resetLoginState } from "../../../features/slices/Auth/authSlice";
import CircleLoader from "../../../components/Loader/ButtonLoaders/CircleLoader";
// ----------------------------------------------------------------------------------------------------------

const Login = () => {
  // -----------------------------------------------------States----------------------------------------------
  const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // ---------------------------------------------------------------------------------------------------------
  // -----------------------------------------------------Hooks----------------------------------------------
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { isLoginOtpSent,isLoading,response } = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ---------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------Functions---------------------------------------------
  // loginHandler -- handler to log in the user
  const loginHandler = (data) => {
    setUserEmail(data?.email);
    setUserPassword(data?.password);
    const { email, password } = data;
    let payload = { email, password };
    dispatch(login(payload));
  };

  // ---------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------useEffect----------------------------------------------
  useEffect(() => {
      dispatch(resetLoginState());
  }, []);
  useEffect(() => {
    if(response.login){
      dispatch(isUserLoggedInTrue())
      navigate("/");
    }
    else if (isLoginOtpSent) {
      navigate("/verification", { state: { email: userEmail ,password:userPassword } });
    }
  }, [isLoginOtpSent,response]);

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
          <div className="w-full max-w-md space-y-8 bg-white text-gray-600 p-8 md:p-10 rounded-lg ">
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
              <button disabled={isLoading} className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150 flex justify-center">
               {isLoading ? <CircleLoader/>:  "Log in"}
              </button>
            </form>
            <p className="text-center">
              <Link
                to="/forgot-password"
                className="font-medium text-gray-800 hover:text-gray-700"
              >
                Forgot Password?
              </Link>
            </p>
            <p className="text-center">
              <Link
                to="/createConsultant"
                className="font-medium text-blue-700 hover:text-blue-600"
              >
               Register as a Consultant here.
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
