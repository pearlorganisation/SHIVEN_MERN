import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CircleLoader } from "react-spinners";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Loans = () => {
  const [isLoading, setIsLoading] = useState(false);

  const fields = [
    { name: "nameOfDebtor", placeholder: "Name of Debtor", type: "text" },
    { name: "nameOfCompanyOrBank", placeholder: "Name of Company / Bank", type: "text" },
    { name: "typeOfLoan", placeholder: "Type of Loan", type: "text" },
    { name: "loanCommencementDate", placeholder: "Loan Commencement Date", type: "date" },
    { name: "loanClosureDate", placeholder: "Loan Closure Date", type: "date" },
    { name: "emiAmount", placeholder: "EMI Amount", type: "number" },
    { name: "emiDate", placeholder: "EMI Date", type: "date" },
    { name: "principalAmount", placeholder: "Principal Amount", type: "number" },
    { name: "interestAmount", placeholder: "Interest Amount", type: "number" },
    { name: "penalty", placeholder: "Penalty", type: "number" },
    { name: "emi", placeholder: "EMI", type: "number" },
    { name: "balance", placeholder: "Balance", type: "number" }
  ];
  

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setFocus,
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true); // Simulate loading
    setTimeout(() => {
      console.log(data);
      setIsLoading(false); // Stop loading after submission
    }, 2000); // Simulate form processing delay
  };



  return (
    <div className="min-h-screen text-gray-900 flex justify-center">
      <div className="w-full p-4 m-0 sm:m-5 bg-white shadow sm:rounded-lg">
        <div className="w-full flex justify-between">
          <h1 className="font-bold text-blue-600 text-sm sm:text-lg md:text-xl">
          Loans
          </h1>
         
        </div>
        <div className="w-full flex-1 mt-8">
  <form className="grid grid-cols-2  gap-5" onSubmit={handleSubmit(onSubmit)}>    
    {fields.map((field) => (
          <div className="flex flex-col gap-2" key={field.name}>
       
            <div class="relative">
    <input  type={field.type} 
              placeholder={""} 
              {...register(field.name, {
                required: {
                  value: true,
                  message: `${field.placeholder} is a required field`,
                },
              })} id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-nonefocus:outline-none focus:ring-0 focus:border-blue-600 peer" />
    <label for="floating_outlined" class="absolute  text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{field.placeholder}</label>
</div>
            {errors[field.name] && (
              <p className="text-red-500 mt-1 text-xs">
                {errors[field.name]?.message || `${field.placeholder} is required`}
              </p>
            )}
          </div>
        ))}

        <button
          className="mt-5 tracking-wide text-base font-semibold bg-green-400 text-white w-full md:w-[200px] py-3 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <CircleLoader />
          ) : (
            <>
              <span className="ml-3">Save</span>
            </>
          )}
        </button>

        <p className="mt-6 text-xs text-gray-600 text-center">
          Shiven Consultancy <br />
        </p>
      </form>
</div>

      </div>
    </div>
  );
};

export default Loans;
