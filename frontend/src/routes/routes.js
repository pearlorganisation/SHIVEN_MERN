import { lazy } from "react";
import Profile from "../ClientsComponents/Profile/Profile";
import Documents from "../ClientsComponents/Documents/Documents";
import Renewal from "../pages/Service/user/purchase/Renewal";
import Invoices from "../pages/Service/user/purchase/Invoices";
import Complain from "../pages/Service/user/complain/Complain";
import FilesPage from "../ClientsComponents/FilesPage/FilesPage";
import FilesFolders from "../ClientsComponents/FilesPage/FilesFolders/FilesFolders";
import ScheduleManagement from "../pages/Service/user/ScheduleManagement";
import AddNewProfile from "../ClientsComponents/Profile/AddNewProfile";
import CreateRequest from "../pages/Service/user/complain/CreateRequest";
import Purchase from "../pages/Service/user/purchase/Purchase";
import CustomerFeedback from "../pages/Service/consultant/CustomerFeedback";
import ViewPolicies from "../pages/Service/user/policies/ViewPolicies";
import CreateHealthPlan from "../pages/ServicePlans/healthInsurance/CreateHealthPlan";
import ViewBrochures from "../pages/Service/consultant/ViewBrochures";
import WholeLifeInsurancePlan from "../pages/ServicePlans/wholeLifeInsurance/WholeLifeInsurance";
import HomeLoan from "../pages/ServicePlans/homeLoan/HomeLoan";
import CompanyProfile from "../components/CompanyProfile/CompanyProfile";
import VehicleLoan from "../pages/ServicePlans/vehicleLoan/VehicleLoan";
import filesAndFolder from "../pages/Service/consultant/filesAndFolder";
import ViewServiceRequest from "../pages/Service/consultant/serviceRequest/ViewServiceRequest";
import Blogs from "../components/Blogs/Blogs";
import BlogsList from "../components/Blogs/consultant/BlogsList";
import NotFound from "../components/NotFound";
import AllPlans from "../pages/Service/consultant/plans/AllPlans";
import ContactManagement from "../components/ContactManagement/ContactManagement";
import AddContactManagement from "../components/ContactManagement/AddContactManagement";
import UpdateContactManagement from "../components/ContactManagement/UpdateContactManagement";
import BlogDetails from "../components/Blogs/BlogDetails";
import NotificationCirculars from "../components/NotificationCirculars/NotificationCirculars";
import CustomizedPlans from "../pages/Service/consultant/plans/CustomizedPlans";
import AddCustomisedPlan from "../pages/Service/consultant/plans/AddCustomisedPlan";
import Announcements from "../components/Announcements/Announcements";
import AnnouncementsList from "../components/Announcements/consultant/AnnouncementsList";
import UpdateAnnouncement from "../components/Announcements/consultant/UpdateAnnouncement";
import AddAnnouncement from "../components/Announcements/consultant/AddAnnouncement";
import NotificationsList from "../components/NotificationCirculars/consultant/NotificationsList";
import AddNotification from "../components/NotificationCirculars/consultant/AddNotification";
import UpdateNotification from "../components/NotificationCirculars/consultant/UpdateNotification";
import ViewCrm from "../pages/Service/consultant/crm/ViewCrm";
import AddStatus from "../pages/Service/consultant/crm/AddStatus";
import QuotationInvoiceList from "../components/QuotationInvoiceManagement/consultant/QuotationInvoiceList";
import AddQuotationInvoice from "../components/QuotationInvoiceManagement/consultant/AddQuotationInvoice";
import UpdateQuotationInvoice from "../components/QuotationInvoiceManagement/consultant/UpdateQuotationInvoice";
import ViewTaskManagement from "../pages/Service/consultant/taskManagement/ViewTaskManagement";
import AddTask from "../pages/Service/consultant/taskManagement/AddTask";
import MutualFundLumSum from "../pages/Service/user/investment/MutualFundLumSum";
import MutualFundSIP from "../pages/Service/user/investment/MutualFundSIP";
import Shares from "../pages/Service/user/investment/Shares";
import LifeInsurance from "../pages/Service/user/investment/LifeInsurance";
import HealthInsurance from "../pages/Service/user/investment/HealthInsurance";
import Loans from "../pages/Service/user/investment/Loans";
import CustomisedFormList from "../components/CustomisedForm/consultant/CustomisedFormList";
import AddCustomisedForm from "../components/CustomisedForm/consultant/AddCustomisedForm";
import UpdateCustomisedForm from "../components/CustomisedForm/consultant/UpdateCustomisedForm";
import CustomisedForms from "../components/CustomisedForm/CustomisedForm";
import ViewPortfolio from "../pages/Service/user/portfolio/ViewPortfolio";
import ViewAllPortfolio from "../pages/Service/consultant/portfolio/ViewAllPortfolio";
import YearIncomeExpense from "../pages/Service/consultant/incomeAndExpense/YearIncomeExpense";
import MonthIncomeExpense from "../pages/Service/consultant/incomeAndExpense/MonthIncomeExpense";
import AddPlans from "../pages/Service/consultant/plans/AddPlans";
import ConsultantProfile from "../components/CompanyProfile/ConsultantProfile";
import SmsEmail from "../components/SmsEmail/SmsEmail";
import ComposeEmail from "../components/SmsEmail/ComposeEmail";
import AddEnquiryLeads from "../components/EnquiryLeadsManagement/AddEnquiryLeads";
import EnquiryLeadsManagement from "../components/EnquiryLeadsManagement/EnquiryLeadsManagement";
import SpaceManagment from "../pages/Admin/SpaceManagement";
import ContactUs from "../components/ContactUs/ContactUs";
import HeadingFormExpense from "../pages/Service/consultant/incomeAndExpense/HeadingFormExpense";
import HeadingFormIncome from "../pages/Service/consultant/incomeAndExpense/HeadingFormIncome";
import AddDailyIncome from "../pages/Service/consultant/incomeAndExpense/AddDailyIncome";
import AddDailyExpense from "../pages/Service/consultant/incomeAndExpense/AddDailyExpense";
import BlogsTestimonials from "../components/BlogsTestimonials/BlogsTestimonials";
import ViewStaffManagement from "../pages/Admin/StaffManagement/ViewStaffManagement";
import CreateStaff from "../pages/Admin/StaffManagement/CreateStaff";
import Payments from "../pages/Admin/Payments";
import ViewPlans from "../pages/Service/admin/ViewPlans";
import RefundPolicy from "../pages/Admin/ComplianceDocuments/RefundPolicy";
import PrivacyPolicy from "../pages/Admin/ComplianceDocuments/PrivacyPolicy";
import TermsConditions from "../pages/Admin/ComplianceDocuments/TermsConditions";
import ShippingPolicy from "../pages/Admin/ComplianceDocuments/ShippingPolicy";
import CancellationPolicy from "../pages/Admin/ComplianceDocuments/CancellationPolicy";
import ViewConsultantServices from "../pages/Service/consultant/services/ViewServices";
import { UpdateService } from "../pages/Service/admin/UpdateService";
import { ViewConsultants } from "../pages/Service/admin/ViewConsultants";
import ManageConsultant from "../pages/Service/admin/ManageConsultant";
import { ConsultantServiceProviders } from "../pages/Service/consultant/serviceProvider/ViewServiceProviders";
import AddServicePlan from "../pages/ServicePlans/AddServicePlan";

