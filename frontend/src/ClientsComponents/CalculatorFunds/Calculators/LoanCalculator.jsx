// src/LoanCalculator.js
import React, { useState } from 'react';

const LoanCalculator = () => {
    const [principal, setPrincipal] = useState(50000);
    const [annualRate, setAnnualRate] = useState(5);
    const [term, setTerm] = useState(12); // Term in months
    const [totalPayment, setTotalPayment] = useState(null);

    const calculateTotalPayment = () => {
        const P = parseFloat(principal);
        const r = Math.max(parseFloat(annualRate) / 100 / 12, 0.0001); // Prevent division by zero
        const n = parseFloat(term);

        if (isNaN(P) || isNaN(r) || isNaN(n) || n <= 0) {
            return;
        }

        const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalPayment = emi * n;

        setTotalPayment(totalPayment.toFixed(2));
    };

    return (
        <section className="p-4 py-16 space-y-10 bg-[#F0F8FF]">
            <div className="flex justify-center">
                <div className="text-3xl font-semibold shadow-[0_3px_#ff0000]">
                    Loan Total Payment Calculator
                </div>
            </div>
            <div className="flex justify-center py-10">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 rounded-2xl w-full md:w-2/3 bg-[#87CEFA]/80 p-6'>
                    <div className='flex flex-col space-y-10 text-white rounded-l-2xl'>
                        <div className='space-y-4'>
                            <div className='flex justify-between'>
                                <label htmlFor="principal" className="block mb-2 text-lg font-medium">Principal Amount</label>
                                <span className='flex items-center'>
                                    <span className='px-2'>₹</span>
                                    <input
                                        type="number"
                                        id="principal"
                                        className='bg-transparent px-2 text-xl w-32 text-center'
                                        value={principal}
                                        onChange={(e) => setPrincipal(e.target.value)}
                                    />
                                </span>
                            </div>
                            <input
                                type="range"
                                value={principal}
                                onChange={(e) => setPrincipal(e.target.value)}
                                min={10000}
                                max={5000000}
                                className="w-full h-2 bg-red-800/50 accent-white rounded-lg"
                            />
                        </div>
                        <div className='space-y-4'>
                            <div className='flex justify-between'>
                                <label htmlFor="annual-rate" className="block mb-2 text-lg font-medium">Annual Interest Rate</label>
                                <span className='flex items-center'>
                                    <span className='px-2'>%</span>
                                    <input
                                        type="number"
                                        id="annual-rate"
                                        className='bg-transparent px-2 text-xl w-32 text-center'
                                        value={annualRate}
                                        onChange={(e) => setAnnualRate(Math.max(e.target.value, 0.01))}
                                        min={0.01}
                                        step={0.01}
                                    />
                                </span>
                            </div>
                            <input
                                type="range"
                                value={annualRate}
                                onChange={(e) => setAnnualRate(Math.max(e.target.value, 0.01))}
                                min={0.01}
                                max={20}
                                step={0.01}
                                className="w-full h-2 bg-red-800/50 accent-white rounded-lg"
                            />
                        </div>
                        <div className='space-y-4'>
                            <div className='flex justify-between'>
                                <label htmlFor="term" className="block mb-2 text-lg font-medium">Loan Term (in months)</label>
                                <span className='flex items-center'>
                                    <span className='px-2'>Months</span>
                                    <input
                                        type="number"
                                        id="term"
                                        className='bg-transparent px-2 text-xl w-32 text-center'
                                        value={term}
                                        onChange={(e) => setTerm(e.target.value)}
                                    />
                                </span>
                            </div>
                            <input
                                type="range"
                                value={term}
                                onChange={(e) => setTerm(e.target.value)}
                                min={1}
                                max={360}
                                className="w-full h-2 bg-red-800/50 accent-white rounded-lg"
                            />
                        </div>
                    </div>
                    <div className='border border-[#87CEFA]/80 bg-white flex flex-col justify-center items-center rounded-r-2xl p-4'>
                        <div className='text-lg font-semibold'>Total Payment:</div>
                        <div className='text-2xl font-semibold'>₹ {totalPayment !== null ? totalPayment : '0.00'}</div>
                        <button 
                            onClick={calculateTotalPayment}
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

export default LoanCalculator;
