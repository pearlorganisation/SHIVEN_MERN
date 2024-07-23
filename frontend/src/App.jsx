import { Suspense, useState } from "react";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/auth/Login/Login";
import GetOtp from "./pages/auth/GetOtp/GetOtp";
import Verification from "./pages/auth/verification/Verification";
import NewPassword from "./pages/NewPassword/NewPassword";
import Life_insurance from "./components/insurance/Life_insurance/Life_insurance";
import Healthinsurance from "./components/insurance/Health_insurance/Healthinsurance";
import Single_HealthPage from "./components/insurance/Health_insurance/Single_HealthPage";
import Dashboard from "./components/Dashboard/Dashboard";
import SideBar from "./layout/SideBar/SideBar";
import "./App.css";

import Invoice from "./components/Dashboard/Invoice";
import Notifications from "./components/Dashboard/Notifications";
import Plans from "./components/Dashboard/Plans";

import Blog from "./components/Dashboard/Blog/Blog";
import BlogDetails from "./components/Dashboard/Blog/BlogDetails";
import DefaultLayout from "./layout/DefaultLayout/DefaultLayout";
import ProtectedRoutesHandler from "./layout/ProtectedRoutesHandler/ProtectedRoutesHandler";
import { routes } from "./routes/routes";
import { useSelector } from "react-redux";
import FileFolder from "./components/Dashboard/FileFolder";
import ConsultantDashboard from "./components/Dashboard/ConsultantDashboard";
import DesiredPlan from "./components/Dashboard/DesiredPlan";
import ScheduleMeeting from "./components/Dashboard/ScheduleMeeting";
import Accounting from "./components/Dashboard/Accounting";
import FillForm from "./components/Dashboard/FillForm";
import ProposalForm from "./components/Dashboard/ProposalForm";
import Healthquote from "./components/insurance_quotation/Healthquote";
import Motorqoute from "./components/insurance_quotation/Motorqoute";
import MotorInsurance from "./components/insurance/MotorInsurance/MotorInsurance";
import AllinsuranceQuote from "./components/insurance_quotation/AllinsuranceQuote";
import Compnay from "./components/Company/Company";
import InsuranceProvider from "./pages/Insurance/InsuranceProvider/InsuranceProvider";
import HealthPremium from "./components/CheckPremium/HealthPremium";
import PlanDetails from "./components/CheckPremium/PlanDetails";
import Enquiry from "./components/CheckPremium/Enquiry";

// -------------------------------------------------------------------------------------------------------------

function App() {
  // ---------------------------------------------Hooks--------------------------------------------------------
  const { isUserLoggedIn } = useSelector((state) => state?.auth);
  // -----------------------------------------------------------------------------------------------------------
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route
            path="/"
            index
            element={isUserLoggedIn ? <Navigate to="/dashboard" /> : <Home />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/getotp" element={<GetOtp />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/newpassword" element={<NewPassword />} />

          <Route
            path="/single_healthinsurance"
            element={<Single_HealthPage />}
          />
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogDetails" element={<BlogDetails />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/notification" element={<Notifications />} />
          <Route path="/plan" element={<Plans />} />
          <Route path="/file&folder" element={<FileFolder />} />
          <Route path="/consultdashboard" element={<ConsultantDashboard />} />
          <Route path="/desiredplan" element={<DesiredPlan />} />
          <Route path="/schedulemeeting" element={<ScheduleMeeting />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/fillform" element={<FillForm />} />
          <Route path="/proposalForm" element={<ProposalForm />} />

          {/* -----------------------------------Insurance Routes----------------------------------------- */}

          <Route path="/motor-insurance" element={<MotorInsurance />} />
          <Route path="/health-insurance" element={<Healthinsurance />} />
          <Route
            path="/health-insurance/:insuranceProvider"
            element={<InsuranceProvider />}
          />
          <Route
            path="/health-insurance/:insuranceProvider/:insuranceCategory/enquiry"
            element={<Healthquote />}
          />
          <Route
            path="/motor-insurance/:insuranceProvider/enquiry"
            element={<Motorqoute />}
          />
          {/* --------------------------------------------------------------------------------------------- */}
          <Route path="allinsuranceQuote" element={<AllinsuranceQuote />} />
          <Route path="company" element={<Compnay />} />
          <Route path="HealthPremium" element={<HealthPremium />} />
          <Route path="PlanDetails" element={<PlanDetails />} />
          <Route path="enquiry" element={<Enquiry />} />

          {/* Protected Routes */}

          {routes.map((route) => {
            const { component: Component, path } = route;
            return (
              <Route element={<ProtectedRoutesHandler />}>
                <Route
                  path={path}
                  element={
                    <Suspense fallback={<h1>Loading...</h1>}>
                      <Component />
                    </Suspense>
                  }
                />
              </Route>
            );
          })}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