// --------------------------------------------------Imports--------------------------------------------------
const Dashboard = lazy(() => {
  return import("../components/Dashboard/Dashboard");
});
const CalculatorFunds = lazy(() => {
  return import("../ClientsComponents/CalculatorFunds/CalculatorFunds");
});
const User = lazy(() => {
  return import("../pages/auth/User/User");
});
const CreateUser = lazy(() => {
  return import("../pages/auth/User/CreateUser");
});
const UpdateUser = lazy(() => {
  return import("../pages/auth/User/UpdateUser");
});
const Plans = lazy(() => {
  return import("../components/Dashboard/Plans");
});
const ProposalForm = lazy(() => {
  return import("../components/Dashboard/ProposalForm");
});

// Service
const ViewServices = lazy(() => {
  return import("../pages/Service/admin/ViewServices");
});


const MutualFunds = lazy(() => {
  return import("../pages/ServicePlans/mutualFund/MutualFund");
});

const BikeInsurance = lazy(() => {
  return import("../pages/ServicePlans/motorInsurance/MotorInsurance");
});

const ViewServiceProviders = lazy(() => {
  return import("../pages/Service/admin/ViewServiceProviders");
});
const CreateServiceProvider = lazy(() => {
  return import("../pages/Service/admin/CreateServiceProvider");
});

