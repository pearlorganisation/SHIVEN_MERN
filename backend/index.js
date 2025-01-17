// -----------------------------------------------Imports-------------------------------------------------------
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import { CustomError } from "./src/Utils/Error/CustomError.js";
import { mongoConnect } from "./src/Configs/DB/mongo.js";
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

mongoConnect();
// -------------------------------------------------------------------------------------------------------------

// ----------------------------------------------Cors Handling--------------------------------------------------
app.use(
  cors({
    origin:
      process.env.NODE_WORKING_ENV === "development"
        ? [
            "http://localhost:5173",
            "http://localhost:5174",
            "http://localhost:5175",
            "https://shiven-mern.vercel.app",
            "https://assetmanagment.in",
            "https://app.assetmanagment.in"
          ]
        : [
            "http://localhost:5173",
            "http://localhost:5174",
            "http://localhost:5175",
            "https://shiven-mern.vercel.app",
            "https://assetmanagment.in",
            "https://app.assetmanagment.in"
            
          ],
    credentials: false,
    allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
    exposedHeaders: ["*", "Authorization"],
  })
);
// -------------------------------------------------------------------------------------------------------------
// ----------------------------------------------Middlewares----------------------------------------------------
// express.json() -- middleware to parse the json data coming from the http request
app.use(express.json());

// cookieParser() -- middleware to parse the cookie data coming from the http request
app.use(cookieParser());
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------Routes----------------------------------------------------

// Router Imports
import { authRouter } from "./src/Routes/Auth/authRoutes.js";
import { enquiryRouter } from "./src/Routes/Enquiry/enquiryRoutes.js";
import serviceRouter from "./src/Routes/Service/service.js";
import servicePlanRouter from "./src/Routes/Service/servicePlan.js";
import serviceProviderRouter from "./src/Routes/Service/serviceProvider.js";
import consultantRouter from "./src/Routes/Auth/consultantRoutes.js";
import brochureRouter from "./src/Routes/brochure.js";
import customisedFormRouter from "./src/Routes/customisedForm.js";
import customerProfileRouter from "./src/Routes/customerProfile.js";
import consultantProfileRouter from "./src/Routes/consultantProfile.js"
import companyProfileRouter from "./src/Routes/companyProfile.js"
import { customerRouter } from "./src/Routes/Auth/customer.js";
import filesAndFoldersRouter from "./src/Routes/filesAndFolders.js";

// Route Middlewares

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/consultant", consultantRouter);
app.use("/api/v1/customer", customerRouter);
app.use("/api/v1/enquiry", enquiryRouter);
app.use("/api/v1/service", serviceRouter);
app.use("/api/v1/servicePlan", servicePlanRouter);
app.use("/api/v1/serviceProvider", serviceProviderRouter);
app.use("/api/v1/brochure", brochureRouter);
app.use("/api/v1/customisedForm", customisedFormRouter);
app.use("/api/v1/customerProfile", customerProfileRouter);
app.use("/api/v1/consultantProfile", consultantProfileRouter);
app.use("/api/v1/companyProfile", companyProfileRouter);
app.use("/api/v1/filesAndFolders", filesAndFoldersRouter);


app.all(["/", "/api", "/api/v1"], (req, res, next) => {
  return res.status(200).json({
    message: "Welcome to Shiven",
  });
});
// -------------------------------------------------------------------------------------------------------------

// ------------------------------------------Global Error Handling----------------------------------------------
app.all("*", (req, res, next) => {
  const err = new CustomError(`No such ${req.originalUrl} url exists`, 404);
  next(err);
});

app.use((error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  return res.status(error.statusCode).json({
    success: false,
    message: error.message,
  });
});
// -------------------------------------------------------------------------------------------------------------

app.listen(PORT, () => {
  console.log(`Server Running at port http://localhost:${PORT}`);
});
// -------------------------------------------------------------------------------------------------------------
