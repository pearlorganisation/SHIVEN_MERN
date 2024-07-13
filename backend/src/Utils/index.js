// -------------------------------------------------Imports--------------------------------------------------
import dotenv from "dotenv";
dotenv.config();
// ----------------------------------------------------------------------------------------------------------

// ---------------------------------------------Cookie---------------------------------------------------------

const httpOnlyCookieValidity = () => {
  let currentDate = new Date();
  return new Date(currentDate.getTime() + 1000 * 60 * 60 * 24 * 15); // expiring cookie after 15 days
};

export const saveAccessTokenToCookie = (res, token) => {
  return res.cookie("SHIVEN_ACCESS_TOKEN", token, {
    httpOnly: true,
    expires: httpOnlyCookieValidity(),
    sameSite: process.env.NODE_ENV === "development" ? "none" : "Lax",
    ...(process.env.NODE_ENV === "production" && { secure: true }),
  });
};
// ------------------------------------------------------------------------------------------------------------
// ---------------------------------------------Roles-----------------------------------------------------------
export const availableRoles = ["OWNER", "ADMIN", "CONSULTANT", "CUSTOMER"];
// ------------------------------------------------------------------------------------------------------------
// ---------------------------------------------envAccess-------------------------------------------------------
export const envAccess = (field) => {
  return process?.env?.[field] || "";
};
// ------------------------------------------------------------------------------------------------------------
