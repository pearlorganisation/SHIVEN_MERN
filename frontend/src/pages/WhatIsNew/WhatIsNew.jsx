import React from "react";

const WhatIsNew = () => {
  return (
    <>
      <div>
        <section className="bg-blue-600 text-white py-12">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-semibold mb-4">
              What's New at Shiven Insurance
            </h1>
            <p className="text-lg">
              Discover the latest updates and important notifications about our
              insurance services.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-6">
              Public Notifications
            </h2>
            <div className="space-y-6">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  New Health Insurance Policy
                </h3>
                <p className="text-gray-600 mb-2">
                  Effective from July 1, 2024, our new health insurance policy
                  provides enhanced coverage, ensuring better protection for you
                  and your family.
                </p>
                <span className="text-sm text-gray-500">July 1, 2024</span>
              </div>

              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Motor Insurance Update
                </h3>
                <p className="text-gray-600 mb-2">
                  We have updated our motor insurance terms to offer better
                  protection against vehicle theft and accidental damage.
                </p>
                <span className="text-sm text-gray-500">June 15, 2024</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-6">Recent Updates</h2>
            <div className="space-y-6">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Enhanced User Portal
                </h3>
                <p className="text-gray-600 mb-2">
                  Our new user portal offers a more streamlined and
                  user-friendly experience with enhanced features and security.
                </p>
                <span className="text-sm text-gray-500">May 20, 2024</span>
              </div>

              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Improved Customer Support
                </h3>
                <p className="text-gray-600 mb-2">
                  We have expanded our customer support team to provide faster
                  and more efficient service for all your insurance needs.
                </p>
                <span className="text-sm text-gray-500">April 10, 2024</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-600 text-white py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Have Questions or Need More Information?
            </h2>
            <p className="mb-6">
              If you need further details or have any queries, feel free to
              contact our support team or visit our service center.
            </p>
            <a
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhatIsNew;
