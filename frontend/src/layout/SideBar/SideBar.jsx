// -----------------------------------------------Imports---------------------------------------------------
import React, { useState } from "react";
import { FaWpforms } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";
import { GoTag } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { FiEdit } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { ImNewspaper } from "react-icons/im";
import { GrAnnounce } from "react-icons/gr";
import { FaCalculator } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
// ----------------------------------------------------------------------------------------------------------
const SideBar = () => {
  // -----------------------------------------------States-----------------------------------------------------
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // ----------------------------------------------------------------------------------------------------------
  // -----------------------------------------------Hooks-----------------------------------------------------
  const navigate = useNavigate();
  // ----------------------------------------------------------------------------------------------------------
  // --------------------------------------------Functions-----------------------------------------------------
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
      title: "Users",
      subMenu: true,
      subMenuArray: [
        { title: "Users", path: "/users" },
        { title: "Create User", path: "/users/create-user" },
      ],
    },
  ];
  // ----------------------------------------------------------------------------------------------------------

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        title="Side navigation"
        type="button"
        className={`visible fixed left-6 top-6 z-40 order-10 block h-10  self-center rounded bg-white opacity-100 lg:hidden ${
          isSideNavOpen
            ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
            : ""
        }`}
        aria-haspopup="menu"
        aria-label="Side navigation"
        aria-expanded={isSideNavOpen ? " true" : "false"}
        aria-controls="nav-menu-2"
        onClick={() => setIsSideNavOpen(!isSideNavOpen)}
      >
        <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
          ></span>
        </div>
      </button>

      <aside
        id="nav-menu-2"
        aria-label="Side navigation"
        className={`fixed top-0 bottom-0 left-0 z-40 flex  h-screen flex-col border-r border-r-slate-200 bg-slate-800 transition-transform lg:translate-x-0 ${
          isSideNavOpen ? "translate-x-0" : " -translate-x-full"
        }`}
      >
        <a
          aria-label="WindUI logo"
          className="flex items-center gap-2 whitespace-nowrap p-6 text-3xl font-medium focus:outline-none text-white italic "
          href="javascript:void(0)"
        >
          Shiven
        </a>

        <nav
          aria-label="side navigation"
          className="flex-1  overflow-auto"
          style={{
            scrollbarWidth: "none",
          }}
        >
          <div>
            <ul className="flex flex-1 flex-col gap-1 py-3">
              {sidebarOptions.map((option) => {
                return option?.subMenu ? (
                  <li className="px-3 dropdown relative">
                    <div
                      onClick={toggleDropdown}
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
                    {isOpen && (
                      <ul className="dropdown-content  bg-white  rounded mt-2 py-1 w-full transition-all duration-1000 ease-in-out">
                        {option?.subMenuArray?.map((subOption) => {
                          return (
                            <li
                              onClick={() => {
                                navigate(`${subOption.path}`);
                              }}
                              className="cursor-pointer"
                            >
                              <div className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
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
                      className="flex items-center gap-3 rounded p-3 text-white transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
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
    </>
  );
};

export default SideBar;
