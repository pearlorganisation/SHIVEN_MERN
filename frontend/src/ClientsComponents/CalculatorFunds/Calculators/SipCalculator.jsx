// src/SipCalculator.js
import React, { useState } from 'react';

const SipCalculator = () => {
    // States for SIP Calculation
    const [sipAmount, setSipAmount] = useState(1000);
    const [sipRate, setSipRate] = useState(12); // Annual return rate
    const [sipTerm, setSipTerm] = useState(12); // Term in months
    const [sipFutureValue, setSipFutureValue] = useState(null);

    // States for Lump Sum Calculation
    const [lumpSumAmount, setLumpSumAmount] = useState(10000);
    const [lumpSumRate, setLumpSumRate] = useState(12); // Annual return rate
    const [lumpSumTerm, setLumpSumTerm] = useState(12); // Term in months
    const [lumpSumFutureValue, setLumpSumFutureValue] = useState(null);

    // State to manage the active tab
    const [activeTab, setActiveTab] = useState('sip');

    const calculateSip = () => {
        const P = parseFloat(sipAmount);
        const r = parseFloat(sipRate) / 100 / 12;
        const n = parseFloat(sipTerm);

        if (isNaN(P) || isNaN(r) || isNaN(n) || n <= 0) {
            return;
        }

        const futureValue = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
        setSipFutureValue(futureValue.toFixed(2));
    };

    const calculateLumpSum = () => {
        const P = parseFloat(lumpSumAmount);
        const r = parseFloat(lumpSumRate) / 100 / 12;
        const n = parseFloat(lumpSumTerm);

        if (isNaN(P) || isNaN(r) || isNaN(n) || n <= 0) {
            return;
        }

        const futureValue = P * Math.pow(1 + r, n);
        setLumpSumFutureValue(futureValue.toFixed(2));
    };

    return (
        <section className="p-4 py-5 space-y-10 bg-[#F0F8FF]">
            <div className="text-center text-xl">SIP Calculator</div>
            <div className="flex  justify-center ">
                <div className='w-full md:w-2/3 bg-[#87CEFA]/80 rounded-2xl'>
                    {/* Tab Navigation */}
                    <div className="flex border-b border-gray-200">
                        <button
                            onClick={() => setActiveTab('sip')}
                            className={`w-1/2 py-2 text-lg font-medium ${activeTab === 'sip' ? 'bg-white text-blue-600 border-b-2 border-blue-600' : 'bg-gray-200'}`}
                        >
                            SIP Calculator
                        </button>
                        <button
                            onClick={() => setActiveTab('lumpSum')}
                            className={`w-1/2 py-2 text-lg font-medium ${activeTab === 'lumpSum' ? 'bg-white text-blue-600 border-b-2 border-blue-600' : 'bg-gray-200'}`}
                        >
                            Lump Sum Calculator
                        </button>
                    </div>

                    {/* SIP Calculator Section */}
                    {activeTab === 'sip' && (
                        <div className='p-6 space-y-10 text-white'>
                            <div className='text-2xl font-semibold'>SIP Calculation</div>
                            <div className='space-y-4'>
                                <div className='flex justify-between'>
                                    <label htmlFor="sip-amount" className="block mb-2 text-lg font-medium">Monthly SIP Amount</label>
                                    <span className='flex items-center'>
                                        <span className='px-2'>₹</span>
                                        <input
                                            type="number"
                                            id="sip-amount"
                                            className='bg-transparent px-2 text-xl w-32 text-center'
                                            value={sipAmount}
                                            onChange={(e) => setSipAmount(e.target.value)}
                                        />
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    value={sipAmount}
                                    onChange={(e) => setSipAmount(e.target.value)}
                                    min={100}
                                    max={100000}
                                    className="w-full h-2 bg-red-800/50 accent-white rounded-lg"
                                />
                            </div>
                            <div className='space-y-4'>
                                <div className='flex justify-between'>
                                    <label htmlFor="sip-rate" className="block mb-2 text-lg font-medium">Annual Return Rate</label>
                                    <span className='flex items-center'>
                                        <span className='px-2'>%</span>
                                        <input
                                            type="number"
                                            id="sip-rate"
                                            className='bg-transparent px-2 text-xl w-32 text-center'
                                            value={sipRate}
                                            onChange={(e) => setSipRate(Math.max(e.target.value, 0.01))}
                                            min={0.01}
                                            step={0.01}
                                        />
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    value={sipRate}
                                    onChange={(e) => setSipRate(Math.max(e.target.value, 0.01))}
                                    min={0.01}
                                    max={20}
                                    step={0.01}
                                    className="w-full h-2 bg-red-800/50 accent-white rounded-lg"
                                />
                            </div>
                            <div className='space-y-4'>
                                <div className='flex justify-between'>
                                    <label htmlFor="sip-term" className="block mb-2 text-lg font-medium">Investment Term (in months)</label>
                                    <span className='flex items-center'>
                                        <span className='px-2'>Months</span>
                                        <input
                                            type="number"
                                            id="sip-term"
                                            className='bg-transparent px-2 text-xl w-32 text-center'
                                            value={sipTerm}
                                            onChange={(e) => setSipTerm(e.target.value)}
                                        />
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    value={sipTerm}
                                    onChange={(e) => setSipTerm(e.target.value)}
                                    min={1}
                                    max={360}
                                    className="w-full h-2 bg-red-800/50 accent-white rounded-lg"
                                />
                            </div>
                            <div className='text-lg font-semibold'>Future Value of SIP:</div>
                            <div className='text-2xl font-semibold'>₹ {sipFutureValue !== null ? sipFutureValue : '0.00'}</div>
                            <button 
                                onClick={calculateSip}
                                className='mt-4 px-6 py-2 bg-red-800 text-white font-semibold rounded-lg hover:bg-red-600'
                            >
                                Calculate SIP
                            </button>
                        </div>
                    )}

                    {/* Lump Sum Calculator Section */}
                    {activeTab === 'lumpSum' && (
                        <div className='p-6 space-y-10 bg-purple-200  text-black'>
                            <div className='text-2xl font-semibold'>Lump Sum Calculation</div>
                            <div className='space-y-4'>
                                <div className='flex justify-between'>
                                    <label htmlFor="lump-sum-amount" className="block mb-2 text-lg font-medium">Lump Sum Investment</label>
                                    <span className='flex items-center'>
                                        <span className='px-2'>₹</span>
                                        <input
                                            type="number"
                                            id="lump-sum-amount"
                                            className='bg-transparent px-2 text-xl w-32 text-center'
                                            value={lumpSumAmount}
                                            onChange={(e) => setLumpSumAmount(e.target.value)}
                                        />
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    value={lumpSumAmount}
                                    onChange={(e) => setLumpSumAmount(e.target.value)}
                                    min={1000}
                                    max={5000000}
                                    className="w-full h-2 bg-red-800/50 accent-white rounded-lg"
                                />
                            </div>
                            <div className='space-y-4'>
                                <div className='flex justify-between'>
                                    <label htmlFor="lump-sum-rate" className="block mb-2 text-lg font-medium">Annual Return Rate</label>
                                    <span className='flex items-center'>
                                        <span className='px-2'>%</span>
                                        <input
                                            type="number"
                                            id="lump-sum-rate"
                                            className='bg-transparent px-2 text-xl w-32 text-center'
                                            value={lumpSumRate}
                                            onChange={(e) => setLumpSumRate(Math.max(e.target.value, 0.01))}
                                            min={0.01}
                                            step={0.01}
                                        />
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    value={lumpSumRate}
                                    onChange={(e) => setLumpSumRate(Math.max(e.target.value, 0.01))}
                                    min={0.01}
                                    max={20}
                                    step={0.01}
                                    className="w-full h-2 bg-red-800/50 accent-white rounded-lg"
                                />
                            </div>
                            <div className='space-y-4'>
                                <div className='flex justify-between'>
                                    <label htmlFor="lump-sum-term" className="block mb-2 text-lg font-medium">Investment Term (in months)</label>
                                    <span className='flex items-center'>
                                        <span className='px-2'>Months</span>
                                        <input
                                            type="number"
                                            id="lump-sum-term"
                                            className='bg-transparent px-2 text-xl w-32 text-center'
                                            value={lumpSumTerm}
                                            onChange={(e) => setLumpSumTerm(e.target.value)}
                                        />
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    value={lumpSumTerm}
                                    onChange={(e) => setLumpSumTerm(e.target.value)}
                                    min={1}
                                    max={360}
                                    className="w-full h-2 bg-red-800/50 accent-white rounded-lg"
                                />
                            </div>
                            <div className='text-lg font-semibold'>Future Value of Lump Sum:</div>
                            <div className='text-2xl font-semibold'>₹ {lumpSumFutureValue !== null ? lumpSumFutureValue : '0.00'}</div>
                            <button 
                                onClick={calculateLumpSum}
                                className='mt-4 px-6 py-2 bg-red-800 text-white font-semibold rounded-lg hover:bg-red-600'
                            >
                                Calculate Lump Sum
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SipCalculator;
