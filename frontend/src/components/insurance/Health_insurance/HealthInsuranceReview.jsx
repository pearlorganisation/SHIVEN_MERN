import React from "react";

const HealthInsuranceReview = () => {
  return (
    <>
      <div class="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-semibold text-center mb-6">
          Customer Reviews
        </h2>
        <div class="grid gap-8 lg:grid-cols-2">
          <div class="bg-white shadow-md p-6 rounded-lg flex flex-col md:flex-row items-start">
            <img
              src="https://via.placeholder.com/80"
              alt="Emma Davis"
              class="w-16 h-16 rounded-full mr-4"
            />
            <div class="flex-grow">
              <div class="flex justify-between items-center">
                <p class="text-gray-800 font-semibold text-lg">Emma Davis</p>
                <div class="flex items-center space-x-2">
                  <span class="flex items-center text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 7H7m0 0h-.01M7 7c0 1.065.318 2.091.88 2.939m0 0C7.318 12.909 7 13.935 7 15m0 0h7m0 0H7.01M14 15c0-1.065-.318-2.091-.88-2.939m0 0C14.682 9.091 15 8.065 15 7m0 0H8m6 0h.01"
                      />
                    </svg>
                    8
                  </span>
                  <span class="flex items-center text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 10h.01M12 14h.01M16 10h.01M9 21h6a2 2 0 002-2v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 002 2zm0 0H8v-6h8v6h-1M4 14h1v7h14v-7h1"
                      />
                    </svg>
                    2
                  </span>
                </div>
              </div>
              <p class="text-gray-600 mt-1">20 Mar, 2024</p>
              <p class="text-gray-600 mt-2">
                I recently had the opportunity to explore Pagedone's UI design
                system, and it left a lasting impression on my workflow. The
                system seamlessly blends user-friendly features with a robust
                set of design components, making it a go-to for creating
                visually stunning and consistent interfaces.
              </p>
              <div class="flex mt-2">
                <span class="text-yellow-500">⭐</span>
                <span class="text-yellow-500">⭐</span>
                <span class="text-yellow-500">⭐</span>
                <span class="text-yellow-500">⭐</span>
                <span class="text-yellow-500">⭐</span>
              </div>
            </div>
          </div>

          <div class="bg-white shadow-md p-6 rounded-lg flex flex-col md:flex-row items-start">
            <img
              src="https://via.placeholder.com/80"
              alt="Anuj Mishra"
              class="w-16 h-16 rounded-full mr-4"
            />
            <div class="flex-grow">
              <div class="flex justify-between items-center">
                <p class="text-gray-800 font-semibold text-lg">Anuj Mishra</p>
                <div class="flex items-center space-x-2">
                  <span class="flex items-center text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 7H7m0 0h-.01M7 7c0 1.065.318 2.091.88 2.939m0 0C7.318 12.909 7 13.935 7 15m0 0h7m0 0H7.01M14 15c0-1.065-.318-2.091-.88-2.939m0 0C14.682 9.091 15 8.065 15 7m0 0H8m6 0h.01"
                      />
                    </svg>
                    10
                  </span>
                  <span class="flex items-center text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 10h.01M12 14h.01M16 10h.01M9 21h6a2 2 0 002-2v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 002 2zm0 0H8v-6h8v6h-1M4 14h1v7h14v-7h1"
                      />
                    </svg>
                    5
                  </span>
                </div>
              </div>
              <p class="text-gray-600 mt-1">16 Dec, 2023</p>
              <p class="text-gray-600 mt-2">
                I recently had the opportunity to explore Pagedone's UI design
                system, and it left a lasting impression on my workflow. The
                system seamlessly blends user-friendly features with a robust
                set of design components, making it a go-to for creating
                visually stunning and consistent interfaces.
              </p>
              <div class="flex mt-2">
                <span class="text-yellow-500">⭐</span>
                <span class="text-yellow-500">⭐</span>
                <span class="text-yellow-500">⭐</span>
                <span class="text-yellow-500">⭐</span>
                <span class="text-yellow-500">⭐</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthInsuranceReview;
