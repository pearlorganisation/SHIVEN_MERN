import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { RxCross2 } from "react-icons/rx";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = (
{
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Total_Investment = () => {
  return (
    <>
      <div className="min-h-screen bg-white p-5 md:p-10">
        <section className="mb-10">
          <div className="grid md:grid-cols-3 gap-0 border border-red-500">
            <div className="border border-blue-500 ">
              {" "}
              <PieChart
                width={400}
                height={400}
                className="border border-red-500"
              >
                <Pie
                  data={data}
                  cx={180}
                  cy={100}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
            <div className="border border-green-500 flex flex-col items-center">
              <div class="flex flex-col space-y-2">
                <div class="flex items-center space-x-2">
                  <div class="h-4 w-4 rounded-full bg-[#FDBA74]"></div>
                  <div>Quant Infrastructure Fund</div>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="h-4 w-4 rounded-full bg-[#818CF8]"></div>
                  <div>Quant Infrastructure Fund</div>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="h-4 w-4 rounded-full bg-[#6EE7B7]"></div>
                  <div>Quant Infrastructure Fund</div>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="h-4 w-4 rounded-full bg-[#F472B6]"></div>
                  <div>Quant Infrastructure Fund</div>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="h-4 w-4 rounded-full bg-[#A78BFA]"></div>
                  <div>Quant Infrastructure Fund</div>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-6 border border-red-600">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      This Month's Investment
                    </span>
                    <span className="text-sm font-medium text-gray-700">
                      ₹80,000
                    </span>
                  </div>
                  <div className="w-full bg-gray-300 h-2.5 rounded-full">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{
                        width: "50%",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      Total Investment
                    </span>
                    <span className="text-sm font-medium text-gray-700">
                      ₹80,00,00,000
                    </span>
                  </div>
                  <div className="w-full bg-gray-300 h-2.5 rounded-full">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{
                        width: "70%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10"></section>
        <section>
          <h2 className="text-xl font-semibold mb-5">Notification</h2>
          <div className="grid grid-cols-1 gap-5">
            <div className="flex items-center justify-between bg-blue-100 p-4 rounded-md">
              <p className="text-sm">Payment of ₹5000 has been processed</p>
              <p className="text-xs">15 March 2024</p>
              <RxCross2 />
            </div>
            <div className="flex items-center justify-between bg-yellow-100 p-4 rounded-md">
              <p className="text-sm">
                We were unable to process payment for your recurring
                subscription
              </p>
              <p className="text-xs">14 March 2024</p>
              <RxCross2 />
            </div>
            <div className="flex items-center justify-between bg-red-100 p-4 rounded-md">
              <p className="text-sm">
                Your Policy will be expiring on 15th March 2024
              </p>
              <p className="text-xs">10 March 2024</p>
              <RxCross2 />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Total_Investment;
