import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto min-h-[90vh] grid place-items-center">
      <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
            Secure Access Control for
            <span className="text-indigo-600">Your System</span>
          </h1>
          <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            Empower your system with our Authentication Module for robust and
            secure access control.
          </p>
          <div>
            <p className="text-gray-800 py-3">
              Subscribe to our newsletter and we'll save your time
            </p>
            <form className="items-center space-y-3 sm:justify-center sm:space-x-3 sm:space-y-0 sm:flex lg:justify-start">
              <input
                type="text"
                placeholder="Enter your email"
                className="text-gray-500 border outline-none p-3 rounded-md w-full sm:w-72"
              />
              <button className="outline-none bg-gray-700 text-white text-center px-4 py-3 rounded-md shadow w-full ring-offset-2 ring-gray-700 focus:ring-2  sm:w-auto">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
          <img
            src="https://i.postimg.cc/kgd4WhyS/container.png"
            className="w-full mx-auto sm:w-10/12  lg:w-full"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
