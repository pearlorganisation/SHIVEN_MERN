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
      <div className="flex">
        <div className="w-[18%] ">
           <SideBar />
        </div>
        <div className="w-[82%]">
          {/* <Header /> */}
          <div className="h-dvh border-2">
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
