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
// ----------------------------------------------------------------------------------------------------------
const SideBar = () => {
  // -----------------------------------------------States-----------------------------------------------------
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // ----------------------------------------------------------------------------------------------------------
  // -----------------------------------------------Hooks-----------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------
  // --------------------------------------------Functions-----------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------
  // --------------------------------------------useEffect-----------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------

  const sidebarOptions = [
    {
      title: "Dashboard",
    },
    {
      title: "Users",
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
        className={`fixed top-0 bottom-0 left-0 z-40 flex  h-screen flex-col border-r border-r-slate-200 bg-white transition-transform lg:translate-x-0 ${
          isSideNavOpen ? "translate-x-0" : " -translate-x-full"
        }`}
      >
        <a
          aria-label="WindUI logo"
          className="flex items-center gap-2 whitespace-nowrap p-6 text-xl font-medium focus:outline-none"
          href="javascript:void(0)"
        >
          Shiven
        </a>

        <nav
          aria-label="side navigation"
          className="flex-1 divide-y divide-slate-100 overflow-auto"
          style={{
            scrollbarWidth: "none",
          }}
        >
          {/* <div>
  <ul class="flex flex-1 flex-col gap-1 py-3">
    <li class="px-3">
      <a href="#" class="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-[#60A5FA] hover:text-[#60A5FA] focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500">
        <div class="flex items-center self-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6" aria-label="Dashboard icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
          </svg>
        </div>
        <div class="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
          Dashboard
        </div>
      </a>
    </li>
    <li class="px-3 dropdown relative">
      <a href="#" class="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-[#60A5FA] hover:text-[#60A5FA] focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500">
        <div class="flex items-center self-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6" aria-label="Dropdown icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        <div class="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
          Group
        </div>
      </a>
      <ul class="dropdown-content hidden absolute bg-white shadow-lg rounded mt-2 py-1 w-32 z-10">
        <li>
          <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Accounting</a>
        </li>
        <li>
          <a href="/invoice" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Crm
            <span class="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2 text-xs text-emerald-500">
              2
              <span class="sr-only"> new notifications</span>
            </span>
          </a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Meeting</a>
        </li>
      </ul>
    </li>
  </ul>
</div>  */}

          <div>
            <ul className="flex flex-1 flex-col gap-1 py-3">
              {sidebarOptions.map((option) => {
                return (
                  <li className="px-3">
                    <a
                      href="#"
                      className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-[#60A5FA] hover:text-[#60A5FA] focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
                    >
                      <div className="flex items-center self-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                          aria-label="Dashboard icon"
                          role="graphics-symbol"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                          />
                        </svg>
                      </div>
                      <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                        {option.title}
                      </div>
                    </a>
                  </li>
                );
              })}
              <li className="px-3">
                <a
                  href="#"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-[#60A5FA] hover:text-[#60A5FA] focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500"
                >
                  <div className="flex items-center self-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                      aria-label="Dashboard icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Dashboard
                  </div>
                </a>
              </li>
              <li className="px-3 dropdown relative">
                <a
                  href="#"
                  onClick={toggleDropdown}
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-[#60A5FA] hover:text-[#60A5FA] focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500"
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
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Plans
                  </div>
                </a>
                {isOpen && (
                  <ul className="dropdown-content absolute bg-white shadow-lg rounded mt-2 py-1 w-full z-10">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Accounting
                      </a>
                    </li>
                    <li>
                      <a
                        href="/invoice"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Crm
                        <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2 text-xs text-emerald-500">
                          2<span className="sr-only"> new notifications</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Meeting
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-1 flex-col gap-1 py-3">
              <li className="px-3">
                <a
                  href="/invoice"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
                >
                  <div className="flex items-center self-center">
                    <GoTag />
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Quotation / Invoices
                  </div>
                </a>
              </li>
              <li className="px-3">
                <a
                  href="#"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
                >
                  <div className="flex items-center self-center ">
                    <GoTag />
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Reports
                  </div>
                </a>
              </li>
              <li className="px-3">
                <a
                  href="#"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
                >
                  <div className="flex items-center self-center ">
                    <FiEdit />
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Client Centralised Database
                  </div>
                </a>
              </li>
              <li className="px-3">
                <a
                  href="#"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
                >
                  <div className="flex items-center self-center ">
                    <FaWpforms />
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Customised Forms
                  </div>
                </a>
              </li>
              <li className="px-3">
                <a
                  href="#"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
                >
                  <div className="flex items-center self-center ">
                    <GoTag />
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Review
                  </div>
                </a>
              </li>
              <li className="px-3">
                <a
                  href="#"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
                >
                  <div className="flex items-center self-center ">
                    <FaBookOpen />{" "}
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    File & Folder
                  </div>
                </a>
              </li>
              <li className="px-3">
                <a
                  href="#"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
                >
                  <div className="flex items-center self-center ">
                    <SlCalender />
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Important Dates
                  </div>
                </a>
              </li>

              <li className="px-3">
                <a
                  href="#"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
                >
                  <div className="flex items-center self-center ">
                    <FiEdit />
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Services Request
                  </div>
                </a>
              </li>

              <li className="px-3">
                <a
                  href="#"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
                >
                  <div className="flex items-center self-center ">
                    <CgProfile />
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Profile
                  </div>
                </a>
              </li>

              <li className="px-3">
                <a
                  href="#"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
                >
                  <div className="flex items-center self-center ">
                    <ImNewspaper />
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Blogs
                  </div>
                </a>
              </li>

              <li className="px-3">
                <a
                  href="#"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
                >
                  <div className="flex items-center self-center ">
                    <GrAnnounce />
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Announcement
                  </div>
                </a>
              </li>
              <li className="px-3">
                <a
                  href="#"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
                >
                  <div className="flex items-center self-center ">
                    <GoTag />
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Contact Management
                  </div>
                </a>
              </li>

              <li className="px-3">
                <a
                  href="#"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
                >
                  <div className="flex items-center self-center ">
                    <FaCalculator />
                  </div>
                  <div className="flex  w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Calculater
                  </div>
                </a>
              </li>
              <li className="px-3">
                <a
                  href="#"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
                >
                  <div className="flex items-center self-center ">
                    <GoTag />
                  </div>
                  <div className="flex  w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Enquiry
                  </div>
                </a>
              </li>
              <li className="px-3">
                <a
                  href="#"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
                >
                  <div className="flex items-center self-center ">
                    <IoMdNotifications />
                  </div>
                  <div className="flex  w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Notification
                  </div>
                </a>
              </li>
              <li className="px-3">
                <a
                  href="#"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
                >
                  <div className="flex items-center self-center ">
                    <GoTag />
                  </div>
                  <div className="flex  w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Social Media
                  </div>
                </a>
              </li>
              <li className="px-3">
                <a
                  href="#"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
                >
                  <div className="flex items-center self-center ">
                    <FaRegMessage />
                  </div>
                  <div className="flex  w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    SMS/Email/Whatsapp
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <footer className="border-t border-slate-200 p-3">
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
