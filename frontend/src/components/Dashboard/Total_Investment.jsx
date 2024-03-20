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
const renderCustomizedLabel = ({
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
      <div className="min-h-screen bg-white p-5 md:p-10 ">
        <div className="grid md:grid-cols-3 gap-0">
          <div>
            <h1 className="text text-2xl font-semibold ">Total Investment</h1>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-0 py-5">
          <div className="">
            <span className="text text-md font-medium p-2">Life Insurance</span>

            <div className="flex flex-col md:flex-row">
              <div className=" flex justify-center">
                <PieChart width={230} height={200} className="">
                  <Pie
                    data={data}
                    cx={100}
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

              <div className=" p-5">
                <div className=" flex flex-col items-center">
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
              </div>
            </div>
          </div>

          <div>
            <span className="text text-md font-medium p-2">
              Gernal Insurance
            </span>

            <div className="flex flex-col md:flex-row">
              <div className=" flex justify-center">
                <PieChart width={250} height={200} className="">
                  <Pie
                    data={data}
                    cx={100}
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

              <div className="">
                <div className=" flex flex-col items-center">
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
              </div>
            </div>
          </div>

          <div>
            <span className="text text-md font-medium p-2">
              Motor Insurance
            </span>

            <div className="flex flex-col md:flex-row">
              <div className=" flex justify-center">
                <PieChart width={250} height={200} className="">
                  <Pie
                    data={data}
                    cx={100}
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

              <div className="">
                <div className=" flex flex-col items-center">
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
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="bg-white p-6">
            <h1 className="text-2xl font-semibold mb-6">Purchases</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                    Motor Plan
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Star Health Insurance
                  </p>
                </div>
                <div className="p-6">
                  <div className="flex flex-col  md:flex-row items-center">

                    <div>
                      <p>Policy Number - P/012345/01/0123/012345</p>
                    </div>
                    <div> 
                      <img
                      src="https://healthstatic.insurancedekho.com/prod/oem_image/1589437596.jpg"
                      alt="Insurance Image"
                      width="100"
                      height="100"
                      className="ml-4 object-cover rounded-lg"
                      style={{ aspectRatio: "100 / 100", objectFit: "cover" }}
                    />
                    </div>
                    
                    
                  

                  </div>
                  <p>Created Date - 05 March 2024</p>
                  <p>Expiry Date - 04 March 2025</p>
                  <p>Mr. GAURAV NEGI</p>
                </div>

                <div className="items-center flex flex-col lg:flex-row justify-around ">
                  
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-500"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>{" "}
                    Policy Download
                  </button>
                 
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-500"
                    >
                      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                      <path d="M21 3v5h-5"></path>
                      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                      <path d="M8 16H3v5"></path>
                    </svg>{" "}
                    Renew Now
                  </button>
                  
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-500"
                    >
                      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"></path>
                      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                      <path d="M12 17V7"></path>
                    </svg>{" "}
                    Receipt Download
                  </button>
                
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                    Life Plan
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Star Health Insurance
                  </p>
                </div>
                <div className="p-6">
                  <div className="flex items-center flex-col  md:flex-row">
                     <div> <p>Policy Number - P/012345/01/0123/012345</p></div> 
                     <div> <img
                      src="/https://healthstatic.insurancedekho.com/prod/oem_image/1589358566.jpg"
                      alt="Insurance Image"
                      width="100"
                      height="100"
                      className="ml-4 object-cover rounded-lg"
                      style={{ aspectRatio: "100 / 100", objectFit: "cover" }}
                    /></div>
                   
                  </div>
                  <p>Created Date - 05 March 2024</p>
                  <p>Expiry Date - 04 March 2025</p>
                  <p>Mr. GAURAV NEGI</p>
                </div>
                <div className="items-center flex flex-col lg:flex-row  justify-around">
                  
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24" 
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-500"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>{" "}
                    Policy Download
                  </button>

                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-500"
                    >
                      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                      <path d="M21 3v5h-5"></path>
                      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                      <path d="M8 16H3v5"></path>
                    </svg>{" "}
                    Renew Now
                  </button>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-500"
                    >
                      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"></path>
                      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                      <path d="M12 17V7"></path>
                    </svg>{" "}
                    Receipt Download
                  </button>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                    Health Plan
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Star Health Insurance
                  </p>
                </div>
                <div className="p-6">
                  <div className="flex items-center flex-col  md:flex-row">
                    <div><p>Policy Number - P/012345/01/0123/012345</p></div>
                     <div><img
                      src="https://healthstatic.insurancedekho.com/prod/oem_image/1598957797.jpg"
                      alt="Insurance Image"
                      width="100"
                      height="100"
                      className="ml-4 object-cover rounded-lg"
                      style={{ aspectRatio: "100 / 100", objectFit: "cover" }}
                    /></div>
                    
                  </div>
                  <p>Created Date - 05 March 2024</p>
                  <p>Expiry Date - 04 March 2025</p>
                  <p>Mr. GAURAV NEGI</p>
                </div>
                <div className="items-center p-6 flex flex-col lg:flex-row  justify-around">
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-500"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>{" "}
                    Policy Download
                  </button>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-500"
                    >
                      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                      <path d="M21 3v5h-5"></path>
                      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                      <path d="M8 16H3v5"></path>
                    </svg>{" "}
                    Renew Now
                  </button>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-500"
                    >
                      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"></path>
                      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                      <path d="M12 17V7"></path>
                    </svg>{" "}
                    Receipt Download
                  </button>
                </div>
              </div>
              {/* Repeat similar structure for other cards */}
            </div>
          </div>
        </section>

        <h2 className="text-xl font-semibold mb-5 p-5">Notification</h2>
        <div className="grid grid-cols-1 gap-5">
          <div className="flex items-center justify-between bg-blue-100 p-4 rounded-md">
            <p className="text-sm">Payment of ₹5000 has been processed</p>
            <p className="text-xs">15 March 2024</p>
            <RxCross2 />
          </div>
          <div className="flex items-center justify-between bg-yellow-100 p-4 rounded-md">
            <p className="text-sm">
              We were unable to process payment for your recurring subscription
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
      </div>
    </>
  );
};

export default Total_Investment;