// Insurance
const Insurances = lazy(() => {
  return import("../pages/Insurance/admin/Insurances");
});
const CreateInsurance = lazy(() => {
  return import("../pages/Insurance/admin/CreateInsurance");
});
const InsuranceServiceProviders = lazy(() => {
  return import("../pages/Insurance/admin/InsuranceServiceProviders");
});
const CreateInsuranceServiceProvider = lazy(() => {
  return import("../pages/Insurance/admin/CreateInsuranceServiceProvider");
});

// -----------------------------------------------------------------------------------------------------------

export const routes = [
  //Admin
  {
    title: "StaffManagement",
    component: ViewStaffManagement,
    path: "/admin/staffManagement",
  },
  {
    title: "StaffManagement",
    component: CreateStaff,
    path: "/admin/createEmployee",
  },
  {
    title: "Payment",
    component: Payments,
    path: "/admin/payments",
  },
  {
    title: "Services",
    component: ViewServices,
    path: "/admin/services",
  },
  {
    title: "Update Service",
    component: UpdateService,
    path: "/admin/updateService/:id",
  },
  {
    title: " Service Provider ",
    component: ViewServiceProviders,
    path: "/admin/serviceProviders",
  },
  {
    title: "Create Service Provider",
    component: CreateServiceProvider,
    path: "/admin/createServiceProvider",
  },
  {
    title: "Company Plans",
    component: ViewPlans,
    path: "/admin/plans",
  },
  {
    title: "Dashboard",
    component: Dashboard,
    path: "/dashboard",
  },
  {
    title: "Users",
    component: User,
    path: "/users",
  },

  {
    title: "Create User",
    component: CreateUser,
    path: "/users/create-user",
  },

  {
    title: "Update User",
    component: UpdateUser,
    path: "/users/update-user",
  },

  {
    title: "Contact-Us",
    component: ContactUs,
    path: "/contact-us",
  },

  {
    title: "Plans",
    component: Plans,
    path: "/plans",
  },

  {
    title: "Proposal Form",
    component: ProposalForm,
    path: "/proposalForm/:plan",
  },

  // Insurance
  {
    title: "Insurances",
    component: Insurances,
    path: "/insurances",
  },
  {
    title: "Insurances",
    component: CreateInsurance,
    path: "/insurances/create-insurance",
  },

  // Insurance Service Provider
  {
    title: "Insurance Service Providers",
    component: InsuranceServiceProviders,
    path: "/insurances/insurance-service-providers",
  },
  {
    title: "Create Insurance Service Providers",
    component: CreateInsuranceServiceProvider,
    path: "/insurances/insurance-service-providers/create-insurance-service-provider",
  },
  //  Service


  {
    title: " View Brochures ",
    component: ViewBrochures,
    path: "/brochure",
  },
  {
    title: "Create Mutual Funds",
    component: MutualFunds,
    path: "/servicePlan/Mutual Fund/:id",
  },
  {
    title: "Bike Insurance",
    component: BikeInsurance,
    path: "/servicePlan/Motor Insurance",
  },
  {
    title: "Health Insurance",
    component: CreateHealthPlan,
    path: "/servicePlan/Health Insurance/:id",
  },
  {
    title: "Create Home Loan",
    component: HomeLoan,
    path: "/servicePlan/Home Loan/:id",
  },
  {
    title: "Vehicle Loan",
    component: VehicleLoan,
    path: "/servicePlan/Vehicle Loan/:id",
  },
  {
    title: "Create Whole Life Insurance",
    component: WholeLifeInsurancePlan,
    path: "/servicePlan/Life Insurance/:id",
  },

  /// Customer routes
  {
    title: "Calculator",
    component: CalculatorFunds,
    path: "/calculatorFunds",
  },
  {
    title: "My profile",
    component: Profile,
    path: "/profile",
  },
  {
    title: "Create profile",
    component: AddNewProfile,
    path: "/profile/createProfile",
  },
  {
    title: "Upload documents",
    component: Documents,
    path: "/clientDocuments",
  },
  {
    title: "Purchase",
    component: Purchase,
    path: "/user/purchase",
  },
  {
    title: "Renewal",
    component: Renewal,
    path: "/purchase/renewal",
  },
  {
    title: "Invoice",
    component: Invoices,
    path: "/purchase/invoices",
  },
  {
    title: "Complaint",
    component: Complain,
    path: "/user/complaint",
  },
  {
    title: "Consultant service request",
    component: ViewServiceRequest,
    path: "/consultant/serviceRequest",
  },
  {
    title: "Create Complaint",
    component: CreateRequest,
    path: "/user/complaint/createRequest",
  },
  {
    title: "My docs",
    component: FilesPage,
    path: "/clientFiles",
  },
  {
    title: "Files and Folders",
    component: filesAndFolder,
    path: "/consultant-filesManagement",
  },
  {
    title: "Files and Folders",
    component: FilesFolders,
    path: "/clientFiles/files-folders",
  },
  {
    title: "Schedule management",
    component: ScheduleManagement,
    path: "/user/scheduleManagement",
  },
  {
    title: "Policies",
    component: ViewPolicies,
    path: "/user/policies",
  },

  {
    title: "Blogs / Articles",
    component: Blogs,
    path: "/user/blogs",
  },

  {
    title: "Blogs / Articles",
    component: BlogDetails,
    path: "/user/blog/:id",
  },

  {
    title: "Notifications / Circulars",
    component: NotificationCirculars,
    path: "/user/notifications-circulars",
  },

  {
    title: "Announcements",
    component: Announcements,
    path: "/user/announcements",
  },
  {
    title: "Investment / Valuation / Portfolio",
    component: MutualFundLumSum,
    path: "/user/investment/mutualFundLumSum",
  },
  {
    title: "Investment / Valuation / Portfolio",
    component: MutualFundSIP,
    path: "/user/investment/mutualFundSIP",
  },
  {
    title: "Investment / Valuation / Portfolio",
    component: Shares,
    path: "/user/investment/shares",
  },
  {
    title: "Investment / Valuation / Portfolio",
    component: LifeInsurance,
    path: "/user/investment/lifeInsurance",
  },
  {
    title: "Investment / Valuation / Portfolio",
    component: HealthInsurance,
    path: "/user/investment/healthInsurance",
  },
  {
    title: "Investment / Valuation / Portfolio",
    component: Loans,
    path: "/user/investment/loans",
  },

  {
    title: "Customised Forms",
    component: CustomisedForms,
    path: "/user/customised-forms",
  },

  {
    title: "Investment / Valuation / Portfolio",
    component: ViewPortfolio,
    path: "/user/portfolio/:name",
  },

  /// Consultant Routes ///

  {
    title: "Blogs / Articles",
    component: BlogsList,
    path: "/consultant/blogs",
  },

  {
    title: "Contact Management",
    component: ContactManagement,
    path: "/consultant/contactManagement",
  },
  {
    title: "Contact Management",
    component: AddContactManagement,
    path: "/consultant/contactManagement/add",
  },
  {
    title: "Contact Management",
    component: UpdateContactManagement,
    path: "/consultant/contactManagement/:id",
  },

  {
    title: "Customer Feedbacks",
    component: CustomerFeedback,
    path: "/consultant/feedbacks",
  },
  {
    title: "Customer Documents",
    component: Documents,
    path: "/consultant/documents",
  },
  {
    title: "Company Profile",
    component: CompanyProfile,
    path: "/companyProfile",
  },
  {
    title: "Consultant Profile",
    component: ConsultantProfile,
    path: "/consultantProfile",
  },
  {
    title: "Consultant Plan",
    component: AllPlans,
    path: "/plans/:name",
  },
  {
    title: "Customised Plan",
    component: CustomizedPlans,
    path: "/customisedPlan",
  },
  {
    title: "Add Customised Plan",
    component: AddCustomisedPlan,
    path: "/customisedPlan/addPlan",
  },

  {
    title: "Announcements",
    component: AnnouncementsList,
    path: "/consultant/announcements",
  },

  {
    title: "Add Announcement",
    component: AddAnnouncement,
    path: "/consultant/announcements/add",
  },

  {
    title: "Update Announcement",
    component: UpdateAnnouncement,
    path: "/consultant/announcements/:id",
  },
  {
    title: "Notifications",
    component: NotificationsList,
    path: "/consultant/notifications-circulars",
  },

  {
    title: "Add Notifications / Circulars",
    component: AddNotification,
    path: "/consultant/notifications-circulars/add",
  },

  {
    title: "Update Notifications / Circulars",
    component: UpdateNotification,
    path: "/consultant/notifications-circulars/:id",
  },

  {
    title: "Quotation / Invoice Management",
    component: QuotationInvoiceList,
    path: "/consultant/quotation-invoice-management",
  },

  {
    title: "Quotation / Invoice Management",
    component: AddQuotationInvoice,
    path: "/consultant/quotation-invoice-management/add",
  },

  {
    title: "Quotation / Invoice Management",
    component: UpdateQuotationInvoice,
    path: "/consultant/quotation-invoice-management/:id",
  },
  {
    title: "Task Management",
    component: ViewTaskManagement,
    path: "/consultant/taskManagement",
  },
  {
    title: "Task Management - Add task",
    component: AddTask,
    path: "/consultant/taskManagement/addTask",
  },

  {
    title: "Customised Form",
    component: CustomisedFormList,
    path: "/consultant/customised-forms",
  },

  {
    title: "Customised Form",
    component: AddCustomisedForm,
    path: "/consultant/customised-forms/add",
  },

  {
    title: "Customised Form",
    component: UpdateCustomisedForm,
    path: "/consultant/customised-forms/:id",
  },

  {
    title: "CRM",
    component: ViewCrm,
    path: "/consultant/crm",
  },
  {
    title: "CRM",
    component: AddStatus,
    path: "/consultant/crm/addStatus",
  },
  {
    title: "Investment / Valuation / Portfolio",
    component: ViewAllPortfolio,
    path: "/consultant/portfolio/:name",
  },
  {
    title: "Income / Expense",
    component: YearIncomeExpense,
    path: "/consultant/incomeAndExpense/year",
  },
  {
    title: "Income / Expense",
    component: MonthIncomeExpense,
    path: "/consultant/incomeAndExpense/year/month",
  },
  {
    title: "Income / Expense",
    component: AddDailyIncome,
    path: "/consultant/incomeAndExpense/addIncome",
  },
  {
    title: "Income / Expense",
    component: AddDailyExpense,
    path: "/consultant/incomeAndExpense/addExpense",
  },
  {
    title: "Income / Expense",
    component: HeadingFormExpense,
    path: "/consultant/incomeAndExpense/addExpenseHeadings",
  },
  {
    title: "Income / Expense",
    component: HeadingFormIncome,
    path: "/consultant/incomeAndExpense/addIncomeHeadings",
  },
  {
    title: "Add Plans",
    component: AddPlans,
    path: "/consultant/addPlan",
  },

  {
    title: "SMS / E-Mails",
    component: SmsEmail,
    path: "/sms-email",
  },

  {
    title: "SMS / E-Mails",
    component: ComposeEmail,
    path: "/sms-email/add",
  },

  {
    title: "Enquiry / Leads Management",
    component: EnquiryLeadsManagement,
    path: "/enquiry-leads-management",
  },

  {
    title: "Enquiry / Leads Management",
    component: AddEnquiryLeads,
    path: "/enquiry-leads-management/add",
  },

  //Admin Routes

  {
    title: "Consultant Management",
    component: ViewConsultants,
    path: "/consultant-management",
  },

  {
    title: "Consultant Management",
    component: ManageConsultant,
    path: "/manage-consultant",
  },

  {
    title: "Consultant Management",
    component: CreateUser,
    path: "/consultant-management/create",
  },

  {
    title: "Consultant Management",
    component: UpdateUser,
    path: "/consultant-management/update",
  },

  {
    title: "Space Management",
    component: SpaceManagment,
    path: "/space-management",
  },
  {
    title: "Blogs & Testimonials",
    component: BlogsTestimonials,
    path: "/blogs-testimonials",
  },
 

  {
    title: "Privacy Policy",
    component: PrivacyPolicy,
    path: "/privacy-policy",
  },

  {
    title: "Refund Policy",
    component: RefundPolicy,
    path: "/refund-policy",
  },

  {
    title: "Terms & Conditions",
    component: TermsConditions,
    path: "/terms-conditions",
  },

  {
    title: "Shipping Policy",
    component: ShippingPolicy,
    path: "/shipping-policy",
  },

  {
    title: "Cancellation Policy",
    component: CancellationPolicy,
    path: "/cancellation-policy",
  },
  {
    title: "Consultant Service Provider",
    component: ConsultantServiceProviders,
    path: "/consultant/serviceProvider",
  },
  {
    title: "Consultant Service Provider",
    component: ViewConsultantServices,
    path: "/consultant/services",
  },
  {
    title: "Consultant Service Provider",
    component: AddServicePlan,
    path: "/consultant/add-service-plan",
  },





  //not found

  {
    title: "404 Not Found",
    component: NotFound,
    path: "/*",
  },

  
];
