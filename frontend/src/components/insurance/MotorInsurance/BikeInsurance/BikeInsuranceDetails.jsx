import React from "react";

const BikeInsuranceDetails = () => {
  return (
    <>
      <div class="max-w-xl mx-auto  bg-white shadow-lg rounded-lg overflow-hidden p-5 m-10">
        <div class="p-4 flex items-center justify-between bg-gray-50 border-b">
          <div>
            <h1 class="text-lg font-semibold">TVS Ntorq</h1>
            <p class="text-sm text-gray-600">UK07ABCD| Registered in 2024</p>
          </div>
          <img
            src="https://www.policybazaar.com/icons/motorcycle.png"
            alt="Bike"
            class="w-8 h-8"
          />
        </div>
        <div class="p-4">
          <div class="flex items-center mb-4">
            <img
              src="https://www.policybazaar.com/icons/united_india.png"
              alt="United India Insurance"
              class="w-12 h-12"
            />
            <div class="ml-4">
              <p class="text-sm font-semibold">United India Insurance</p>
              <p class="text-xs text-gray-600">1 Year Own-damage with ZD</p>
              <p class="text-xs text-gray-600">IDV: ₹50,000</p>
            </div>
          </div>
          <div class="mb-4">
            <p class="text-sm font-semibold text-blue-600">
              New policy start date: 7 August, 2024
            </p>
          </div>
          <div class="mb-4 bg-orange-100 p-4 rounded-lg border border-orange-300">
            <div class="flex justify-between items-center mb-2">
              <p class="text-sm font-semibold text-orange-600">
                Accident insurance for you of ₹15 Lakhs
              </p>
              <span class="text-xs text-red-600 font-semibold">
                Mandatory by law
              </span>
            </div>
            <p class="text-xs text-gray-600 mb-2">
              Not having a valid accident cover may lead to rejection of claim
            </p>
            <div class="flex space-x-4">
              <label class="flex items-center space-x-2">
                <input
                  type="radio"
                  name="insurance"
                  class="form-radio text-blue-600"
                />
                <span class="text-sm">Digit ₹366</span>
              </label>
              <label class="flex items-center space-x-2">
                <input
                  type="radio"
                  name="insurance"
                  class="form-radio text-blue-600"
                />
                <span class="text-sm">Chola MS ₹384</span>
              </label>
              <label class="flex items-center space-x-2">
                <input
                  type="radio"
                  name="insurance"
                  class="form-radio text-blue-600"
                />
                <span class="text-sm">Liberty GI ₹380</span>
              </label>
            </div>
          </div>
          <div class="mb-4">
            <h2 class="text-sm font-semibold text-gray-700 mb-2">
              Premium details
            </h2>
            <div class="flex justify-between text-sm text-gray-600">
              <p>Net premium</p>
              <p>₹419</p>
            </div>
            <div class="flex justify-between text-sm text-gray-600">
              <p>GST</p>
              <p>₹75</p>
            </div>
          </div>
          <div class="mb-4">
            <div class="flex justify-between font-semibold text-lg text-gray-800">
              <p>Total amount</p>
              <p>₹494</p>
            </div>
          </div>
          <div class="text-center">
            <button class="w-full py-3 px-6 bg-blue-600 text-white font-medium rounded-md">
              Pay securely
            </button>
          </div>
          <p class="text-xs text-center text-gray-500 mt-4">
            By clicking on 'Pay now', I agree to the{" "}
            <a href="#" class="text-blue-600">
              terms & conditions
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default BikeInsuranceDetails;
