import React from "react";

const FillForm = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-xl md:text-3xl font-medium p-10">
          Fill this form to view the plan{" "}
        </h1>
      </div>

      <div class="container mx-auto p-5 ">
        <div class="max-w-md mx-auto">
          <form>
            <div class="mb-4">
              <label class="block mb-2 font-semibold">Who am I?</label>
              <div class="flex items-center">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  class="mr-2"
                />
                <label for="male">Male</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  class="mr-2 ml-4"
                />
                <label for="female">Female</label>
              </div>
            </div>

            <div class="mb-4">
              <label class="block mb-2 font-semibold">
                Who needs coverage?
              </label>
              <div class="flex flex-wrap">
                <button
                  type="button"
                  class="mr-2 mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Myself
                </button>
                <button
                  type="button"
                  class="mr-2 mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Father
                </button>
                <button
                  type="button"
                  class="mr-2 mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Mother
                </button>
              </div>
            </div>

            <div class="mb-4">
              <label class="block mb-2 font-semibold">Date of Birth</label>
              <input
                type="date"
                class="border border-gray-300 px-4 py-2 rounded w-full"
                placeholder="Select Date"
              />
            </div>

            <div class="mb-4">
              <label class="block mb-2 font-semibold">
                Select Disease (if any)
              </label>
              <select class="border border-gray-300 px-4 py-2 rounded w-full">
                <option value="none">None</option>
                <option value="heart">Heart Disease</option>
                <option value="diabetes">Diabetes</option>
              </select>
            </div>

            <div class="mb-4">
              <label class="block mb-2 font-semibold">Personal Details</label>
              <input
                type="text"
                class="border border-gray-300 px-4 py-2 rounded mb-2 w-full"
                placeholder="Name"
              />
              <input
                type="text"
                class="border border-gray-300 px-4 py-2 rounded mb-2 w-full"
                placeholder="PIN Code"
              />
              <input
                type="tel"
                class="border border-gray-300 px-4 py-2 rounded mb-2 w-full"
                placeholder="Phone Number"
              />
            </div>

            <button
              type="button"
              class="bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600"
            >
              View Policy
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FillForm;
