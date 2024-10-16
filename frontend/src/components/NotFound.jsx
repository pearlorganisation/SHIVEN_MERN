import React from "react";



const NotFound = () => {
  return (
    <>
      <div className="min-h-screen grid place-items-center">
        <section className="py-28 flex flex-col gap-10">
          <div className="container px-4 md:px-6">
            <div className="mb-8 md:mb-10 lg:mb-12 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  text-black">
                404 Not Found
              </h2>
              <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                The page doesn't exist or is under development.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NotFound;
