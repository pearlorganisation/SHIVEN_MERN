import { useEffect, useState } from "react";
import Select from "react-select";
import React from "react";
import MutualFundCalculator from "./Calculators/MutualFundCalculator";
import EmiCalculator from "./Calculators/EmiCalculator";
import NpsCalculator from "./Calculators/NpsCalculator";
import LoanCalculator from "./Calculators/LoanCalculator";
import SipCalculator from "./Calculators/SipCalculator";
import { Button } from "@mui/material";

const CalculatorFunds = () => {
   const [currentCalculator,setCurrentCalcualtor] = useState('mutualFunds');
const typesOfCalculator = [ {label:"Mutual Funds",value:"mutualFunds"},{label:"Emi",value:"emi"} , {label:"NPS",value:"nps"} , {label:"Loan",value:"loan"}, {label:"Sip",value:"sip"} ];
   
useEffect(()=>{
  console.log("asdas",currentCalculator);
},[currentCalculator])


  
    return (
    <div className=" p-5">
      <p className="text-center text-2xl font-bold">Calculate Your Mutual Funds , EMI and Many More.</p>

     {/* <p>
     Select Your Calculator
     <Select options={typesOfCalculator} defaultValue={{label:"Mutual Funds",value:"mutualFunds"}} onChange={(option)=>setCurrentCalcualtor(option.value) } />
     </p> */}
<div className="pt-5">
     {typesOfCalculator.map((item,idx)=>
 (
  <Button onClick={()=>setCurrentCalcualtor(item.value)} className={`${currentCalculator === item.value ? "!bg-white !outline-none " : "hover:!bg-white active:outline-none" } `}>{item.label}</Button>
 )
     ) }
     </div>
     <div>
        {currentCalculator === 'mutualFunds' &&<MutualFundCalculator/>}
        {currentCalculator === 'emi' && <EmiCalculator/>}
        {currentCalculator === 'nps' && <NpsCalculator/>}
        {currentCalculator === 'loan' && <LoanCalculator/>}
        {currentCalculator === 'sip' && <SipCalculator/>}
     </div>

    </div>
  );
};

export default CalculatorFunds;
