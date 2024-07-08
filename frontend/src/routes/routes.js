import { lazy } from "react";

// --------------------------------------------------Imports--------------------------------------------------
const Dashboard = lazy(() => {
  return import("../components/Dashboard/Dashboard");
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
const HealthPremium = lazy(() => {
  return import("../components/CheckPremium/HealthPremium");
});

// -----------------------------------------------------------------------------------------------------------
{
  /* <Route path="/" index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/getotp" element={<GetOtp />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/newpassword" element={<NewPassword />} />
          <Route path="/lifeinsurance" element={<Life_insurance />} />
          <Route path="/lifeinsurance" element={<Life_insurance />} />
          <Route path="/Healthinsurance" element={<Healthinsurance />} />
          <Route
            path="/single_healthinsurance"
            element={<Single_HealthPage />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogDetails" element={<BlogDetails />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/notification" element={<Notifications />} />
          <Route path="/plan" element={<Plans />} /> */
}
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
];
