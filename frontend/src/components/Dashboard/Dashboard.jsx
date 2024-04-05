import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
import { RxCross2 } from "react-icons/rx";
import { GrDocumentText } from "react-icons/gr";
import { MdOutlineAutorenew } from "react-icons/md";
import { CiReceipt } from "react-icons/ci";

const data = [
  { name: "Page A", uv: 4000, amt: 2400 },
  { name: "Page B", uv: 3000, amt: 2210 },
  { name: "Page C", uv: 2000, amt: 2290 },
  { name: "Page D", uv: 2780, amt: 2000 },
  { name: "Page E", uv: 1890, amt: 2181 },
  { name: "Page F", uv: 2390, amt: 2500 },
  { name: "Page G", uv: 3490, amt: 2100 },
];
const Total_Investment = () => {
  return (
    <>
      <div className="min-h-screen bg-white p-6 md:p-10 overflow-hidden w-[100%]">
        <div>
          <h1 className="text-2xl font-semibold mb-6">Total Investment</h1>
        </div>
        <section>
          <div className="grid md:grid-cols-4 lg:grid-cols-5">
            {[
              "Life Insurance",
              "General Insurance",
              "Motor Insurance",
              "Mutual Funds",
              "Loans",
            ].map((el, i) => {
              return (
                <>
                  <div className="">
                    <div className="p-10 text font-medium text-lg">{el}</div>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />

                        <Bar dataKey="uv" fill="#25f5ee" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </>
              );
            })}
          </div>
        </section>

        <section>
          <div className="bg-white p-6">
            <h1 className="text-2xl font-semibold mb-6">Purchases</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
              <div>
                <div className="max-w-[350px] shadow-2xl p-2 py-5 rounded-md pl-4">
                  <div className=" ">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="text-xs">Health Plan</h4>
                        <h1 className=".roboto-regular font-semibold">Star Health Insurance</h1>
                      </div>
                      <img src="https://healthstatic.insurancedekho.com/prod/oem_image/1589437596.jpg" alt="insurance iamge" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs">Policy Number - </h4>
                    <h1 className=".roboto-regular font-semibold">P/012345/01/0123/012345</h1>
                  </div>
                  <div>
                    <div className="flex gap-3 my-2">
                      <div>
                        <h4 className="text-xs">Created Date - </h4>
                        <h1 className=".roboto-regular font-semibold">05 March 2024</h1>
                      </div>
                      <div>
                        <h4 className="text-xs">Expiry Date - </h4>
                        <h1 className=".roboto-regular font-semibold">04 March 2025</h1>
                      </div>
                    </div>
                    <h1 className=".roboto-regular font-semibold">Mr Gaurav Negi</h1>

                  </div>
                </div>
                <div className="flex gap-5 p-2">
                  <div className="flex flex-col justify-center items-center"><div className="bg-blue-500 h-12 w-12 rounded-full flex justify-center items-center"><GrDocumentText size={25} color="white" /></div><p className="text-xs text-center"> Policy <br />Download</p></div>
                  <div className="flex flex-col justify-center items-center"><div className="bg-blue-500 h-12 w-12 rounded-full flex justify-center items-center"><MdOutlineAutorenew size={25} color="white" /></div><p className="text-xs text-center"> Renew <br />Now</p></div>
                  <div className="flex flex-col justify-center items-center"><div className="bg-blue-500 h-12 w-12 rounded-full flex justify-center items-center"><CiReceipt size={25} color="white" /></div><p className="text-xs text-center"> Receipt <br />Download</p></div>
                </div>
              </div>
              <div>
                <div className="max-w-[350px] shadow-2xl p-2 py-5 rounded-md pl-4">
                  <div className=" ">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="text-xs">Health Plan</h4>
                        <h1 className=".roboto-regular font-semibold">Star Health Insurance</h1>
                      </div>
                      <img src="https://healthstatic.insurancedekho.com/prod/oem_image/1589437596.jpg" alt="insurance iamge" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs">Policy Number - </h4>
                    <h1 className=".roboto-regular font-semibold">P/012345/01/0123/012345</h1>
                  </div>
                  <div>
                    <div className="flex gap-3 my-2">
                      <div>
                        <h4 className="text-xs">Created Date - </h4>
                        <h1 className=".roboto-regular font-semibold">05 March 2024</h1>
                      </div>
                      <div>
                        <h4 className="text-xs">Expiry Date - </h4>
                        <h1 className=".roboto-regular font-semibold">04 March 2025</h1>
                      </div>
                    </div>
                    <h1 className=".roboto-regular font-semibold">Mr Gaurav Negi</h1>

                  </div>
                </div>
                <div className="flex gap-5 p-2">
                  <div className="flex flex-col justify-center items-center"><div className="bg-blue-500 h-12 w-12 rounded-full flex justify-center items-center"><GrDocumentText size={25} color="white" /></div><p className="text-xs text-center"> Policy <br />Download</p></div>
                  <div className="flex flex-col justify-center items-center"><div className="bg-blue-500 h-12 w-12 rounded-full flex justify-center items-center"><MdOutlineAutorenew size={25} color="white" /></div><p className="text-xs text-center"> Renew <br />Now</p></div>
                  <div className="flex flex-col justify-center items-center"><div className="bg-blue-500 h-12 w-12 rounded-full flex justify-center items-center"><CiReceipt size={25} color="white" /></div><p className="text-xs text-center"> Receipt <br />Download</p></div>
                </div>
              </div>
              <div>
                <div className="max-w-[350px] shadow-2xl p-2 py-5 rounded-md pl-4">
                  <div className=" ">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="text-xs">Health Plan</h4>
                        <h1 className=".roboto-regular font-semibold">Star Health Insurance</h1>
                      </div>
                      <img src="https://healthstatic.insurancedekho.com/prod/oem_image/1589437596.jpg" alt="insurance iamge" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs">Policy Number - </h4>
                    <h1 className=".roboto-regular font-semibold">P/012345/01/0123/012345</h1>
                  </div>
                  <div>
                    <div className="flex gap-3 my-2">
                      <div>
                        <h4 className="text-xs">Created Date - </h4>
                        <h1 className=".roboto-regular font-semibold">05 March 2024</h1>
                      </div>
                      <div>
                        <h4 className="text-xs">Expiry Date - </h4>
                        <h1 className=".roboto-regular font-semibold">04 March 2025</h1>
                      </div>
                    </div>
                    <h1 className=".roboto-regular font-semibold">Mr Gaurav Negi</h1>

                  </div>
                </div>
                <div className="flex gap-5 p-2">
                  <div className="flex flex-col justify-center items-center"><div className="bg-blue-500 h-12 w-12 rounded-full flex justify-center items-center"><GrDocumentText size={25} color="white" /></div><p className="text-xs text-center"> Policy <br />Download</p></div>
                  <div className="flex flex-col justify-center items-center"><div className="bg-blue-500 h-12 w-12 rounded-full flex justify-center items-center"><MdOutlineAutorenew size={25} color="white" /></div><p className="text-xs text-center"> Renew <br />Now</p></div>
                  <div className="flex flex-col justify-center items-center"><div className="bg-blue-500 h-12 w-12 rounded-full flex justify-center items-center"><CiReceipt size={25} color="white" /></div><p className="text-xs text-center"> Receipt <br />Download</p></div>
                </div>
              </div>
              {/* <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full overflow-hidden ">
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

                <div className="items-center flex flex-col  justify-around ">
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
              </div> */}

              {/* <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full overflow-hidden">
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
                    <div>
                      {" "}
                      <p>Policy Number - P/012345/01/0123/012345</p>
                    </div>
                    <div>
                      {" "}
                      <img
                        src="/https://healthstatic.insurancedekho.com/prod/oem_image/1589358566.jpg"
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
              </div> */}
              {/* <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full overflow-hidden">
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
                    <div>
                      <p>Policy Number - P/012345/01/0123/012345</p>
                    </div>
                    <div>
                      <img
                        src="https://healthstatic.insurancedekho.com/prod/oem_image/1598957797.jpg"
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
              </div> */}
              {/* Repeat similar structure for other cards */}
            </div>
          </div>
        </section>

        <h2 className="text-xl font-semibold mb-5 p-5">Notification</h2>
        <div className="grid grid-cols-1 gap-5">
          <div className="flex items-center justify-between bg-blue-100 p-4 rounded-md">
            <p className="text-xs">Payment of ₹5000 has been processed</p>
            <p className="text-xs">15 March 2024</p>
            <RxCross2 />
          </div>
          <div className="flex items-center justify-between bg-yellow-100 p-4 rounded-md">
            <p className="text-xs">
              We were unable to process payment for your recurring subscription
            </p>
            <p className="text-xs">14 March 2024</p>
            <RxCross2 />
          </div>
          <div className="flex items-center justify-between bg-red-100 p-4 rounded-md">
            <p className="text-xs">
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
