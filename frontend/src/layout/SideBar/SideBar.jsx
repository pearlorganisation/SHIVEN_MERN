// -----------------------------------------------Imports---------------------------------------------------
import React, { useState } from "react";
import { GoTag } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/actions/Auth/authActions";
// ----------------------------------------------------------------------------------------------------------
const SideBar = () => {
  // -----------------------------------------------States-----------------------------------------------------
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuIndex, setSubMenuIndex] = useState([]);

  // ----------------------------------------------------------------------------------------------------------
  // -----------------------------------------------Hooks-----------------------------------------------------
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // ----------------------------------------------------------------------------------------------------------
  // --------------------------------------------Functions-----------------------------------------------------
  // logoutHandler -- handler to call the logout api
  const logoutHandler = () => {
    try {
      dispatch(logout());
    } catch (error) {
      console.error(error.message);
    }
  };
  // ----------------------------------------------------------------------------------------------------------
  // --------------------------------------------useEffect-----------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------

  const sidebarOptions = [
    {
      title: "Dashboard",
      subMenu: false,
      path: "/dashboard",
    },
    {
      title: "Mutual Fund",
      subMenu: false,
      path: "/dashboard",
    },
    {
      title: "Loans",
      subMenu: false,
      path: "/dashboard",
    },
    {
      title: "Health Insurance ",
      subMenu: false,
      path: "/dashboard",
    },
    {
      title: "Motor Insurace",
      subMenu: false,
      path: "/dashboard",
    },
    {
      title: "Fixed Deposit ",
      subMenu: false,
      path: "/dashboard",
    },
    {
      title: "Stocks",
      subMenu: false,
      path: "/dashboard",
    },
    {
      title: "Property",
      subMenu: false,
      path: "/dashboard",
    },
    {
      title: "Govt. Insurance",
      subMenu: false,
      path: "/dashboard",
    },

    {
      title: "Users",
      subMenu: true,
      subMenuArray: [
        { title: "Users", path: "/users" },
        { title: "Create User", path: "/users/create-user" },
      ],
    },
    // {
    //   title: "Insurances",
    //   subMenu: true,
    //   subMenuArray: [
    //     { title: "Insurances", path: "/insurances" },
    //     {
    //       title: "Create Insurance",
    //       path: "/insurances/create-insurance",
    //     },
    //     {
    //       title: "Insurance Service Providers",
    //       path: "/insurances/insurance-service-providers",
    //     },
    //     {
    //       title: "Create Insurance Service Providers",
    //       path: "/insurances/insurance-service-providers/create-insurance-service-provider",
    //     },
    //   ],
    // },
    {
      title: "Services",
      subMenu: true,
      subMenuArray: [
        { title: "Services", path: "/service" },
        // {
        //   title: "Create Insurance",
        //   path: "/insurances/create-insurance",
        // },
        {
          title: "Service Providers",
          path: "/serviceProvider",
        },
        {
          title: "Service Plans",
          path: "/servicePlan",
        },
        // {
        //   title: "Create Insurance Service Providers",
        //   path: "/insurances/insurance-service-providers/create-insurance-service-provider",
        // },
      ],
    },
    {
      title: "Plans",
      subMenu: false,
      path: "/plans",
    },
  ];
  // ----------------------------------------------------------------------------------------------------------

  const toggleDropdown = (index) => {
    // setIsOpen(!isOpen);
    if (subMenuIndex?.includes(index)) {
      let copy = [...subMenuIndex];
      let newSubMenu = copy.filter((idx) => {
        return idx != index;
      });

      setSubMenuIndex(newSubMenu);
    } else {
      setSubMenuIndex([...subMenuIndex, index]);
    }
  };
  return (
    <>
      <div className="w-[100%]">
        <div
          className="relative cursor-pointer w-[100%]"
          onClick={() => setIsSideNavOpen(!isSideNavOpen)}
        >
          <button
            title="Side navigation"
            type="button"
            className={` visible left-6 top-6 z-40 order-10 block h-10  self-center rounded bg-white opacity-100 lg:hidden ${
              isSideNavOpen
                ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                : ""
            }`}
            aria-haspopup="menu"
            aria-label="Side navigation"
            aria-expanded={isSideNavOpen ? " true" : "false"}
            aria-controls="nav-menu-2"
          >
            <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-white transition-all duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-6 transform rounded-full bg-white transition duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-white transition-all duration-300"
              ></span>
            </div>
          </button>
        </div>

        <aside
          id="nav-menu-2"
          aria-label="Side navigation"
          className={`w-[20%] min-w-[250px] fixed top-0 bottom-0 left-0 z-40 flex  h-screen flex-col   bg-slate-800 transition-transform lg:translate-x-0 ${
            isSideNavOpen ? "translate-x-0" : " -translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center">
            <a
              aria-label="WindUI logo"
              className="flex items-center gap-2 whitespace-nowrap p-6 text-3xl font-medium focus:outline-none text-white italic "
              href="javascript:void(0)"
            >
              Shiven
            </a>
            <div
              className="lg:hidden flex items-center rounded-xl text-white border-2 border-white  p-5 cursor-pointer"
              onClick={() => setIsSideNavOpen(false)}
            >
              X
            </div>
          </div>
          <nav
            aria-label="side navigation"
            className="flex-1  overflow-auto"
            style={{
              scrollbarWidth: "none",
            }}
          >
            <div>
              <ul className="flex flex-1 flex-col gap-1 py-3">
                {sidebarOptions.map((option, index) => {
                  return option?.subMenu ? (
                    <li className="px-3 dropdown relative">
                      <div
                        onClick={() => {
                          toggleDropdown(index);
                        }}
                        className="flex items-center gap-3 rounded p-3 text-white hover:bg-[#60A5FA] hover:text-white focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center self-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                            aria-label="Dropdown icon"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm ">
                          {option?.title}
                        </div>
                      </div>
                      {subMenuIndex.includes(index) && (
                        <ul className="dropdown-content  bg-slate-800  rounded mt-2 py-1 w-full transition-all duration-1000 ease-in-out border border-white">
                          {option?.subMenuArray?.map((subOption) => {
                            return (
                              <li
                                onClick={() => {
                                  navigate(`${subOption.path}`);
                                }}
                                className="cursor-pointer "
                              >
                                <div className="  block px-4 py-2 text-white hover:bg-gray-200 hover:text-black">
                                  {subOption?.title}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  ) : (
                    <li className="px-3">
                      <Link
                        to={`${option?.path}`}
                        className="flex items-center gap-3 rounded p-3 text-white transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-red-500 aria-[current=page]:bg-emerald-500 aria-[current=page]:text-emerald-500 "
                      >
                        <div className="flex items-center self-center">
                          <GoTag />
                        </div>
                        <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                          {option?.title}
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="transition-all duration-1000 ease-in-out">
              <ul className="flex flex-1 flex-col gap-1 py-3 ">
                <li className="px-3 text-white">
                  <a
                    href="/invoice"
                    className="flex items-center gap-3 rounded p-3 text-white transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
                  >
                    <div className="flex items-center self-center">
                      <GoTag />
                    </div>
                    <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                      Quotation / Invoices
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="logoutBtn flex justify-center items-center">
              <button
                className="border border-white p-3 font-bold bg-red-800 text-white rounded-lg tracking-widest hover:bg-red-600"
                onClick={logoutHandler}
              >
                Logout
              </button>
            </div>
          </nav>

          <footer className="  p-3">
            <a
              href="#"
              className="flex items-center gap-3 rounded p-3 text-slate-900 transition-colors hover:text-emerald-500 "
            >
              <div className="flex items-center self-center "></div>
              <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm font-medium"></div>
            </a>
          </footer>
        </aside>

        <div
          className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
            isSideNavOpen ? "block" : "hidden"
          }`}
          onClick={() => setIsSideNavOpen(false)}
        ></div>
      </div>
    </>
  );
};

export default SideBar;
