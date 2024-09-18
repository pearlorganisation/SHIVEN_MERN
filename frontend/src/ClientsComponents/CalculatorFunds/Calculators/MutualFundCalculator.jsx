// src/MutualFundCalculator.js
import React, { useState } from "react";

const MutualFundCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(1000);
  const [annualReturn, setAnnualReturn] = useState(5);
  const [investmentPeriod, setInvestmentPeriod] = useState(10);
  const [futureValue, setFutureValue] = useState(null);

  const calculateFutureValue = () => {
    const P = parseFloat(initialInvestment);
    const PMT = parseFloat(monthlyContribution);
    const r = Math.max(parseFloat(annualReturn) / 100 / 12, 0.0001); // Prevent division by zero
    const n = parseFloat(investmentPeriod) * 12;

    if (isNaN(P) || isNaN(PMT) || isNaN(r) || isNaN(n)) {
      return;
    }

    const futureValue =
      P * Math.pow(1 + r, n) + PMT * ((Math.pow(1 + r, n) - 1) / r);

    setFutureValue(futureValue.toFixed(2));
  };

  return (
    <section className="p-4 py-16 space-y-10 bg-[#F0F8FF]">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-2xl w-full md:w-2/3 bg-[#87CEFA]/80 p-6">
          <div className="flex flex-col space-y-10 text-white rounded-l-2xl">
            <div className="space-y-4">
              <div className="flex justify-between">
                <label
                  htmlFor="initial-investment"
                  className="block mb-2 text-lg font-medium"
                >
                  Initial Investment
                </label>
                <span className="flex items-center">
                  <span className="px-2">₹</span>
                  <input
                    type="number"
                    id="initial-investment"
                    className="bg-transparent px-2 text-xl w-32 text-center"
                    value={initialInvestment}
                    onChange={(e) => setInitialInvestment(e.target.value)}
                  />
                </span>
              </div>
              <input
                type="range"
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(e.target.value)}
                min={10000}
                max={1000000}
                className="w-full h-2 bg-red-800/50 accent-white rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <label
                  htmlFor="monthly-contribution"
                  className="block mb-2 text-lg font-medium"
                >
                  Monthly Contribution
                </label>
                <span className="flex items-center">
                  <span className="px-2">₹</span>
                  <input
                    type="number"
                    id="monthly-contribution"
                    className="bg-transparent px-2 text-xl w-32 text-center"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(e.target.value)}
                  />
                </span>
              </div>
              <input
                type="range"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(e.target.value)}
                min={1000}
                max={50000}
                className="w-full h-2 bg-red-800/50 accent-white rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <label
                  htmlFor="annual-return"
                  className="block mb-2 text-lg font-medium"
                >
                  Annual Return
                </label>
                <span className="flex items-center">
                  <span className="px-2">%</span>
                  <input
                    type="number"
                    id="annual-return"
                    className="bg-transparent px-2 text-xl w-32 text-center"
                    value={annualReturn}
                    onChange={(e) =>
                      setAnnualReturn(Math.max(e.target.value, 0.01))
                    }
                    min={0.01}
                    step={0.01}
                  />
                </span>
              </div>
              <input
                type="range"
                value={annualReturn}
                onChange={(e) =>
                  setAnnualReturn(Math.max(e.target.value, 0.01))
                }
                min={0.01}
                max={20}
                step={0.01}
                className="w-full h-2 bg-red-800/50 accent-white rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <label
                  htmlFor="investment-period"
                  className="block mb-2 text-lg font-medium"
                >
                  Investment Period
                </label>
                <span className="flex items-center">
                  <span className="px-2">Years</span>
                  <input
                    type="number"
                    id="investment-period"
                    className="bg-transparent px-2 text-xl w-32 text-center"
                    value={investmentPeriod}
                    onChange={(e) => setInvestmentPeriod(e.target.value)}
                  />
                </span>
              </div>
              <input
                type="range"
                value={investmentPeriod}
                onChange={(e) => setInvestmentPeriod(e.target.value)}
                min={1}
                max={30}
                className="w-full h-2 bg-red-800/50 accent-white rounded-lg"
              />
            </div>
          </div>
          <div className="border border-[#87CEFA]/80 bg-white flex flex-col justify-center items-center rounded-r-2xl p-4">
            <div className="text-lg font-semibold">Future Value:</div>
            <div className="text-2xl font-semibold">
              ₹ {futureValue !== null ? futureValue : "0.00"}
            </div>
            <button
              onClick={calculateFutureValue}
              className="mt-4 px-6 py-2 bg-red-800 text-white font-semibold rounded-lg hover:bg-red-600"
            >
              Calculate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MutualFundCalculator;
