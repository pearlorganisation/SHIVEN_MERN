import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const mutualFunds = [
  {
    id: 1,
    name: "ICICI Prudential BHARAT 22 FOF Direct Growth",
    logo: "https://assets-netstorage.groww.in/mf-assets/logos/icici_groww.png",
    risk: "Very High Risk",
    category: "Other",
    rating: "5 ★",
    returns: {
      "1Y": "63.47%",
      "3Y": "40.39%",
      "5Y": "27.58%",
    },
    expenseRatio: "1.5%",
    nav: "₹18.45",
    allocation: {
      equity: 60,
      debt: 25,
      cash: 15,
    },
    sectors: {
      financial: 30,
      automobile: 20,
      other: 50,
    },
  },
  // Add more mutual funds here as needed
];

const MutualfundDetails = () => {
  const fund = mutualFunds[0]; // For simplicity, using the first fund

  const allocationData = {
    labels: ["Equity", "Debt", "Cash"],
    datasets: [
      {
        label: "Allocation (%)",
        data: [
          fund.allocation.equity,
          fund.allocation.debt,
          fund.allocation.cash,
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const sectorData = {
    labels: ["Financial", "Automobile", "Other"],
    datasets: [
      {
        label: "Sector Allocation (%)",
        data: [
          fund.sectors.financial,
          fund.sectors.automobile,
          fund.sectors.other,
        ],
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4 md:p-6 bg-gray-100">
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row items-center p-4 md:p-6 bg-white shadow-lg rounded-lg">
          <img
            src={fund.logo}
            alt={fund.name}
            className="w-16 h-16 mb-4 md:mb-0 md:mr-6"
          />
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold">{fund.name}</h2>
            <p className="text-sm md:text-base text-gray-600">
              {fund.risk} • {fund.category} • {fund.rating}
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Fund Overview:</h3>
              <p className="text-sm text-gray-700">
                This fund aims to generate long-term capital growth through
                investments in a diversified portfolio of equity and debt
                securities.
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Fund Details:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                <div>
                  <p className="text-lg font-semibold">{fund.returns["1Y"]}</p>
                  <p className="text-sm text-gray-500">1Y Return</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">{fund.returns["3Y"]}</p>
                  <p className="text-sm text-gray-500">3Y Return</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">{fund.returns["5Y"]}</p>
                  <p className="text-sm text-gray-500">5Y Return</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Additional Info:</h3>
              <p className="text-sm text-gray-700">
                Expense Ratio: {fund.expenseRatio} | NAV: {fund.nav}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 md:p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Allocation</h3>
            <div className="relative" style={{ height: "300px" }}>
              <Pie
                data={allocationData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: { position: "top" },
                    tooltip: {
                      callbacks: {
                        label: (context) => `${context.label}: ${context.raw}%`,
                      },
                    },
                  },
                }}
              />
            </div>
          </div>

          <div className="bg-white p-4 md:p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Sector Allocation</h3>
            <div className="relative" style={{ height: "300px" }}>
              <Pie
                data={sectorData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: { position: "top" },
                    tooltip: {
                      callbacks: {
                        label: (context) => `${context.label}: ${context.raw}%`,
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MutualfundDetails;
