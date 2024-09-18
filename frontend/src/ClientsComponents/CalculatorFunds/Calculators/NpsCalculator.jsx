// src/NpsCalculator.js
import React, { useState } from 'react';

const NpsCalculator = () => {
    const [initialInvestment, setInitialInvestment] = useState(10000);
    const [annualContribution, setAnnualContribution] = useState(2000);
    const [years, setYears] = useState(20);
    const [annualReturnRate, setAnnualReturnRate] = useState(8);
    const [finalAmount, setFinalAmount] = useState(null);

    const calculateNPS = () => {
        const P = parseFloat(initialInvestment);
        const A = parseFloat(annualContribution);
        const r = parseFloat(annualReturnRate) / 100;
        const n = parseFloat(years);

        if (isNaN(P) || isNaN(A) || isNaN(r) || isNaN(n) || n <= 0) {
            return;
        }

        const finalAmount = P * Math.pow(1 + r, n) + A * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
        
        setFinalAmount(finalAmount.toFixed(2));
    };

    return (
        <section className="p-4 py-5 space-y-10 bg-[#F0F8FF]">
          <div className="text-center text-xl">NPS Calculator</div>
            <div className="flex justify-center ">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 rounded-2xl w-full md:w-2/3 bg-[#87CEFA]/80 p-6'>
                    <div className='flex flex-col space-y-10 text-white rounded-l-2xl'>
                        <div className='space-y-4'>
                            <div className='flex justify-between'>
                                <label htmlFor="initial-investment" className="block mb-2 text-lg font-medium">Initial Investment</label>
                                <span className='flex items-center'>
                                    <span className='px-2'>₹</span>
                                    <input
                                        type="number"
                                        id="initial-investment"
                                        className='bg-transparent px-2 text-xl w-32 text-center'
                                        value={initialInvestment}
                                        onChange={(e) => setInitialInvestment(e.target.value)}
                                    />
                                </span>
                            </div>
                            <input
                                type="range"
                                value={initialInvestment}
                                onChange={(e) => setInitialInvestment(e.target.value)}
                                min={1000}
                                max={5000000}
                                className="w-full h-2 bg-red-800/50 accent-white rounded-lg"
                            />
                        </div>
                        <div className='space-y-4'>
                            <div className='flex justify-between'>
                                <label htmlFor="annual-contribution" className="block mb-2 text-lg font-medium">Annual Contribution</label>
                                <span className='flex items-center'>
                                    <span className='px-2'>₹</span>
                                    <input
                                        type="number"
                                        id="annual-contribution"
                                        className='bg-transparent px-2 text-xl w-32 text-center'
                                        value={annualContribution}
                                        onChange={(e) => setAnnualContribution(e.target.value)}
                                    />
                                </span>
                            </div>
                            <input
                                type="range"
                                value={annualContribution}
                                onChange={(e) => setAnnualContribution(e.target.value)}
                                min={1000}
                                max={500000}
                                className="w-full h-2 bg-red-800/50 accent-white rounded-lg"
                            />
                        </div>
                        <div className='space-y-4'>
                            <div className='flex justify-between'>
                                <label htmlFor="years" className="block mb-2 text-lg font-medium">Investment Duration (in years)</label>
                                <span className='flex items-center'>
                                    <span className='px-2'>Years</span>
                                    <input
                                        type="number"
                                        id="years"
                                        className='bg-transparent px-2 text-xl w-32 text-center'
                                        value={years}
                                        onChange={(e) => setYears(e.target.value)}
                                    />
                                </span>
                            </div>
                            <input
                                type="range"
                                value={years}
                                onChange={(e) => setYears(e.target.value)}
                                min={1}
                                max={40}
                                className="w-full h-2 bg-red-800/50 accent-white rounded-lg"
                            />
                        </div>
                        <div className='space-y-4'>
                            <div className='flex justify-between'>
                                <label htmlFor="annual-return-rate" className="block mb-2 text-lg font-medium">Annual Return Rate</label>
                                <span className='flex items-center'>
                                    <span className='px-2'>%</span>
                                    <input
                                        type="number"
                                        id="annual-return-rate"
                                        className='bg-transparent px-2 text-xl w-32 text-center'
                                        value={annualReturnRate}
                                        onChange={(e) => setAnnualReturnRate(Math.max(e.target.value, 0.01))}
                                        min={0.01}
                                        step={0.01}
                                    />
                                </span>
                            </div>
                            <input
                                type="range"
                                value={annualReturnRate}
                                onChange={(e) => setAnnualReturnRate(Math.max(e.target.value, 0.01))}
                                min={0.01}
                                max={20}
                                step={0.01}
                                className="w-full h-2 bg-red-800/50 accent-white rounded-lg"
                            />
                        </div>
                    </div>
                    <div className='border border-[#87CEFA]/80 bg-white flex flex-col justify-center items-center rounded-r-2xl p-4'>
                        <div className='text-lg font-semibold'>Estimated Final Amount:</div>
                        <div className='text-2xl font-semibold'>₹ {finalAmount !== null ? finalAmount : '0.00'}</div>
                        <button 
                            onClick={calculateNPS}
                            className='mt-4 px-6 py-2 bg-red-800 text-white font-semibold rounded-lg hover:bg-red-600'
                        >
                            Calculate
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NpsCalculator;
