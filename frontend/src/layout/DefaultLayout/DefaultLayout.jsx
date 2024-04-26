// -------------------------------------------Imports----------------------------------------------------
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import SideBar from "../SideBar/SideBar";
// ------------------------------------------------------------------------------------------------------

const DefaultLayout = () => {
  // ------------------------------------------Hooks------------------------------------------------------
  const { loggedInUserData, isUserLoggedIn } = useSelector(
    (state) => state?.auth
  );
  // ------------------------------------------------------------------------------------------------------
  return isUserLoggedIn ? (
    <>
      <div className="flex w-[100vw]">
        <div className="w-[20%] min-w-[10px] bg-slate-800">
           <SideBar />
        </div>
        <div className="w-[80%]">
          {/* <Header /> */}
          <div className="">
          <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </>
  ) : (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
