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
import ViewBikeInsurance from "../pages/ServicePlans/bikeInsurance/ViewBikeInsurance";
import HealthPlan from "../pages/ServicePlans/healthInsurance/HealthPlan";
import CreateHealthPlan from "../pages/ServicePlans/healthInsurance/CreateHealthPlan";
import ViewBrochures from "../pages/Service/consultant/ViewBrochures";
import ViewMutualFund from "../pages/ServicePlans/mutualFund/ViewMutualFund";
import ViewWholeLifeInsurance from "../pages/ServicePlans/wholeLifeInsurance/ViewWholeLifeInsurance";
import WholeLifeInsurancePlan from "../pages/ServicePlans/wholeLifeInsurance/WholeLifeInsurance";
import ViewHomeLoan from "../pages/ServicePlans/homeLoan/ViewHomeLoan";
import HomeLoan from "../pages/ServicePlans/homeLoan/HomeLoan";
import CompanyProfile from "../components/CompanyProfile/CompanyProfile";
import ViewVehicleLoan from "../pages/ServicePlans/vehicleLoan/ViewVehicleLoan";
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
import ViewTaskManagement from "../pages/Service/consultant/taskManagement/ViewTaskManagement";
import AddTask from "../pages/Service/consultant/taskManagement/AddTask";
import MutualFundLumSum from "../pages/Service/user/investment/MutualFundLumSum";
import MutualFundSIP from "../pages/Service/user/investment/MutualFundSIP";
import Shares from "../pages/Service/user/investment/Shares";
import LifeInsurance from "../pages/Service/user/investment/LifeInsurance";
import HealthInsurance from "../pages/Service/user/investment/HealthInsurance";
import Loans from "../pages/Service/user/investment/Loans";

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
const CreateService = lazy(() => {
  return import("../pages/Service/admin/CreateService");
});

const MutualFunds = lazy(() => {
  return import("../pages/ServicePlans/mutualFund/MutualFund");
});


const BikeInsurance = lazy(() => {
  return import("../pages/ServicePlans/bikeInsurance/BikeInsurance");
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
    title: " Service ",
    component: ViewServices,
    path: "/service",
  },
  {
    title: "Create Service",
    component: CreateService,
    path: "/service/addService",
  },
  {
    title: " Service Provider ",
    component: ViewServiceProviders,
    path: "/serviceProvider",
  },
  {
    title: "Create Service Provider",
    component: CreateServiceProvider,
    path: "/serviceProvider/createServiceProvider",
  },
  {
    title: " View Brochures ",
    component: ViewBrochures,
    path: "/brochure",
  },

  {
    title: "Mutual Funds",
    component: ViewMutualFund,
    path: "/servicePlan/view-mutual-fund",
  },
  {
    title: "Create Mutual Funds",
    component: MutualFunds,
    path: "/servicePlan/mutual-fund",
  },
  {
    title: "Bike Insurance",
    component: BikeInsurance,
    path: "/servicePlan/bike-insurance",
  },
  {
    title: "View Bike Insurance",
    component: ViewBikeInsurance,
    path: "/servicePlan/view-bike-insurance",
  },
  {
    title: "Health Insurance",
    component: CreateHealthPlan,
    path: "/servicePlan/health-insurance",
  },
  {
    title: "View Health Insurance",
    component: HealthPlan,
    path: "/servicePlan/view-health-insurance",
  },
  {
    title: "Create Home Loan",
    component: HomeLoan,
    path: "/servicePlan/home-loan",
  },
  {
    title: "View Home Loan",
    component: ViewHomeLoan,
    path: "/servicePlan/view-home-loan",
  },
  {
    title: "View Vehicle Loan",
    component: ViewVehicleLoan,
    path: "/servicePlan/view-vehicle-loan",
  },
  {
    title: "Vehicle Loan",
    component: VehicleLoan,
    path: "/servicePlan/vehicle-loan",
  },

  {
    title: "View Whole Life Insurance",
    component: ViewWholeLifeInsurance,
    path: "/servicePlan/view-whole-life-insurance",
  },
  {
    title: "Create Whole Life Insurance",
    component: WholeLifeInsurancePlan,
    path: "/servicePlan/whole-life-insurance",
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
    component: LifeInsurance ,
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
    title: "CRM",
    component: ViewCrm,
    path: "/consultant/crm",
  },
  {
    title: "CRM add status",
    component: AddStatus,
    path: "/consultant/crm/addStatus",
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
  //not found

{
    title: "404 Not Found",
    component: NotFound,
    path: "/*",
  },
];
