import React from "react";

const DummyLogin = () => {
  return (
    <>
      <div className=" flex items-center justify-center h-screen md:p-2 p-5">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex w-full max-w-4xl">
          <div className="hidden md:flex md:w-1/2  p-10  items-center  justify-center">
            <div className="relative w-80 h-80">
              <img
                src="dummy.jpg"
                alt="Placeholder"
                className="absolute inset-0 object-cover w-full h-full "
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 p-10">
            <h2 className="text-3xl font-semibold text-[#315288] mb-4">
              Login!
            </h2>
            <p className="mb-6 text-gray-600">
              If you are already a member you can login with your email address
              and password.
            </p>

            <form>
              <div className="mb-4">
                <label for="email" className="block text-blue-500 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email address"
                />
              </div>
              <div className="mb-4">
                <label for="password" className="block  mb-2 text-blue-500">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Password"
                />
              </div>
              <div className="mb-6 flex items-center">
                <input type="checkbox" id="remember-me" className="mr-2" />
                <label for="remember-me" className=" text-blue-500">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-[#315288] text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 "
              >
                Login
              </button>
            </form>
            <p className="mt-6 text-gray-600">
              Dont have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DummyLogin;
