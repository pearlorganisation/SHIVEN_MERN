// -----------------------------------------------Imports---------------------------------------------------
import React, { useEffect, useState } from "react";
import { GoTag } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/actions/Auth/authActions";
import { getConsultantWithPopulated } from "../../features/actions/Auth/userActions";
// ----------------------------------------------------------------------------------------------------------
const SideBar = () => {
  // -----------------------------------------------States-----------------------------------------------------
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [subMenuIndex, setSubMenuIndex] = useState([]);
  const { loggedInUserData } = useSelector((state) => state.auth);
  const { consultants } = useSelector((state) => state.user);


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

let getAllOptedServices = []


if(consultants.servicePlan && Array.isArray(consultants.servicePlan) && loggedInUserData.role == "1")
    {  
      const seenServiceNames = new Set(); // To track unique serviceProviderName
      getAllOptedServices = consultants.servicePlan
      .filter((item) => {
        const serviceName = item?.serviceType?.serviceType;
        if (serviceName && !seenServiceNames.has(serviceName)) {
          seenServiceNames.add(serviceName); // Add to set if not already present
          return true;
        }
        return false;
      })
      .map((item) => ({
        title: item?.serviceType?.serviceType,    
        path: `/plans/${item?.serviceType?.serviceType}`,
        _id: item?.serviceType?._id
      }));
  }
 

   console.log(getAllOptedServices)

  // ----------------------------------------------------------------------------------------------------------
  // --------------------------------------------useEffect-----------------------------------------------------
  useEffect(() => {
   
if(loggedInUserData.role == "1")
  dispatch(getConsultantWithPopulated(loggedInUserData?._id))
  }, [])
  
  // ----------------------------------------------------------------------------------------------------------



  const sidebarOptions = [
    {
      title: "Dashboard",
      subMenu: false,
      path: "/dashboard",
      show:
        loggedInUserData.role === "0" ||
        loggedInUserData.role === "1" ||
        loggedInUserData.role === "2",
    },
    {
      title: "Clients",
      subMenu: false,
      path: "/consultant-filesManagement",
      show: loggedInUserData.role === "1",
    },



///  Admin PANEL ///
{
  title: "Manage Listing",
  subMenu: true,
  subMenuArray: [
      {
        title: "Categories / Services",
        path: "/admin/services"
      },
      {
        title: "Services Providers",
        path: "/admin/serviceProviders"
      },
      {
        title: "Company Plans",
        path: "/admin/plans"
      },
      {
        title: "Customised Plans",
        path: "/customisedPlan"
      },

  ],
  show: loggedInUserData.role === "0"
},

    {
      title: "Staff Management",
      subMenu: false,
      path: "/admin/staffManagement",
      show: loggedInUserData.role === "0",
    },

    {
      title: "Consultant Management",
      subMenu: true,
      subMenuArray: [
        {
          title: "Manage Consultants",
          path: "/manage-consultant"
        },
        {
          title: "Account Approval",
          path: "/consultant-management"
        }
      ],
      show: loggedInUserData.role === "0",
    },

    {
      title: "Payment Logs",
      subMenu: false,
      path:  "/admin/payments",
      show: loggedInUserData.role === "0",
    },
    {
      title: "Space Management",
      subMenu: false,
      path: "/space-management",
      show: loggedInUserData.role === "0",
    },

    {
      title: "Sales , Income and Expenses",
      subMenu: true,
      subMenuArray: [
        {
          title: "View Income and Expense",
          path: "/consultant/incomeAndExpense/year",
        },
        {
          title: "Add Expense Headings",
          path: "/consultant/incomeAndExpense/addExpenseHeadings",
        },
        {
          title: "Add Income Headings",
          path: "/consultant/incomeAndExpense/addIncomeHeadings",
        },
      ],
      show: loggedInUserData.role === "0",
    },
    {
      title: " Reports & Graphs",
      subMenu: true,
      subMenuArray: [
        {
          title: "Customers added as per products (NFC cards, pdf, cards, etc)",
          path: "/",
        },
        {
          title: "Products sold as per category and products",
          path: "/",
        },
        {
          title: "Income generated as per different categories",
          path: "/",
        },
        {
          title: "customer engagement to blogs & testimonials",
          path: "/",
        },
        {
          title: "feedback and complaints",
          path: "/",
        },
        {
          title: "Payment generated from products sales of customers",
          path: "/",
        },
        {
          title: "Payment made to customers",
          path: "/",
        },
      ],
      show: loggedInUserData.role === "0"
    },
    // {
    //   title: "Social Media Integration",
    //   subMenu: false,
    //   path:  "/",
    //   show: loggedInUserData.role === "0",
    // },
    {
      title: "Consultant Service Requests",
      subMenu: false,
      path:  "/consultant/serviceRequest",
      show: loggedInUserData.role === "0",
    },
    {
      title: "Feedback",
      subMenu: false,
      path:  "/consultant/feedbacks",
      show: loggedInUserData.role === "0",
    },
    {
      title: "SMS / WhatsApp Integration",
      subMenu: false,
      path:  "/",
      show: loggedInUserData.role === "0",
    },
    {
      title: "Blogs & Testimonails",
      subMenu: false,
      path: "/blogs-testimonials",
      show: loggedInUserData.role === "0",
    },
    {
      title: "Compliance Documents",
      subMenu: true,
      subMenuArray: [
          {
            title: "Privacy Policy",
           path: "/privacy-policy"
          },
          {
            title: "Refund Policy",
           path: "/refund-policy"
          },
          {
            title: "Terms & Conditions",
           path: "/terms-conditions"
          },
          {
            title: "Shipping Policy",
           path: "/shipping-policy"
          },
          {
            title: "Cancellation Policy",
           path: "/cancellation-policy"
          }

      ],
      show: loggedInUserData.role === "0",
    },
    {
      title: "Contact Us",
      subMenu: false,
      path:  "/contact-us",
      show: loggedInUserData.role === "0",
    },



/// CONSULTANT PANEL ///

    {
      title: "Profile",
      subMenu: true,
      subMenuArray: [
        {
          title: "Company Profile",
          path: "/companyProfile",
        },
        {
          title: "Consultant Profile",
          path: "/consultantProfile",
        },
      ],
      show: loggedInUserData.role === "1",
    },
    {
      title: "Services",
      subMenu: true,
      subMenuArray: [
        {
          title: "Customised Plans",
          path: "/customisedPlan",
        },
        ...getAllOptedServices
      ],
      show: loggedInUserData.role === "1",
    },
    
    {
      title: "Services Providers",
      subMenu: false,
      path: "/consultant/serviceProvider",
      show: loggedInUserData.role === "1",
    },
    {
      title: "Brochures",
      subMenu: false,
      path: "/brochure",
      show: loggedInUserData.role === "1",
    },
    {
      title: "Customised Forms",
      subMenu: false,
      path: "/consultant/customised-forms",
      show: loggedInUserData.role === "1",
    },
    {
      title: "Clients Details",
      subMenu: false,
      path: "/users",
      show: loggedInUserData.role === "1",
    },
    {
      title: "Purchase / Renewal / Invoices",
      subMenu: true,
      subMenuArray: [
        { title: "Purchase", path: "user/purchase" },
        {
          title: "Renewal ",
          path: "purchase/renewal",
        },
        {
          title: "Invoices",
          path: "purchase/invoices",
        },
      ],
      show: loggedInUserData.role === "1",
    },
    {
      title: "Files / Folder Management",
      subMenu: false,
      path: "/consultant-filesManagement",
      show: loggedInUserData.role === "1",
    },
    {
      title: "Calculator Funds / Interest",
      subMenu: false,
      path: "/calculatorFunds",
      show: loggedInUserData.role === "1",
    },

    {
      title: "Schedule Management",
      subMenu: false,
      path: "user/scheduleManagement",
      show: loggedInUserData.role === "1",
    },
    {
      title: "Quotation / Invoices management",
      subMenu: false,
      path: "/consultant/quotation-invoice-management",
      show: loggedInUserData.role === "1",
    },
    {
      title: "Investments / Valuation / Portfolio",
      subMenu: true,
      subMenuArray: [
        {
          title: "MutualFund LumSum",
          path: "/consultant/portfolio/Mutual Fund Lum Sum",
        },
        {
          title: "MutualFund SIP",
          path: "/consultant/portfolio/Mutual Fund SIP",
        },
        { title: "Shares", path: "/consultant/portfolio/Shares" },
        {
          title: "Life Insurance",
          path: "/consultant/portfolio/Life Insurance",
        },
        {
          title: "Health Insurance",
          path: "/consultant/portfolio/Health Insurance",
        },
        { title: "Loans", path: "/consultant/portfolio/Loans" },
      ],
      show: loggedInUserData.role === "1",
    },
    {
      title: "Customer Review / Feedback",
      subMenu: false,
      path: "/consultant/feedbacks",
      show: loggedInUserData.role === "1",
    },
    {
      title: "Complaint / Services Request",
      subMenu: false,
      path: "consultant/serviceRequest",
      show: loggedInUserData.role === "1",
    },
    {
      title: "Contact Management",
      subMenu: false,
      path: "/consultant/contactManagement",
      show: loggedInUserData.role === "1",
    },

    {
      title: "Analytics & Reports",
      subMenu: false,
      path: "/",
      show: loggedInUserData.role === "1",
    },
    {
      title: "Task Management",
      subMenu: false,
      path: "/consultant/taskManagement",
      show: loggedInUserData.role === "1",
    },
    {
      title: "Income & Expense Management",
      subMenu: true,
      subMenuArray: [
        {
          title: "View Income and Expense",
          path: "/consultant/incomeAndExpense/year",
        },
        {
          title: "Add Expense Headings",
          path: "/consultant/incomeAndExpense/addExpenseHeadings",
        },
        {
          title: "Add Income Headings",
          path: "/consultant/incomeAndExpense/addIncomeHeadings",
        },
      ],
      show: loggedInUserData.role === "1",
    },

    {
      title: "Notifications / Circulars ",
      subMenu: false,
      path: "/consultant/notifications-circulars",
      show: loggedInUserData.role === "1",
    },

    {
      title: "Announcements",
      subMenu: false,
      path: "/consultant/announcements",
      show: loggedInUserData.role === "1",
    },

    {
      title: "Blogs / Articles",
      subMenu: false,
      path: "/consultant/blogs",
      show: loggedInUserData.role === "1",
    },

    {
      title: "SMS / Email",
      subMenu: false,
      path: "/sms-email",
      show: loggedInUserData.role === "1",
    },
    {
      title: "Enquiry / Leads Management",
      subMenu: false,
      path: "/enquiry-leads-management",
      show: loggedInUserData.role === "1",
    },
    {
      title: "CRM",
      subMenu: false,
      path: "/consultant/crm",
      show: loggedInUserData.role === "1",
    },

    /// CUSTOMER PANEL ///
    {
      title: "Your Profile / Family Profile",
      subMenu: false,
      path: "/profile",
      show: loggedInUserData.role === "2",
    },

    {
      title: "Policies / Plans / Brochures",
      subMenu: false,
      path: "/user/policies",
      show: loggedInUserData.role === "2",
    },
    {
      title: "Customised Forms",
      subMenu: false,
      path: "/user/customised-forms",
      show: loggedInUserData.role === "2",
    },
    {
      title: "Purchase / Renewal / Invoices",
      subMenu: true,
      subMenuArray: [
        { title: "Purchase", path: "user/purchase" },
        {
          title: "Renewal ",
          path: "purchase/renewal",
        },
        {
          title: "Invoices",
          path: "purchase/invoices",
        },
      ],
      show: loggedInUserData.role === "2",
    },
    {
      title: "Files / Folder Management",
      subMenu: false,
      path: "/clientFiles",
      show: loggedInUserData.role === "2",
    },
    {
      title: "Calculator Funds / Interest",
      subMenu: false,
      path: "/calculatorFunds",
      show: loggedInUserData.role === "2",
    },

    {
      title: "Investments / Valuation / Portfolio",
      subMenu: true,
      subMenuArray: [
        {
          title: "MutualFund LumSum",
          path: "/user/portfolio/Mutual Fund Lum Sum",
        },
        { title: "MutualFund SIP", path: "/user/portfolio/Mutual Fund SIP" },
        { title: "Shares", path: "/user/portfolio/Shares" },
        { title: "Life Insurance", path: "/user/portfolio/Life Insurance" },
        { title: "Health Insurance", path: "/user/portfolio/Health Insurance" },
        { title: "Loans", path: "/user/portfolio/Loans" },
      ],
      path: "/user/investment",
      show: loggedInUserData.role === "2",
    },

    {
      title: "Schedule Management",
      subMenu: false,
      path: "user/scheduleManagement",
      show: loggedInUserData.role === "2",
    },

    {
      title: "Notifications / Circulars ",
      subMenu: false,
      path: "/user/notifications-circulars",
      show: loggedInUserData.role === "2",
    },

    {
      title: "Announcements",
      subMenu: false,
      path: "/user/announcements",
      show: loggedInUserData.role === "2",
    },

    {
      title: "Blogs / Articles",
      subMenu: false,
      path: "/user/blogs",
      show: loggedInUserData.role === "2",
    },

    {
      title: "Services Request",
      subMenu: false,
      path: "user/complaint",
      show: loggedInUserData.role === "2",
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
                {sidebarOptions
                  .filter((el) => el.show === true)
                  .map((option, index) => {
                    return option?.subMenu ? (
                      <li key={index} className="px-3 dropdown relative">
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
                            {option?.subMenuArray?.map((subOption, index) => {
                              return (
                                <li
                                  key={index}
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
                      <li key={index} className="px-3">
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
