import { useEffect, useState } from "react";
import Select from 'react-select';

// const ProfitCalculator = () => {
//     const [principalAmount, setPrincipalAmount] = useState("1,00,000");
//     const [principalAmountSlider, setPrincipalAmountSlider] = useState(100000);

//     const [annualInterestRate, setAnnualInterestRate] = useState(0);
//     const [tenure, setTenure] = useState(1); // in years
//     const [profit, setProfit] = useState(0);

//     const handleChange = (event) => {
//         const input = event.target.value;

//         let number = 0;
//         let formatted = 0;

//         if (input.length > 0) {
//             // Remove all non-numeric characters
//             const sanitizedInput = input.replace(/[^0-9]/g, '');

//             // Convert the cleaned number string to an integer
//             number = parseInt(sanitizedInput, 10);

//             // Format the number in Indian style
//             formatted = number.toLocaleString('en-IN');
//         }
//         // Set the formatted value with commas
//         setPrincipalAmount(formatted);

//         // Update the slider value
//         setPrincipalAmountSlider(number || 0);
//     };

//     useEffect(() => {
//         if (principalAmountSlider <= 0 || annualInterestRate <= 0 || tenure <= 0) return;

//         const P = principalAmountSlider;
//         const R = annualInterestRate / 100;
//         const N = tenure;

//         // Calculate final amount using compound interest formula
//         const finalAmount = P * Math.pow(1 + R, N);
//         const calculatedProfit = finalAmount - P;

//         const splitAmts = calculatedProfit.toFixed(2).split(".");
//         const finalProfit = Number(splitAmts[0]).toLocaleString("en-IN") + `.${splitAmts[1]}`;

//         setProfit(finalProfit);
//     }, [principalAmountSlider, annualInterestRate, tenure]);

//     return (
//         <section className="p-4 py-16 space-y-10">
//             <div className="flex justify-center">
//                 <div className="w-fit text-3xl font-semibold shadow-[0_3px#ff0000]">
//                     Calculate Your Funds
//                 </div>
//             </div>
//             <div className="flex justify-center py-10">
//                 <div className='grid grid-cols-5 rounded-2xl w-full md:w-2/3 bg-[#87CEFA]/80'>
//                     <div className="flex flex-col space-y-20 text-white rounded-l-2xl p-4 col-span-3">
//                         <div>
//                             <div className='flex justify-between'>
//                                 <label htmlFor="principal-amount" className="block mb-2 text-lg font-medium">Principal Amount</label>
//                                 <span>
//                                     <span className='px-2'>₹:</span>
//                                     <input
//                                         type="text"
//                                         id="principal-amount"
//                                         className='bg-transparent px-2 text-xl w-[200px] text-center'
//                                         value={principalAmount}
//                                         onChange={(e) => handleChange(e)}
//                                     />
//                                 </span>
//                             </div>
//                             <input
//                                 type="range"
//                                 value={principalAmountSlider}
//                                 onChange={(e) => handleChange(e)}
//                                 min={100000}
//                                 max={300000000}
//                                 className="w-full h-2 bg-red-800/50 accent-white rounded-lg appearance-none cursor-pointer"
//                             />
//                         </div>
//                         <div>
//                             <div className='flex justify-between'>
//                                 <label htmlFor="interest-rate" className="block mb-2 text-lg font-medium">Annual Interest Rate</label>
//                                 <span>
//                                     <span className='px-2'>%:</span>
//                                     <input
//                                         type="number"
//                                         id="interest-rate"
//                                         className='bg-transparent px-2 text-xl w-[200px] text-center'
//                                         value={annualInterestRate}
//                                         onChange={(e) => setAnnualInterestRate(e.target.value)}
//                                     />
//                                 </span>
//                             </div>
//                             <input
//                                 type="range"
//                                 value={annualInterestRate}
//                                 onChange={(e) => setAnnualInterestRate(e.target.value)}
//                                 min={0}
//                                 max={20}
//                                 step={0.01}
//                                 className="w-full h-2 bg-red-800/50 accent-white rounded-lg appearance-none cursor-pointer"
//                             />
//                         </div>

//                         <div>
//                             <div className='flex justify-between'>
//                                 <label htmlFor="tenure" className="block mb-2 text-lg font-medium">Tenure (in years)</label>
//                                 <span>
//                                     <span className='px-2'>Years:</span>
//                                     <input
//                                         type="number"
//                                         id="tenure"
//                                         className='bg-transparent px-2 text-xl w-[200px] text-center'
//                                         value={tenure}
//                                         onChange={(e) => setTenure(e.target.value)}
//                                     />
//                                 </span>
//                             </div>
//                             <input
//                                 type="range"
//                                 value={tenure}
//                                 onChange={(e) => setTenure(e.target.value)}
//                                 min={1}
//                                 max={30}
//                                 step={1}
//                                 className="w-full h-2 bg-red-800/50 accent-white rounded-lg appearance-none cursor-pointer"
//                             />
//                         </div>
//                     </div>
//                     <div className='border border-[#87CEFA]/80 bg-white flex flex-col justify-center items-center rounded-r-2xl col-span-2'>
//                         <div className='text-lg font-semibold'>Interest Earned:</div>
//                         <div className='text-2xl font-semibold'>₹ {profit}</div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ProfitCalculator;


import React from 'react'
import MutualFundCalculator from "./Calculators/MutualFundCalculator";
import EmiCalculator from "./Calculators/EmiCalculator";
import NpsCalculator from "./Calculators/NpsCalculator";
import LoanCalculator from "./Calculators/LoanCalculator";
import SipCalculator from "./Calculators/SipCalculator";

const CalculatorFunds = () => {
   const [currentCalculator,setCurrentCalcualtor] = useState('mutualFunds');
const typesOfCalculator = [ {label:"Mutual Funds",value:"mutualFunds"},{label:"Emi",value:"emi"}, {label:"Gold",value:"gold"} , {label:"NPS",value:"nps"} , {label:"Loan",value:"loan"}, {label:"Sip",value:"sip"} ];
   
useEffect(()=>{
  console.log("asdas",currentCalculator);
},[currentCalculator])


  
    return (
    <div className=" p-10">
      <p className="text-center text-4xl font-bold">Calculate Your Mutual Funds , Emi and Many More.</p>

     <p>
     Select Your Calculator
     <Select options={typesOfCalculator} defaultValue={{label:"Mutual Funds",value:"mutualFunds"}} onChange={(option)=>setCurrentCalcualtor(option.value) } />
     </p>
     <div>
        {currentCalculator === 'mutualFunds' &&<MutualFundCalculator/>}
        {currentCalculator === 'emi' && <EmiCalculator/>}
        {currentCalculator === 'nps' && <NpsCalculator/>}
        {currentCalculator === 'loan' && <LoanCalculator/>}
        {currentCalculator === 'sip' && <SipCalculator/>}
     </div>

    </div>
  )
}

export default CalculatorFunds
