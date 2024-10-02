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
const ViewServicePlans = lazy(() => {
  return import("../pages/Service/admin/ViewServicePlans");
});
const CreateServicePlan = lazy(() => {
  return import("../pages/Service/admin/CreateServicePlan");
});

const MutualFunds = lazy(() => {
  return import("../pages/ServicePlans/MutualFund");
});

const HomeLoan = lazy(() => {
  return import("../pages/ServicePlans/HomeLoan");
});

const BikeInsurance = lazy(() => {
  return import("../pages/ServicePlans/BikeInsurance");
});

const VehicleLoan = lazy(() => {
  return import("../pages/ServicePlans/VehicleLoan");
});

const WholeLifeInsurance = lazy(() => {
  return import("../pages/ServicePlans/WholeLifeInsurance");
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
    path: "/service/createService",
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
    title: " Service Plan ",
    component: ViewServicePlans,
    path: "/servicePlan",
  },
  {
    title: "Create Service Plan",
    component: CreateServicePlan,
    path: "/servicePlan/createServicePlan",
  },

  {
    title: "Mutual Funds",
    component: MutualFunds,
    path: "/servicePlan/mutual-fund",
  },
  {
    title: "Home Loan",
    component: HomeLoan,
    path: "/servicePlan/home-loan",
  },

  {
    title: "Bike Insurance",
    component: BikeInsurance,
    path: "/servicePlan/bike-insurance",
  },
  {
    title: "Vehicle Loan",
    component: VehicleLoan,
    path: "/servicePlan/vehicle-loan",
  },

  {
    title: "Whole Life Insurance",
    component: WholeLifeInsurance,
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
    component: FilesFolders,
    path: "/clientFiles/files-folders",
  },
  {
    title: "Schedule management",
    component: ScheduleManagement,
    path: "/user/scheduleManagement",
  },

  /// Consultant Routes ///
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
];
